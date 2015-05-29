"use strict";

import Dispatcher     from "../dispatcher";
import Constants      from "../constants";
import StoreCommon    from "./store_common";
import assign         from "object-assign";
import _              from "lodash";

let _userData = {};

// Extend Message Store with EventEmitter to add eventing capabilities
const UserStore = assign({}, StoreCommon, {

  // Return current messages
  current(){
    return _userData;
  },

});

// Register callback with Dispatcher
Dispatcher.register((payload) => {

  switch(payload.action){

    case Constants.LOGIN_COMPLETE:
      _userData = payload.userData;
  	  UserStore.emitChange();
      break;
    case Constants.LOGIN_FAILURE:
      break;
    default:
      //No op
  }

  return true;

});
