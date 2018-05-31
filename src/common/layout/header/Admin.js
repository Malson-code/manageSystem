/**
 *   Create by Malson on 2018/5/29
 */
/**
 *  个人信息
 */
import React from 'react';
import { Menu, Dropdown, Icon,Modal} from 'antd';
import Ellipsis from 'ant-design-pro/lib/Ellipsis';
import {withRouter} from 'react-router-dom';
import common from '../../common';

@withRouter
class Admin extends React.Component{
  constructor(props){
    super(props);
    this.state={
    
    }
  }
  componentDidMount(){
  }
  handleMenu = (params)=>{
    switch (params.key){
      //个人信息
      case '1':
        Modal.error({
          title: '我是个人信息',
          content: '我是个人信息',
        });
        break;
      case '2':
        Modal.error({
          title: '我是个人信息',
          content: '我是个人信息',
        });
        break;
      case "3":
        window.sessionStorage.clear();
        common.clearAllCookies();
        console.log('清除缓存数据');
        this.props.history.push(
            {
              pathname:'/login'
            }
        )
        break;
    }
  }
  render(){
    const menu = (
        <Menu onClick={this.handleMenu}>
          <Menu.Item key='1'>
            <span className='admin-drop'>个人信息</span>
          </Menu.Item>
          <Menu.Item key='2'>
            <span className='admin-drop'>哈哈哈</span>
          </Menu.Item>
          <Menu.Item key='3'>
            <span className='admin-drop'>退出登录</span>
          </Menu.Item>
        </Menu>
    );
    return(
        <div className='header-setting-col cp'>
          <Dropdown overlay={menu} placement="bottomCenter">
            <span style={{display:'block',height:55}}>
              <Icon type="user"  style={{marginRight:2,fontSize:18,verticalAlign:'middle'}}/>
              <Ellipsis length={80} style={{display:'inline',verticalAlign:'middle'}}>张三丰</Ellipsis>
            </span>
          </Dropdown>
        </div>
    )
  }
}
export default Admin;