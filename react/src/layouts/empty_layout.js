import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from 'pages';

export default class EmptyLayout extends Component {
  render() {
    return (
      <>
        <h1>Empty Layout</h1>
        <Switch>
          <Route exact path="/sign-in" component={Login} />
        </Switch>
      </>
    );
  }
}
