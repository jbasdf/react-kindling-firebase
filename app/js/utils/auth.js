'use strict';

import Settings              from '../../../config/settings';
import Firebase              from 'firebase';
import LoginActions          from '../actions/login';

const dataRef = new Firebase(Settings.firebaseBaseUrl);

const Auth = {
  
  init(){
    dataRef.onAuth(authData => {
      if(authData) {
        LoginActions.loginUser(authData); 
      } 
    });
  },

  _authHandler(error, authData){
    if(error) {
      LoginActions.loginFailure(error); //Tell login page the error so it can render.
      console.log("Login Failed!", error);
    } else {
      //The firebase onAuth handler above will send the loginUser action
      console.log("Authenticated successfully with payload:", authData);
    }
  },

  login(email, password, callback){
    dataRef.authWithPassword({email: email, password: password},
      this._authHandler);
    callback();
  },

  oAuthLogin(provider, callback){
    dataRef.authWithOAuthRedirect(provider, this._authHandler);
    callback();
  },

  logout(){
    dataRef.unauth();
    LoginActions.logoutUser();
  }

};

export default Auth;