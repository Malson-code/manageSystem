import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import Assess from './common/Assess';
import {BrowserRouter, Route, Link, Switch,Redirect,Router,HashRouter,withRouter} from 'react-router-dom';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
ReactDOM.render(
    <LocaleProvider locale={zh_CN}>
      <HashRouter>
        <div style={{height:'100%',width :'100%'}}>
          <Route component={Assess}/>
          <Switch>
            { Routes }
          </Switch>
        </div>
      </HashRouter>
    </LocaleProvider>,
    document.getElementById('root')
);
