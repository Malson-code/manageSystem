import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import Assess from './common/Assess';
import {BrowserRouter, Route, Link, Switch,Redirect,Router,HashRouter,withRouter} from 'react-router-dom';


ReactDOM.render(
    <HashRouter>
      <div style={{height:'100%',width :'100%'}}>
        <Route component={Assess}/>
        <Switch>
          { Routes }
        </Switch>
      </div>
    </HashRouter>,
    document.getElementById('root')
);
