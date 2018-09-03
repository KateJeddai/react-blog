import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Dashboard } from '../components/Dashboard';
import  AddPost  from '../components/AddPost';
import { Header } from '../components//Header';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
      <div>
        <Header />            
        <Switch>
            <Route 
              path="/"
              component={Dashboard}
              exact={true}
              />
            <Route 
              path="/add"
              component={AddPost}
            />
        </Switch>
      </div>  
    </Router>
);

export default AppRouter;