/**
 *   Create by Malson on 2018/10/23
 */
import React from 'react';
import { AutoComplete,Radio,Button,DatePicker,message  } from 'antd';
import moment from 'moment';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const {RangePicker} = DatePicker;
function GetRange(type){
  let range = [];
  if(type==='week'){
    let week = (new Date()).getDay();
    let startData = new Date();
    startData.setDate(startData.getDate()-(week-1));
    let endData = new Date();
    endData.setDate(endData.getDate()-1);
    range[0] = startData.getFullYear() + '-' + (startData.getMonth()+1) + '-' + startData.getDate();
    range[1] = endData.getFullYear() + '-' + (endData.getMonth()+1) + '-' + endData.getDate();
  }else if(type==='month'){
    let startData = new Date();
    let endData = new Date();
    endData.setDate(endData.getDate()-1);
    range[0] = startData.getFullYear() + '-' + (startData.getMonth()+1) + '-' + '1';
    range[1] = endData.getFullYear() + '-' + (endData.getMonth()+1) + '-' + endData.getDate();
  }
  return range;
}
class ChartFilter extends React.Component{
  constructor(props){
    super(props);
    this.state={
      filterType: 'week',
      manageArr:[],
      manageSelected:'',
      stationArr:[],
      stationSelected:'',
      rangeDate:[]
    }
  }
  filterChange = (e) => {
    let filterType = e.target.value;
    let rangeDate = [];
    if(filterType==='week'){
      let week = (new Date()).getDay();
      if(week===1){
        message.error('本周暂无数据！');
        return;
      }
      rangeDate = GetRange('week');
    }
    if(filterType==='month'){
      let date = (new Date()).getDate();
      if(date===1){
        message.error('本月暂无数据！');
        return;
      }
      rangeDate = GetRange('month');
    }
    this.setState({filterType,rangeDate});
  };
  
  rangeChange = (value, dateString)=>{
    let rangeDate = dateString[0]?dateString:GetRange('week');
    this.setState({filterType:'',rangeDate});
  };
  componentDidMount(){
    let rangeDate = GetRange('week') || [];
    this.setState({rangeDate});
  }
  manageChange = (manageSelected)=>{
    this.setState({manageSelected});
    setTimeout(()=>{
      let data = this.state.manageArr.slice(0);
      data.push(manageSelected+'安徽');
      this.setState({manageArr:data});
    },300)
  };
  stationChange = (stationSelected)=>{
    this.setState({stationSelected});
    setTimeout(()=>{
      let data = this.state.stationArr.slice(0);
      data.push(stationSelected+'安徽');
      this.setState({stationArr:data});
    },300)
  };
  reset = ()=>{
    this.setState({
      filterType: 'week',
      manageArr:[],
      manageSelected:'',
      stationArr:[],
      stationSelected:'',
      rangeDate:GetRange('week')
    });
  };
  search = ()=>{
    let filterData = Object.assign({},this.state);
    console.log(filterData);
  };
  render(){
    const {filterType,manageArr,stationArr,rangeDate,stationSelected,manageSelected} = this.state;
    let rangeDateMoment = rangeDate[0]?[moment(rangeDate[0]),moment(rangeDate[1])]:null;
    return(
        <div className='chart-filter'>
          <span>经营中心：</span>
          <AutoComplete
              dataSource={manageArr}
              style={{ width: 120 }}
              placeholder="经营中心"
              onChange={this.manageChange}
              value={manageSelected}
          />
          <span className='btn-margin'>服务站：</span>
          <AutoComplete
              dataSource={stationArr}
              style={{ width: 120 }}
              placeholder="服务站"
              className='btn-margin'
              onChange={this.stationChange}
              value={stationSelected}
          />
          <RadioGroup value={ filterType } onChange={this.filterChange}>
            <RadioButton value="week" className='btn-margin'>本周</RadioButton>
            <RadioButton value="month" className='btn-margin'>本月</RadioButton>
          </RadioGroup>
          <RangePicker
              className='btn-margin'
              format="YYYY-MM-DD"
              placeholder={['开始日期', '结束日期']}
              onChange={this.rangeChange}
              style={{width:220,marginRight:14}}
              value={rangeDateMoment}
              allowClear={false}
          />
          <Button type='primary' style={{marginTop:4}} onClick={this.search}>查询</Button>
          <Button className='btn-margin' onClick={this.reset}>重置</Button>
        </div>
    )
  }
}
export default ChartFilter;