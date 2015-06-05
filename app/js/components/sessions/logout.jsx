import React            from 'react';
import BaseComponent    from "../base_component";
import Auth         from './../../utils/auth2';
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

class Logout extends BaseComponent{
	constructor() {
		super();
		this.state = {
			passwordValidationText: "",
			usernameValidationText: "",
			error: false
		};
	}	

	componentDidMount() {
		Auth.logout();
	}

	render(){
		let styles = {
			root: {
				width: 345,
				margin: 'auto',
				paddingTop: Spacing.desktopKeylineIncrement,
			}
		};

	    return <div style={styles.root}> 
	        <div >
	          <p >You have successfully logged out.</p>
	        </div>
	      </div>;
	}
}

module.exports = Logout;
