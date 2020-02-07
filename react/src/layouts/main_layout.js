import React, { PureComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Dashboard, SensorDetail } from 'pages';

export default class MainLayout extends PureComponent {
  render() {
    return (
      <>
        {/* Including header if you want here */}
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/about" component={SensorDetail} />
        </Switch>
        {/* Including footer if you want here */}
      </>
    );
  }
}
