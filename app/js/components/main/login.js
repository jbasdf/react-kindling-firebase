"use strict";

import React            from 'react';
import BaseComponent    from "../base_component";
import 
	{
		Styles, 
		Paper, 
		TextField,
		FlatButton,
		FloatingActionButton
	}                   from "material-ui";

const Colors = Styles.Colors; 
const Spacing = Styles.Spacing; 
const Typography = Styles.Typography; 
const ThemeManager = new Styles.ThemeManager().getCurrentTheme();

class Login extends BaseComponent{
	constructor() {
		super();
		this.state = {
			passwordValidationText: "",
			usernameValidationText: "",
			error: false
		};
	}	

	render(){
		let divStyle = {
			root: {
				width: 345,
				margin: 'auto',
				paddingTop: Spacing.desktopKeylineIncrement,
			},
			container: {
				textAlign: 'center',
				padding: 23
			},
			loginText: {
				fontFamily: 'Roboto',
				textAlign: 'left',
				fontWeight: 400,
			},
			oauthButton: {
				margin: 10
			},
		};

		return <div style={divStyle.root}> 
			<Paper>
			<form onSubmit={this.handleSubmit}>
				<div style={divStyle.container}>
					<h2 style={divStyle.loginText}>Login</h2>
					<TextField 
						ref="email"
						hintText='joe@example.com'
						errorText={this.state.usernameValidationText}
						floatingLabelText='username'
						onBlur={this.validateUsernameInput} />
					<TextField 
						ref="pass"
						type='password'
						hintText='password1'
						errorText={this.state.passwordValidationText}
						floatingLabelText='password'
						onBlur={this.validatePasswordInput} />
					<FlatButton style={divStyle.submitButton} className='sign-in-button'
						primary={true} type="submit" label="Login" />	
				</div>
			</form>
	            <div style={divStyle.container} >
					<FloatingActionButton style={divStyle.oauthButton} iconClassName='icon-google' mini={true} secondary={true} onClick={()=> this._oAuthLogin('google')} />
					<FloatingActionButton style={divStyle.oauthButton} iconClassName='icon-facebook' mini={true} secondary={true} onClick={()=> this._oAuthLogin('facebook')} />
					<FloatingActionButton style={divStyle.oauthButton} iconClassName='icon-twitter' mini={true} secondary={true} onClick={()=> this._oAuthLogin('twitter')} />
	            </div>
			</Paper>
		</div>;
	}

	handleSubmit(e){
		e.preventDefault();
		console.log("submitting!");
	}
}

module.exports = Login;
