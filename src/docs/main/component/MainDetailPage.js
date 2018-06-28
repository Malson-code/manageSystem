/**
 *   Create by Malson on 2018/6/27
 */

import React from 'react';
import { Button , Spin } from 'antd';
import {BrowserRouter, Route, Link, Switch,Redirect,Router,HashRouter,withRouter} from 'react-router-dom';
import Animate from '../../components/Animate';
import history from '../../../history';
let a;
class MainDetailPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      loading:true
    }
  }
  componentDidMount(){
    a = setInterval(()=>{
      this.setState({loading:false});
    },500)
  }
  componentWillUnmount(){
    clearInterval(a)
  }
  goBack = ()=>{
    history.push('/home');
  };
  render(){
    let state = this.state;
    let spinProps = {
      spinning:state.loading,
      tip:'加载中...',
    };
    return(
        <Animate type='right'>
            <Spin {...spinProps} key={1}  >
              <div>
                <Button icon='rollback' onClick={this.goBack} type='primary'>返回</Button>
                <div>哈哈哈哈哈，我是子页面</div>
              </div>
            </Spin>
        </Animate>
    )
  }
}
export default MainDetailPage;