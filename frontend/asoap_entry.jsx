import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import * as SessionActions from './actions/session_actions';
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }


    // let store = configureStore();
    
    //for testing
    window.getState = store.getState;
    window.dispatch = store.dispatch; 
    window.login = SessionActions.login;
    window.signup = SessionActions.signup;
    window.logout = SessionActions.logout;

    
    // end of testing
    debugger
    const root = document.getElementById('root')
    ReactDOM.render(<Root store={store}  />, root);
});



//SessionAPIUtil is an object
