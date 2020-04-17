import React from 'react';
import { Route, withRouter } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import MessagesContainer from './components/Messages/MessagesContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import s from './App.module.scss';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login'
import Loader from "react-loader-spinner";
import { connect } from 'react-redux';
import {
  initilizeApp,
} from "./redux/appReducer";
import { compose } from 'redux';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    if (this.props.isFetching) {
      return <Loader type="Puff" color="#00BFFF" height={100} width={100} />;
    }
    this.props.initilizeApp();
  }
  render() {
    if (!this.props.initialized) return <Loader type="Puff" color="#00BFFF" height={100} width={100} />;
    return (
      <div className={s.app_wrapper}>
        <HeaderContainer />
        <div className={s.app_wrapper_content}>
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/messages" render={() => <MessagesContainer />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
        <NavBar />
      </div>

    )
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
export default compose(withRouter, connect(mapStateToProps, { initilizeApp }))(App);
