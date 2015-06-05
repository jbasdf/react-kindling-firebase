import React             from 'react';
import Router            from 'react-router';
import Routes            from './routes';
import css               from '../styles/styles';
import RouterContainer   from './utils/router-container';
import LoginActions      from './actions/login';
import FontIcons         from '../styles/font-icons/style.css';
import Auth              from './utils/auth2.js';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

let router = Router.create(Routes);
console.log('got router');
RouterContainer.set(router);

Auth.getAuth();

router.run((Handler, state) => {
  let params = state.params;
  return React.render(
  	<Handler params={state} />, document.getElementById('app-container'));
});

// Use the HTML5 history API for cleaner URLs:
// Router.run(routes, Router.HistoryLocation, (Handler) => {
//   return React.render(<Handler/>, document.body);
// });