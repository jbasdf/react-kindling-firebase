"use strict";

import React         from 'react';
import BaseComponent from "./base_component";
import LoginStore    from "../stores/login";

export default (ComposedComponent) => {

  return class AuthenticatedComponent extends BaseComponent {

  	static willTransitionTo(transition){
  	  if(!LoginStore.loggedIn()){
  	  		transition.redirect('/login');
  	  	}
  	}

    constructor() {
  	  super();
  	  this.stores = [LoginStore];
  	  this._bind('getState');
  	  this.state = { userLoggedIn: LoginStore.loggedIn() };
  	}

  	_getLoginState(){
      return {
    		userLoggedIn: LoginStore.loggedIn(),
      }
  	}

  	getState(){
  		this.setState(this._getLoginState());
  	}

  	render() {
  		return <ComposedComponent {...this.props} 
  		  userData={this.state.userData} 
  		  userLoggedIn={this.state.userLoggedIn} />;
  	}

  }

}

