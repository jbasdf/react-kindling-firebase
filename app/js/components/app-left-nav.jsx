import React from 'react';
import Router from 'react-router';
import mui, {Styles, MenuItem, LeftNav} from 'material-ui'; 
import assign           from 'object-assign';
import LoginStore   from '../stores/login';
import BaseComponent from './base_component';

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

class AppLeftNav extends BaseComponent {

  constructor() {
    super();
    this.state = LoginStore.current();
    this.stores = [LoginStore];
    this._bind('toggle', '_getSelectedIndex', '_onLeftNavChange', '_onHeaderClick');
  }

  getState() {
    let initialState = this.state;
    let loginState = LoginStore.current();
    this.setState(assign(initialState, loginState));
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
    return this.state.loggedIn ? loggedInMenuItems : loggedOutMenuItems;
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

export default AppLeftNav;