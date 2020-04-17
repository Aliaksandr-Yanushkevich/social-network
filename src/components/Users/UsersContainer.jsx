import Users from "./Users";
import { connect } from "react-redux";
import React from "react";
import Loader from "react-loader-spinner";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  requestUsers,
} from "../../redux/usersReducer";
// import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getPageSize, getUsers, getTotalUsersCount, getIsFetching, getFollowingInProgress } from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);
  };

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize);
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

// const mapStateToProps = ({ usersPage }) => {
//   const {
//     users,
//     currentPage,
//     pageSize,
//     totalUsersCount,
//     isFetching,
//     followingInProgress,
//   } = usersPage;
//   return {
//     users,
//     currentPage,
//     pageSize,
//     totalUsersCount,
//     isFetching,
//     followingInProgress,
//   };
// };

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers,
  }),
  // withAuthRedirect
)(UsersContainer);
