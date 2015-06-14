import React        from 'react';
import Router       from 'react-router';

import Index        from './components/index';
import Home         from './components/main/home';
import Register     from './components/users/register';
import Login        from './components/sessions/login';
import Logout       from './components/sessions/logout';
import Profile      from './components/users/profile';
import NotFound     from './components/not_found';

const Route         = Router.Route;
const NotFoundRoute = Router.NotFoundRoute;
const DefaultRoute  = Router.DefaultRoute;
const Redirect      = Router.Redirect;

export default (
  <Route name='root' path='/' handler={Index}>
    <Route name='login' handler={Login} />
    <Route name='logout' handler={Logout} />
    <Route name='register' handler={Register} />
    <Route name='profile' handler={Profile} />
    <DefaultRoute name='home' handler={Home}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

