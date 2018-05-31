/**
 *   Create by Malson on 2018/5/29
 */
/**
 *  个人信息
 */
import React from 'react';
import { Menu, Dropdown, Icon} from 'antd';
import Ellipsis from 'ant-design-pro/lib/Ellipsis';

const menu = (
    <Menu>
      <Menu.Item>
        <span className='admin-drop'>个人信息</span>
      </Menu.Item>
      <Menu.Item>
        <span className='admin-drop'>哈哈哈</span>
      </Menu.Item>
      <Menu.Item>
        <span className='admin-drop'>退出登录</span>
      </Menu.Item>
    </Menu>
);

class Admin extends React.Component{
  constructor(props){
    super(props);
    this.state={
    
    }
  }
  componentDidMount(){
  }
  render(){
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