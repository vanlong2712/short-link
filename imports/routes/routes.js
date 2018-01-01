import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route, Switch, withRouter } from 'react-router';

import SignUp from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

const history = createBrowserHistory();

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];
let isUnauthenticatedPage = true;
let isAuthenticatedPage = false;

const ChangeTracker = withRouter(({ match, location, history }) => {
  const pathName = location.pathname;
  isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
  isAuthenticatedPage = authenticatedPages.includes(pathName);

  return false;
});

const onEnterPublicPage = component => {
  if (Meteor.userId()) {
    return history.replace('/links');
  }
  return component;
};

const onEnterPrivatePage = component => {
  if (!Meteor.userId()) {
    return history.replace('/');
  }
  return component;
};

export const onAuthChange = isAuthenticated => {
  if (isAuthenticated) {
    if (isUnauthenticatedPage) {
      history.replace('/links');
    }
  } else {
    if (isAuthenticatedPage) {
      history.replace('/');
    }
  }
};
export const routes = (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" render={() => onEnterPublicPage(<Login />)} />
        <Route path="/signup" render={() => onEnterPublicPage(<SignUp />)} />
        <Route path="/links" render={() => onEnterPrivatePage(<Link />)} />
        <Route path="*" component={NotFound} />
      </Switch>
      <ChangeTracker />
    </div>
  </Router>
);
