import React            from 'react';
import BaseComponent    from "../base_component";
import LoginActions     from '../../actions/login';
import { Styles }       from "material-ui";

const Spacing = Styles.Spacing; 

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
		LoginActions.logout();
	}

	render(){
		var styles = {
			root: {
				width: 345,
				margin: 'auto',
				paddingTop: Spacing.desktopKeylineIncrement,
			}
		};

    return <div style={styles.root}> 
        <div>
          <p>You have successfully logged out.</p>
        </div>
      </div>;
	}
}

export default Logout;
