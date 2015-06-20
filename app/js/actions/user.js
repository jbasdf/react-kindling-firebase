"use strict";

import Constants       from "../constants";
import Dispatcher      from "../dispatcher";
import User            from "../utils/user";
import RouterContainer from "../utils/router-container";

export default {

  create(payload) {
    Dispatcher.dispatch({ action: Constants.REGISTER_PENDING });
    User.create(payload, () => {
      Dispatcher.dispatch({action: Constants.REGISTER_COMPLETE});
    });
  },

  registerFailed(message){
    Dispatcher.dispatch({ action: Constants.REGISTER_FAILED, error: message });
  },

  registerSucceeded(){
    RouterContainer.get().transitionTo('/login');
    Dispatcher.dispatch({action: Constants.REGISTER_SUCCEEDED});
  },

  saveProfile(data){
    Dispatcher.dispatch({action: Constants.PROFILE_SAVE_PENDING});
    User.saveProfile(data, () => {
      RouterContainer.get().transitionTo("/");
      Dispatcher.dispatch({action: Constants.PROFILE_SAVE_COMPLETE});
    });
  },

};
