import Users from "./Users";
import { connect } from "react-redux";
import React from "react";
import * as axios from "axios";
import Loader from "react-loader-spinner";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  tooggleIsFetching,
} from "../../redux/usersReducer";
import { withRouter } from "react-router-dom";

class UsersContainer extends React.Component {
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.tooggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.tooggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.tooggleIsFetching(true);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.tooggleIsFetching(false);
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
  }

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
          />
        ) : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

const mapStateToProps = ({ usersPage }) => {
  const {
    users,
    currentPage,
    pageSize,
    totalUsersCount,
    isFetching,
  } = usersPage;
  return {
    users,
    currentPage,
    pageSize,
    totalUsersCount,
    isFetching,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  tooggleIsFetching,
})(UsersContainer);
