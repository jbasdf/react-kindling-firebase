'use strict';

import Settings              from '../../../config/settings';
import Firebase              from 'firebase';
import UserActions           from '../actions/user';

const dataRef = new Firebase(Settings.firebaseBaseUrl);

const User = {

  create(user, callback){
    dataRef.createUser({
      email    : user.email,
      password : user.password
    }, (error, userData) => {
      if (error) {
        switch(error.code){
          case "EMAIL_TAKEN":
            UserActions.registerFailed("The new user account cannot be created because the email is already in use.");
            break;
          case "INVALID_EMAIL":
            UserActions.registerFailed("The specified email is not a valid email.");
            break;
          default:
            UserActions.registerFailed("Error createing user.");
        }
      } else {
        UserActions.registerSucceeded();
      }
    });
    if(callback) callback();

  },

  saveProfile(data, callback){
    dataRef.child('profiles').child(data.uid).set(data.profileData);
    if(callback) callback();
  }

}

export default User;