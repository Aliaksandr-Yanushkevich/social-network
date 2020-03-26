import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { addNewPost, updateNewPostText, sendNewMessage, updateNewMessageText } from './redux/state';
import state, { subscribe } from './redux/state';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state} addNewPost={addNewPost} updateNewPostText={updateNewPostText} sendNewMessage={sendNewMessage} updateNewMessageText={updateNewMessageText} />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
