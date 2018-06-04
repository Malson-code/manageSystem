/**
 *   Create by Malson on 2018/5/29
 */
import React from 'react';
import classNames from 'classnames';
import {Button,Modal} from 'antd';
import FilterPage from './component/FilterPage';
import TablePage from './component/TablePage';
import Animate from '../components/Animate';
let data = [];
function setData() {
  for(let i=0;i<30;i++){
    let obj = {
      key:'key'+i,
      name:'我是名称'+i,
      age:Math.ceil(Math.random()*30),
      address:'无锡市锡山区东港红豆集团',
    };
    data.push(obj);
  }
}
class MainPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      tableLoading:false
    }
  }
  
  componentDidMount(){
    this.refresh()
  }
  search = (filter)=>{
    console.log(filter);
  };
  resetFilter = ()=>{
  
  };
  add = ()=>{
    Modal.info({
      title:'信息',
      content:'还在开发中....'
    })
  };
  refresh = ()=>{
    this.setState({tableLoading:true});
    setTimeout(()=>{
      setData();
      this.setState({tableLoading:false});
    },1000)
  }
  render(){
    let filterProps = {
      search:this.search,
      resetFilter:this.resetFilter
    }
    return(
        <Animate type='right'>
          <div key='1'>
            <FilterPage {...filterProps}/>
            <div className='table-btns'>
              <Button type='primary' icon='plus' onClick={this.add} className='btn-margin'>新增</Button>
              <Button icon='sync' onClick={this.refresh} className='btn-margin'>刷新</Button>
            </div>
            <TablePage dataSource={data}  loading={this.state.tableLoading} />
          </div>
        </Animate>
    )
  }
}
export default MainPage;