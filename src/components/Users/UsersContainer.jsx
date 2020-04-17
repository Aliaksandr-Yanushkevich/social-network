import Users from "./Users";
import { connect } from "react-redux";
import React from "react";
import Loader from "react-loader-spinner";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
} from "../../redux/usersReducer";
// import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);
  };

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
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

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
  }),
  // withAuthRedirect
)(UsersContainer);
