import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import AboutHandler from './About.js';
import Button from '../components/Button/Button';

let App = React.createClass({
  render() {
    return (
      <ul>
        <li><Link to="app">Home</Link></li>
        <li><Link to="about">About the UI Library</Link></li>
        <li><Button label="Hello" icon="bell" /></li>

        {/* this is the importTant part */}
        <RouteHandler/>
      </ul>
    );
  }
});

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="about" path="/about" handler={AboutHandler}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});
