"use strict";

import React         from 'react';
import { Link }      from 'react-router';
import assign        from "object-assign";
import BaseComponent from "../base_component";
import UserActions   from "../../actions/users";
import LoginStore    from "../../stores/login";
import AuthenticatedComponent from "../base_authenticated";
import { FloatingActionButton, Styles, Paper, TextField, FlatButton, RaisedButton, FontIcon } from "material-ui";

const Colors = Styles.Colors; 
const Spacing = Styles.Spacing; 
const Typography = Styles.Typography; 
const ThemeManager = new Styles.ThemeManager().getCurrentTheme();

export default AuthenticatedComponent(class Profile extends BaseComponent {
	constructor(props) {
		super(props);
	}

	render(){
	  	let divStyle = {
	  		root: {
	  			paddingTop: Spacing.desktopKeylineIncrement,
	  		},
	  		text: {
	  			backgroundColor: Colors.yellow500,
	  		}
	  	};
		return <div style={divStyle.root}>
		  <h1>Profile Page</h1>
		</div>;
	}

});

