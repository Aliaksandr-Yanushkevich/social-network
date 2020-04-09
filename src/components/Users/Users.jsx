import React from "react";
import s from "./Users.module.scss";
import stan from "./img/stan.png";
import { NavLink } from "react-router-dom";

const Users = ({
  totalUsersCount,
  pageSize,
  currentPage,
  users,
  onPageChanged,
  follow,
  unfollow,
  followingInProgress,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <>
      <div className={s.pages}>
        <ul>
          {pages.map((p) => {
            return (
              <li>
                <span
                  className={p === currentPage ? s.selectedPage : ""}
                  onClick={() => onPageChanged(p)}
                >
                  {p}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={s.usersWrapper}>
        {users.map((u) => {
          return (
            <div className={s.user}>
              <div className={s.userImg}>
                <NavLink to={"/profile/" + u.id}>
                  <img
                    src={u.photos.small ? u.photos.small : stan}
                    alt={u.name}
                  />
                </NavLink>
              </div>
              <div className={s.userInfo}>
                <h2>{u.name}</h2>
                <ul>
                  <li>
                    {"u.location.city"}, {"u.location.country"}
                  </li>
                  <li>{u.status}</li>
                </ul>
                {u.followed ? (
                  <button
                    disabled={followingInProgress.some((id) => id === u.id)}
                    className={s.button}
                    onClick={() => unfollow(u.id)}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={followingInProgress.some((id) => id === u.id)}
                    className={s.button}
                    onClick={() => follow(u.id)}
                  >
                    Follow
                  </button>
                )}
              </div>
              <div className={s.buttonWrapper}></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Users;
