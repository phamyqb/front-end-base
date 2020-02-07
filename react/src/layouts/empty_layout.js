import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from 'pages';

export default class EmptyLayout extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/sign-in" component={Login} />
      </Switch>
    );
  }
}
