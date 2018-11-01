/**
 *   Create by Malson on 2018/10/23
 */
import React from 'react';
import {Icon } from 'antd';

class ChartLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type:''
    }
  }
  leftHtmlModal = (param={})=>{
    if(!param.extra)param.extra='';
    let {firstLine,secondLine,unit} = this.props;
    return (<div>
      <div>{param.extra + firstLine}</div>
      <span className='left-num'>{param.num1}</span>{unit}
      <br style={{marginTop:4}}/>
      <div>{param.extra + secondLine}</div>
      <span className='left-num'>{param.num2}</span>{unit}
    </div>)
  };
  leftMoreModal = (type,param)=>{
    const IncreaseIcon = <Icon type="caret-up" theme="filled" className='chart-icon'/>,
          DecreaseIcon = <Icon type="caret-down" theme="filled" className='chart-icon'/>;
    let {firstLine,secondLine,unit} = this.props;
    if(type==='fullWeek'){
      return (<div>
        <div>本周{firstLine}：</div>
        <span className='left-num'>1536</span>{unit}
        <div>比上周同期增长</div>
        <span className='chart-increase'>{IncreaseIcon}35</span>%
        <br style={{marginTop:4}}/>
        <div>本周{secondLine}：</div>
        <span className='left-num'>1536</span>{unit}
        <div>比上周同期减少</div>
        <span className='chart-decrease'>{DecreaseIcon}56</span>%
      </div>)
    }
    if(type==='fullMonth'){
      return (<div>
        <div>本月{firstLine}：</div>
        <span className='left-num'>1536</span>{unit}
        <div>比上月同期增长</div>
        <span className='chart-increase'>{IncreaseIcon}35</span>%
        <div>比去年同期增长</div>
        <span className='chart-increase'>{IncreaseIcon}86</span>%
        <br style={{marginTop:4}}/>
        <div>本月{secondLine}：</div>
        <span className='left-num'>1536</span>{unit}
        <div>比上月同期减少</div>
        <span className='chart-decrease'>{DecreaseIcon}12</span>%
        <div>比去年同期减少</div>
        <span className='chart-decrease'>{DecreaseIcon}8</ span>%
      </div>)
    }
  };
  getLeftHtml = (type) => {
    let content='',
        title = '';
    switch (type) {
      case 'thisWeek':
        title = '截止到昨天为止:';
        content = this.leftHtmlModal({extra:'本周', num1:'1536', num2:'132'});
        break;
      case 'thisMonth':
        title = '截止到上周为止:';
        content = this.leftHtmlModal({extra:'本月', num1:'666', num2:'6666'});
        break;
      case 'fullWeek':
        title = '2018年7月2日至2018年7月8日';
        content = this.leftMoreModal('fullWeek');
        break;
      case 'fullMonth':
        title = '2018年7月1日至2018年7月31日';
        content = this.leftMoreModal('fullMonth');
        break;
      default :
        title = '2018年7月1日至2018年7月31日';
        content = this.leftHtmlModal({ num1:'888', num2:'8888'});
        break;
    }
    let html = <div>
                  <div style={{fontWeight: 'bold', fontSize: 16, marginBottom: 10,textAlign:'center'}}>{title}</div>
                  <div style={{textAlign: 'center'}}>
                    {content}
                  </div>
                </div>;
    return html;
  };
  
  componentDidMount() {
  }
  render() {
    let LeftHtml = this.getLeftHtml('fullMonth');
    return (
        <div className='chart-wrap-left'>
          {LeftHtml}
        </div>
    )
  }
}

export default ChartLeft;