import React from 'react';
import { Route } from "react-router-dom";
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import MessagesContainer from './components/Messages/MessagesContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import s from './App.module.scss';

const App = () => {
  return (
    <div className={s.app_wrapper}>
      <Header />
      <div className={s.app_wrapper_content}>
        <Route path="/profile" render={() => <Profile  />} />
        <Route path="/messages" render={() => <MessagesContainer />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
      <NavBar />
    </div>

  )
}

export default App;
