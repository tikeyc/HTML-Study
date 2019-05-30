import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './page/login/container';
import Register from './page/register/container';
import TabBarExample from './page/tabBar'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/Register" component={Register}></Route>
          <Route path="/Login" component={Login}></Route>
          <Route path="/TabBarExample" component={TabBarExample}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
