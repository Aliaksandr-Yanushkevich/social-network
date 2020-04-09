import React from "react";
import Header from "./Header";
import {
  setUserData,
  setUserPhoto,
  tooggleIsFetching,
} from "../../redux/authReducer";
import * as axios from "axios";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    if (this.props.isFetching) {
      return <Loader type="Puff" color="#00BFFF" height={100} width={100} />;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        this.props.tooggleIsFetching(false);
        this.props.setUserData(response.data.data);
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapsStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.auth.isFetching,
    photo: state,
  };
};
export default connect(mapsStateToProps, {
  setUserData,
  tooggleIsFetching,
  setUserPhoto,
})(HeaderContainer);
