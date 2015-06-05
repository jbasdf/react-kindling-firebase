'use strict';

import assign                from 'object-assign';
import Settings              from '../../../config/settings';
import Firebase              from 'firebase';
import LoginActions          from '../actions/login';

let dataRef = new Firebase(Settings.firebaseBaseUrl);
// dataRef.onAuth(authData => {
// 	if(authData) {//&& isNewUser){
// 		// dataRef.child('users').child(authData.uid).set({
// 		// 	provider: authData.provider,
// 		// 	name: getName(AuthData)
// 		// });
// 		LoginActions.loginUser(authData);
// 	} 
// 	//Login Action: LOGIN_SUCCESS
// });

function getName(authData){
	switch(authData.provider){
		case 'password':
			return authData.password.email.replace(/@.*/, '');
		case 'twitter':
			return authData.twitter.displayName;
		case 'facebook':
			return authData.facebook.displayName;
		case 'google':
			return authData.google.displayName;
	}
}

const Auth2 = {
	getAuth(){
		var authData = dataRef.getAuth();
		if(authData){
 			LoginActions.loginUser(authData);
		}
	},

	_authHandler(error, authData){
		if(error) {
			LoginActions.loginFailure(error); //Tell login page the error so it can render.
			console.log("Login Failed!", error);
		} else {
 			LoginActions.loginUser(authData);
			console.log("Authenticated successfully with payiload:", authData);
		}
	},

	login(email, password, callback){
		dataRef.authWithPassword({email: email, password: password},
			this._authHandler);
		callback();
	},

	logout(){
		dataRef.unauth();
		LoginActions.logoutUser();
	}


};

export default Auth2;
