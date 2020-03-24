import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { addNewPost, updateNewPostText } from "./redux/state";
import state from './redux/state';

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state} addNewPost={addNewPost} updateNewPostText={updateNewPostText} />
        </BrowserRouter>, document.getElementById('root'));
}