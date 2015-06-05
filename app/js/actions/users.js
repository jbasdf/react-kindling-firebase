"use strict";

import Constants   from "../constants";
import Dispatcher  from "../dispatcher";
import Auth        from "../utils/auth";

export default {

  login(payload){
    Dispatcher.dispatch({ action: Constants.LOGIN_PENDING });
    Auth.login(payload.email, payload.password, () => {
      Dispatcher.dispatch({ action: Constants.LOGIN_COMPLETE });
    });
  },

  logout(){
    Dispatcher.dispatch({ action: Constants.LOGOUT_PENDING });
    Auth.logout(() => {
      Dispatcher.dispatch({ action: Constants.LOGOUT_COMPLETE });
    });
  },

  oAuthLogin(payload){
    Dispatcher.dispatch({ action: Constants.LOGIN_PENDING });
    Auth.oAuthLogin(payload.provider, function(){
      Dispatcher.dispatch({action: Constants.LOGIN_COMPLETE})
    });
  },

  register(payload) {
    Dispatcher.dispatch({ action: Constants.REGISTER_PENDING });
    Auth.register(payload);
  }

};
