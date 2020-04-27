import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './redux/redux-store.js';
// import {addPost, updateNewPostText, addMessage, updateMessageText, subscribe} from './redux/state.js';

import App from './App';

import './index.css';
import './main.scss';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));

/*renderEntireTree();*/

/*
store.subscribe( () => {
    //let state = store.getState();
    renderEntireTree(store.getState());
});
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
