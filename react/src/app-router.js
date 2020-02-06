import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { MainLayout, EmptyLayout } from 'layouts';
import { Login, Dashboard, SensorDetail, Page404 } from 'pages';

const RoutePaths = {
  MainLayoutPaths: ['/', '/dashboard', '/about'],
  EmptyLayoutPaths: ['/sign-in']
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={RoutePaths.MainLayoutPaths} component={MainLayout}>
        <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/about" component={SensorDetail} />
      </Route>

      <Route exact path={RoutePaths.EmptyLayoutPaths} component={EmptyLayout}>
        <Route path="/sign-in" component={Login} />
      </Route>

      <Route exact path="*" component={Page404} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
