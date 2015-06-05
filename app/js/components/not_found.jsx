"use strict";

import React       from 'react';
import {Styles}    from 'material-ui';

const Spacing = Styles.Spacing; 

export default React.createClass({
  render(){
		let styles = {
			root: {
				width: 345,
				margin: 'auto',
				paddingTop: Spacing.desktopKeylineIncrement,
			}
		};
    return <div style={styles.root}>
      <h2>Page Not Found</h2>
    </div>;
  }
});

