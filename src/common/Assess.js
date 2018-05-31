/**
 *   Create by Malson on 2018/5/29
 */
import React from 'react';
import {Redirect,withRouter} from 'react-router-dom';
import common from './common';
import $ from 'jquery';

@withRouter
class Assess extends React.Component{
  check = ()=>{
    // let SSOTOKEN,
    //     userId ,
    //     f,location;
    // let a = window.location.href.lastIndexOf('/'),
    //     b = window.location.href.substring(a);
    // location = b==='/login';
    // f = !SSOTOKEN && !location &&!userId;
    // if(f){
    //   this.props.history.push('/login');
    // }
  }
  componentWillMount(){
    //获取全局配置文件
    $.ajax({
      type:'get',
      url:'config.json',
      async:false,
      success:function (result) {
        common.initConfig(result)
      },
      error:function () {
        alert('数据初始化失败，请刷新再试！')
      }
    });
    this.check()
  }
  componentWillReceiveProps(){
    this.check()
  }
  render(){
    return '';
  }
}
export default Assess;