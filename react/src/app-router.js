import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainLayout, EmptyLayout } from 'layouts';
import { Page404 } from 'pages';

const RoutePaths = {
  MainLayoutPaths: ['/', '/dashboard', '/about'],
  EmptyLayoutPaths: ['/sign-in']
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path={RoutePaths.MainLayoutPaths}
        component={MainLayout}
      ></Route>

      <Route
        exact
        path={RoutePaths.EmptyLayoutPaths}
        component={EmptyLayout}
      ></Route>

      <Route exact path="*" component={Page404} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
