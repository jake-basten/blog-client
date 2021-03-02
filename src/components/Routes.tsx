import React, {FC} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Blog from './Blog';
import NotFound from './NotFound';

const Routes: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={'/blog/:blogId'} component={Blog}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default Routes;