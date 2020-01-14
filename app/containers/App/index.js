/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import User from 'containers/User/Loadable';
import BackStage from 'containers/BackStage/Loadable';
import Screen from 'containers/Screen/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={User} />
        <Route exact path="/screen" component={Screen} />
        <Route exact path="/back" component={BackStage} />
        {/*<Route component={NotFoundPage} />*/}
      </Switch>
      <GlobalStyle />
    </div>
  );
}
