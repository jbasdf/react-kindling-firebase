'use strict';

import Settings              from '../../../config/settings';
import Firebase              from 'firebase';

const dataRef = new Firebase(Settings.firebaseBaseUrl);

export default class User{
  
  static create(user){
    dataRef.createUser({
      email    : user.email,
      password : user.password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });

  }

}