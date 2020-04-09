import Users from "./Users";
import { connect } from "react-redux";
import React from "react";
import Loader from "react-loader-spinner";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
} from "../../redux/usersReducer";
import { usersApi } from "../../api/api";

class UsersContainer extends React.Component {
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersApi.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.toggleIsFetching(true);
      usersApi
        .getUsers(this.props.currentPage, this.props.pageSize)
        .then((data) => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(data.items);
          this.props.setTotalUsersCount(data.totalCount);
        });
    }
  }

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        ) : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
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
    followingInProgress,
  } = usersPage;
  return {
    users,
    currentPage,
    pageSize,
    totalUsersCount,
    isFetching,
    followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
})(UsersContainer);
