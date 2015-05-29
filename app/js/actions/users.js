"use strict";

import Constants   from "../constants";
import Dispatcher  from "../dispatcher";
import Auth        from "../utils/auth";

export default {

  login(payload){
    Dispatcher.dispatch({ action: Constants.LOGIN_PENDING });
    Auth.login(payload.email, payload.password, function(){
      Dispatcher.dispatch({ action: Constants.LOGIN_COMPLETE });
    });
  },

  oAuthLogin(payload){
    Dispatcher.dispatch({ action: Constants.LOGIN_PENDING });
    Auth.oAuthLogin(payload.provider, function(){
      if(loginResponse.success)
        Dispatcher.dispatch({
          action: Constants.LOGIN_COMPLETE,
          userData: loginResponse.userData
        });
      else
        Dispatcher.dispatch({action: Constants.LOGIN_FAILURE })
    });
  },

  register(payload) {
    Dispatcher.dispatch({ action: Constants.REGISTER_PENDING });
    Auth.register(payload);
  }

};
