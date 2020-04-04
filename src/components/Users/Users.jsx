import React, { Fragment } from "react";
import s from "./Users.module.scss";
import kenny from "./img/kenny.png";
import butters from "./img/butters.png";
import stan from "./img/stan.png";
import kyle from "./img/kyle.png";
import * as axios from "axios";

class Users extends React.Component {
  getUsers = () => {
    if (this.props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          debugger;
          this.props.setUsers(response.data.items);
        });
    }
  };

  render() {
    debugger;
    return (
      <Fragment>
        <button className={s.button} onClick={this.getUsers}>
          Get users
        </button>
        <div className={s.usersWrapper}>
          {this.props.users.map((u) => {
            return (
              <div className={s.user}>
                <div className={s.userImg}>
                  <img
                    src={u.photos.small ? u.photos.small : stan}
                    alt={u.name}
                  />
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
                      className={s.button}
                      onClick={() => this.props.unfollow(u.id)}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      className={s.button}
                      onClick={() => this.props.follow(u.id)}
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
      </Fragment>
    );
  }
}

export default Users;
