"use strict";

import Constants   from "../constants";
import Dispatcher  from "../dispatcher";
import Auth        from "../utils/auth2";

export default {

  login(payload){
    Dispatcher.dispatch({ action: Constants.LOGIN_PENDING });
    Auth.login(payload.email, payload.password, () => {
      Dispatcher.dispatch({ action: Constants.LOGIN_COMPLETE });
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
