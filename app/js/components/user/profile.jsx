"use strict";

import React         from 'react';
import { Link }      from 'react-router';
import assign        from "object-assign";
import BaseComponent from "../base_component";
import UserActions   from "../../actions/user";
import UserStore    from "../../stores/user";
import AuthenticatedComponent from "../base_authenticated";
import { FloatingActionButton, Styles, Paper, TextField, FlatButton, RaisedButton, FontIcon } from "material-ui";

const Colors = Styles.Colors; 
const Spacing = Styles.Spacing; 
const Typography = Styles.Typography; 
const ThemeManager = new Styles.ThemeManager().getCurrentTheme();

export default AuthenticatedComponent(class Profile extends BaseComponent {
	constructor(props) {
		super(props);
		this._bind('getState');
		this.stores = [UserStore];
		this.state = this.getState();	
	}

	getState(){
          let profile = UserStore.profile();
          if(!profile)
            profile = {givenName: "", familyName: ""};
	  return profile;
	}

	getStyles(){
		return {
	  		root: {
	  			paddingTop: Spacing.desktopKeylineIncrement,
	  		},
	  		container: {
	  			margin: 8,
	  		},
	  		button: {
	  			margin: 8,
	  		}
		};
	}

	render(){
	  	let styles = this.getStyles();
		return <div style={styles.root}>
		  <form style={styles.container} onSubmit={(e) => this.handleSubmit(e)} >
			  <TextField value={this.state.givenName} onChange={(e) => this.handleValueChange(e, "givenName")} hintText="Given Name" />
			  <TextField value={this.state.familyName} onChange={(e) => this.handleValueChange(e, "familyName")} hintText="Family Name" />
			  <RaisedButton style={styles.button} label="Save" primary={true} />
		  </form>
		</div>;
	}

	handleValueChange(e, key){
		let newState = {};
		newState[key] = e.target.value;

		this.setState(newState);
	}

  handleSubmit(e){
    e.preventDefault();
    UserActions.saveProfile({
      uid: UserStore.uid(),
      profileData: {
        givenName: this.state.givenName, 
        familyName: this.state.familyName, 
      }
    });
  }

}
);

