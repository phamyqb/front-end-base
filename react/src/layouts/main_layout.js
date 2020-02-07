import React, { PureComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Dashboard, SensorDetail } from 'pages';

export default class MainLayout extends PureComponent {
  render() {
    return (
      <>
        <h1>Main Layout</h1>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/about" component={SensorDetail} />
        </Switch>
      </>
    );
  }
}
