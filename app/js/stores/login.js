"use strict";

import Dispatcher     from "../dispatcher";
import Constants      from "../constants";
import StoreCommon    from "./store_common";
import assign         from "object-assign";
import _              from "lodash";

let _loginStoreState = {
	loggingIn: false,
	error: "",
};

const LoginStore = assign({}, StoreCommon, {
  current(){
    return _loginStoreState;
  },
});

// Register callback with Dispatcher
Dispatcher.register((payload) => {

  switch(payload.action){
    case Constants.LOGIN_PENDING:
      _loginStoreState.loggingIn = true;
      _loginStoreState.error = "";
  	  LoginStore.emitChange();
      break;
    case Constants.LOGIN_COMPLETE:
      _loginStoreState.loggingIn = false;
      _loginStoreState.error = "";
  	  LoginStore.emitChange();
      break;
    case Constants.LOGIN_FAILURE:
      _loginStoreState.loggedIn = false;
      _loginStoreState.error = payload.error;
      LoginStore.emitChange();
      break;
    default:
      //No op
  }

  return true;

});

export default LoginStore;
