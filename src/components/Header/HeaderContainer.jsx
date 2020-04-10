import React from "react";
import Header from "./Header";
import {
  setUserPhoto,
  tooggleIsFetching,
  getAuthUserData,
} from "../../redux/authReducer";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    if (this.props.isFetching) {
      return <Loader type="Puff" color="#00BFFF" height={100} width={100} />;
    }
    this.props.getAuthUserData();
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
  tooggleIsFetching,
  setUserPhoto,
  getAuthUserData,
})(HeaderContainer);
