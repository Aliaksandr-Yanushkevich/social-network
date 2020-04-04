import React from "react";
import s from "./Users.module.scss";
import kenny from "./img/kenny.png";
import butters from "./img/butters.png";
import stan from "./img/stan.png";
import kyle from "./img/kyle.png";

const Users = ({ users, follow, unfollow, setUsers }) => {
  let avatar;
  if (users.length === 0) {
    setUsers([
      {
        id: 1,
        followed: true,
        userImg: "../Users/img/kenny.png",
        name: "Kenny",
        status: "I'm missing you",
        location: { city: "South Park", country: "USA" }
      },
      {
        id: 2,
        followed: true,
        userImg: "../Users/img/butters.png",
        name: "Butters",
        status: "I'm searching for a job right now!",
        location: { city: "South Park", country: "USA" }
      },
      {
        id: 3,
        followed: true,
        userImg: "../Users/img/stan.png",
        name: "Stan",
        status: "Playing DOTA 2",
        location: { city: "South Park", country: "USA" }
      },
      {
        id: 4,
        followed: false,
        userImg: "../Users/img/kyle.png",
        name: "Kyle",
        status: "Working hard",
        location: { city: "South Park", country: "USA" }
      }
    ]);
  }

  return (
    <div className={s.usersWrapper}>
      {users.map(u => {
        switch (u.name) {
          case "Kenny":
            avatar = kenny;
            break;
          case "Butters":
            avatar = butters;
            break;
          case "Stan":
            avatar = stan;
            break;
          case "Kyle":
            avatar = kyle;
            break;
        }
        return (
          <div className={s.user}>
            <div className={s.userImg}>
              <img src={avatar} alt={u.name} />
            </div>
            <div className={s.userInfo}>
              <h2>{u.name}</h2>
              <ul>
                <li>
                  {u.location.city}, {u.location.country}
                </li>
                <li>{u.status}</li>
              </ul>
              {u.followed ? (
                <button className={s.button} onClick={() => unfollow(u.id)}>
                  Unfollow
                </button>
              ) : (
                <button className={s.button} onClick={() => follow(u.id)}>
                  Follow
                </button>
              )}
            </div>
            <div className={s.buttonWrapper}></div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
