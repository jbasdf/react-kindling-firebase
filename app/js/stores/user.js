"use strict";

import Dispatcher     from "../dispatcher";
import Constants      from "../constants";
import StoreCommon    from "./store_common";
import assign         from "object-assign";

/*
{
  authData: {
    uid: "",
  },
  profileData: {
    givenName: "",
    familyName: "",
    DoB: "",
    email: "",
  }
}

*/
let _authData = {};
let _profileData = {};

const UserStore = assign({}, StoreCommon, {
  current(){
    return _authData;
  },
  uid(){
    return _authData.uid;
  },
  profile(){
    return _profileData;
  }
});

// Register callback with Dispatcher
Dispatcher.register((payload) => {

  switch(payload.action){

    case Constants.LOGIN_SUCCESS:
      _authData = payload.data.authData;
      _profileData = payload.data.profileData;
      UserStore.emitChange();
      break;
    case Constants.LOGOUT:
      _authData = {};
      _profileData = {};
      UserStore.emitChange();
      break;
    default:
      //No op
  }

  return true;

});

export default UserStore;
