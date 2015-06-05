"use strict";

import {LOGOUT, LOGIN_FAILURE, LOGIN_SUCCESS}   from "../constants";
import Dispatcher  from "../dispatcher";
import Auth        from "../utils/auth2";
import RouterContainer  from "../utils/router-container";

export default {

	loginUser: (token) => {
		RouterContainer.get().transitionTo('/');
		//localStorage.setItem('token', token);
		Dispatcher.dispatch({action: LOGIN_SUCCESS, token: token });
	},

	logoutUser: () => {
		RouterContainer.get().transitionTo('/login');
		//localStorage.removeItem('token');
		Dispatcher.dispatch({action: LOGOUT });
	},

	loginFailure: (error) => {
		Dispatcher.dispatch({action: LOGIN_FAILURE, error: "Invalid username or password.", })
	}

}
