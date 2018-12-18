import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './pages/App';
import IndexPage from './pages/IndexPage';
import IdolPage from './pages/IdolPage';
import ShareIdol from './pages/ShareIdol';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage}/>
    <Route path="/shareidol" component={ShareIdol}/>
    <Route path="/idols/:id" component={IdolPage}/>
    <Route path="/signin" component={SignIn}/>
    <Route path="/signup" component={SignUp}/>
  </Route>
);

export default routes;