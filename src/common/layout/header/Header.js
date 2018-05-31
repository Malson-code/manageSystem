/**
 *   Create by Malson on 2018/5/29
 */

import React from 'react';
import { Layout } from 'antd';
import Setting from './Setting';
import Events from './Events';
import Admin from './Admin';
import TopMenus from './TopMenus';
import common from '../../common';
const { Header } = Layout;

class MalHeader extends React.Component{
  constructor(props){
    super(props);
    this.state={
    
    }
  }
  componentDidMount(){
  }
  render(){
    return(
        <Header className="mal-header">
          <div className="mal-logo">强哥开发云平台</div>
          <TopMenus />
          <div style={{float:'right'}}>
            <Setting />
            { common.topMessage ? <Events /> : ''}
            <Admin />
          </div>
        </Header>
    )
  }
}
export default MalHeader;