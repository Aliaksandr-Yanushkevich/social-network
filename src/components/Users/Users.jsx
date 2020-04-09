import React from "react";
import s from "./Users.module.scss";
import stan from "./img/stan.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

const API_KEY = "71dc6f3f-2907-4703-a9c6-e1ecaf056f41";

const Users = ({
  totalUsersCount,
  pageSize,
  currentPage,
  users,
  onPageChanged,
  follow,
  unfollow,
  followingInProgress,
  toggleFollowingProgress,
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
                    onClick={() => {
                      toggleFollowingProgress(true, u.id);
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": API_KEY,
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            unfollow(u.id);
                          }
                          toggleFollowingProgress(false, u.id);
                        });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={followingInProgress.some((id) => id === u.id)}
                    className={s.button}
                    onClick={() => {
                      toggleFollowingProgress(true, u.id);
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": API_KEY,
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            follow(u.id);
                          }
                          toggleFollowingProgress(false, u.id);
                        });
                    }}
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
