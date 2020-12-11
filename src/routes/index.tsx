import React from 'react';

import { Switch, Route } from 'react-router-dom';

// import Dashboard from '../pages/Dashboard';
// import Import from '../pages/Import';
import Admin from '../pages/Admin';
import CreateUser from '../pages/CreateUser';
import CreatePost from '../pages/CreatePost';
import Blog from '../pages/Blog';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Admin} />
    <Route path="/newUser" exact component={CreateUser} />
    <Route path="/newPost" exact component={CreatePost} />
    <Route path="/blog" exact component={Blog} />
    {/* <Route path="/" exact component={Dashboard} />
    <Route path="/import" component={Import} /> */}
  </Switch>
);

export default Routes;
