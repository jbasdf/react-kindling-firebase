"use strict";

import Constants       from "../constants";
import Dispatcher      from "../dispatcher";
import Auth            from "../utils/auth";
import RouterContainer from "../utils/router-container";

export default {

	loginUser: (authData, profileData) => {
    let userData = {
      authData: authData,
      profileData: profileData
    };
    //if(!profileData)
      RouterContainer.get().transitionTo('/profile');
		//else 
      //RouterContainer.get().transitionTo('/');
		Dispatcher.dispatch({action: Constants.LOGIN_SUCCESS, data: userData });
	},

	logoutUser: () => {
		RouterContainer.get().transitionTo('/login');
		Dispatcher.dispatch({action: Constants.LOGOUT });
	},

	loginFailure: (error) => {
		Dispatcher.dispatch({action: Constants.LOGIN_FAILURE, error: "Invalid username or password." })
	},

	login: (payload) => {
    Dispatcher.dispatch({ action: Constants.LOGIN_PENDING });
    Auth.login(payload.email, payload.password, () => {
      Dispatcher.dispatch({ action: Constants.LOGIN_COMPLETE });
    });
  },

  logout: () => {
    Dispatcher.dispatch({ action: Constants.LOGOUT_PENDING });
    Auth.logout(() => {
      Dispatcher.dispatch({ action: Constants.LOGOUT_COMPLETE });
    });
  },

  oAuthLogin: (payload) => {
    Dispatcher.dispatch({ action: Constants.LOGIN_PENDING });
    Auth.oAuthLogin(payload.provider, () => {
      Dispatcher.dispatch({action: Constants.LOGIN_COMPLETE})
    });
  }

}
