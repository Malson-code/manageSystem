/**
 *   Create by Malson on 2018/5/30
 */
import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {BrowserRouter, Route, Link, Switch,Redirect,Router,HashRouter,withRouter} from 'react-router-dom';
import common from '../../common';
import LeftMenuParams from '../LeftMenuParams';

@withRouter
class BreadcrumbCom extends React.Component{
  constructor(props){
    super(props);
    this.state={
    
    }
  }
  componentDidMount(){
    console.log(this.props);
  }
  getNameByPathname = ()=>{
    
  }
  handleClick = (path)=>{
    //相同已在主页不执行
    if(this.props.match.path===path) return;
    this.props.history.push({
      pathname:path
    })
  }
  render(){
    //根据配置文件觉得是否展示
    return common.breadcrumb
        ? <Breadcrumb className='mal-breadcrumb'>
            <Breadcrumb.Item onClick={()=>this.handleClick('/home')} key='home' className='bread-cp'><Icon type="home" /></Breadcrumb.Item>
            <Breadcrumb.Item>次级</Breadcrumb.Item>
            <Breadcrumb.Item>功能</Breadcrumb.Item>
          </Breadcrumb>
        :''
  }
}
export default BreadcrumbCom;