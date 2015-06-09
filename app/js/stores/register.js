"use strict";

import Dispatcher     from "../dispatcher";
import Constants      from "../constants";
import StoreCommon    from "./store_common";
import assign         from "object-assign";

let _registerStoreState = {
	error: "",
};

const RegisterStore = assign({}, StoreCommon, {
  current(){
    return _registerStoreState;
  },
});

// Register callback with Dispatcher
Dispatcher.register((payload) => {

  switch(payload.action){
    case Constants.REGISTER_PENDING:
      _registerStoreState.error = "";
  	  RegisterStore.emitChange();
      break;
    case Constants.REGISTER_FAILED:
      _registerStoreState.error = payload.error;
      RegisterStore.emitChange();
      break;
    case Constants.REGISTER_SUCCEEDED:
      _registerStoreState.error = "";
      RegisterStore.emitChange();
      break;
    default:
      //No op
  }

  return true;

});

export default RegisterStore;
