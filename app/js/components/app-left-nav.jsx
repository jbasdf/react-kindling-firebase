import React from 'react';
import Router from 'react-router';
import mui, {Styles, MenuItem, LeftNav} from 'material-ui'; 
import Auth         from './../utils/auth';
import LoginStore   from '../stores/login';

const Colors = Styles.Colors;
const Spacing = Styles.Spacing;
const Typography = Styles.Typography;

const loggedOutMenuItems = [
  { route: 'login', text: 'Login' },
  { route: 'register', text: 'Register' },
];

const loggedInMenuItems = [
  {route: 'logout', text: 'Logout'},
  {route: 'home', text:'Home'}
];

class AppLeftNav extends React.Component {

  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = { loggedIn: Auth.loggedIn()},
    this._getSelectedIndex = this._getSelectedIndex.bind(this);
    this._onLeftNavChange = this._onLeftNavChange.bind(this);
    this._onHeaderClick = this._onHeaderClick.bind(this);
    this.setStateOnAuth = this.setStateOnAuth.bind(this);
  }

  setStateOnAuth(loggedIn){
    this.setState({loggedIn: loggedIn});
  }

  componentWillMount(){
    Auth.onChange = this.setStateOnAuth;
  }

  getStyles() {
    return {
      cursor: 'pointer',
      //.mui-font-style-headline
      fontSize: '24px',
      color: Typography.textFullWhite,
      lineHeight: Spacing.desktopKeylineIncrement + 'px',
      fontWeight: Typography.fontWeightLight,
      backgroundColor: Colors.cyan500,
      paddingLeft: Spacing.desktopGutter,
      paddingTop: '0px',
      marginBottom: '8px'
    };
  }

  getMenuItems(){
    return Auth.loggedIn() ? loggedInMenuItems : loggedOutMenuItems;
  }

  render() {
    let header = (
      <div style={this.getStyles()} onClick={this._onHeaderClick}>
      Your App
      </div>
    );

    return (
      <LeftNav 
        ref="leftNav"
        docked={false}
        isInitiallyOpen={false}
        header={header}
        menuItems={this.getMenuItems()}
        selectedIndex={this._getSelectedIndex()}
        onChange={this._onLeftNavChange} />
    );
  }

  toggle() {
    this.refs.leftNav.toggle();
  }

  _getSelectedIndex() {
    let currentItem;
    let menuItems = this.getMenuItems();

    for (let i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.context.router.isActive(currentItem.route)) return i;
    }
  }

  _onLeftNavChange(e, key, payload) {
    this.context.router.transitionTo(payload.route);
  }

  _onHeaderClick() {
    this.context.router.transitionTo('root');
    this.refs.leftNav.close();
  }

}

AppLeftNav.contextTypes = {
  router: React.PropTypes.func
};

module.exports = AppLeftNav;