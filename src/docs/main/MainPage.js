/**
 *   Create by Malson on 2018/5/29
 */
import React from 'react';
import classNames from 'classnames';
import {Button,Modal} from 'antd';
import FilterPage from './component/FilterPage';
import TablePage from './component/TablePage';
import Animate from '../components/Animate';
import FormPage from './component/FormPage';
import common from "../../common/common";
import history from '../../history';

let allData = [];
function setData() {
  for(let i=0;i<30;i++){
    let obj = {
      key:'key'+i,
      a:'我是名称'+i,
      b:Math.ceil(Math.random()*30),
      c:'无锡市锡山区东港红豆集团',
      d:'大声道',
      e:'达大厦'
    };
    allData.push(obj);
  }
}
class MainPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      tableLoading:false,
      modalVisible:false,
      modalType:'',
    }
  }
  
  componentDidMount(){
    this.refresh()
  }
  search = (filter)=>{
    this.setState({tableLoading:true});
    console.log(filter);
  };
  resetFilter = ()=>{
  
  };
  add = ()=>{
    this.setState({modalType:'add',modalVisible:true});
  };
  edit = (data)=>{
    this.setState({modalType:'edit',modalVisible:true});
    this.createFormPage.getChildRef().initUpdateData(data);
  };
  check = (data)=>{
    history.push({
      pathname:'/home/'+data.key
    });
  };
  handleOk = ()=>{
    let type = this.state.modalType;
    let data = common.deepCopyValue(this.createFormPage.state.inputVal);
    //点击确定  判断是新增还是编辑  调用不同的方法
    if(type==='add'){
      data.key = Math.random();
      allData.unshift(data);
    }else if(type==='edit'){
      allData = allData.map(item=>{
        if(item.key===data.key){
          item = data;
        }
        return item;
      });
    }
    this.setState({modalVisible:false});
  };
  handleCancel = ()=>{
    this.setState({modalVisible:false});
  };
  refresh = ()=>{
    this.setState({tableLoading:true});
    setTimeout(()=>{
      setData();
      this.setState({tableLoading:false});
    },1000)
  };
  render(){
    let filterProps = {
      search:this.search,
      resetFilter:this.resetFilter
    },
    tableProps = {
      edit:this.edit,
      check:this.check
    },
    formProps = {
      modalVisible:this.state.modalVisible,
      modalType:this.state.modalType,
      handleOk:this.handleOk,
      handleCancel:this.handleCancel
    };
    return(
        <Animate type='right'>
          <div key='1'>
            <FilterPage {...filterProps}/>
            <div className='table-btns'>
              <Button type='primary' icon='plus' onClick={this.add} className='btn-margin'>新增</Button>
              <Button icon='sync' onClick={this.refresh} className='btn-margin'>刷新</Button>
            </div>
            <TablePage dataSource={allData}  loading={this.state.tableLoading} {...tableProps} />
            <FormPage ref={ref=>this.createFormPage = ref} {...formProps}/>
          </div>
        </Animate>
    )
  }
}
export default MainPage;