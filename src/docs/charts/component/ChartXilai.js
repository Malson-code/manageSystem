/**
 *   Create by Malson on 2018/6/4
 */

import React from 'react';
import {Chart, Geom, Axis, Tooltip, Coord, Label, Legend} from "bizcharts";
import {View} from '@antv/data-set';
import {Button, DatePicker, Radio,Icon,AutoComplete,Spin} from 'antd';
import '../chartXilai.scss';
import ChartFilter from './ChartFilter';
import ChartLeft from './ChartLeft'


class ChartXilai extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false
    }
  }
  
  componentDidMount() {
  }
  
  search = ()=>{
    this.setState({loading:true});
  };
  render() {
    const dv = new View();
    const data = [
      {data: '10-22 周一', '下单量': 17.0, '成单量': 423.91},
      {data: '10-23 周二', '下单量': 26.9, '成单量': 123.21},
      {data: '10-24 周三', '下单量': 119.5, '成单量': 43.7},
      {data: '10-25 周四', '下单量': 33.5, '成单量': 65.5},
      {data: '10-26 周五', '下单量': 234.4, '成单量': 79.9},
      {data: '10-27 周六', '下单量': 33.5, '成单量': 34.2},
      {data: '10-28 周日', '下单量': 123.2, '成单量': 156.0},
    ];
    dv.source(data).transform({
      type: 'fold',
      fields: ['下单量', '成单量'], // 展开字段集
      key: 'city', // key字段
      value: 'temperature', // value字段
    });
    const cols = {
      data: {
        range: [0, 1]
      }
    };
    const filterProps = {
      filterType:this.state.filterType,
    };
    const chartLeft = {
    };
    const {firstLine,secondLine} = this.props;
    return (
        <div style={{width:'100%',margin:'10px 0'}}>
          <Spin spinning={this.state.loading}>
            <div className='chart-title'>
              {firstLine}统计<span className='place-order' />{secondLine}统计<span className='ok-order' />
            </div>
            <div className='chart-wrap'>
              <ChartLeft {...chartLeft} {...this.props}/>
              <div className='chart-wrap-right'>
                <ChartFilter {...filterProps} />
                <Chart height={480}
                       data={dv}
                       scale={cols}
                       forceFit
                       padding={[100, 60, 60, 60]}
                >
                  {/*<Legend position="left-top"/>*/}
                  <Axis name="data"/>
                  <Axis name="temperature"/>
                  <Tooltip crosshairs={{type: "y"}}/>
                  <Geom type="line" position="data*temperature" size={2} color={'city'} shape={'smooth'}/>
                  <Geom type='point' position="data*temperature" size={4} shape={'circle'} color={'city'}
                        style={{stroke: '#fff', lineWidth: 1}}/>
                </Chart>
              </div>
            </div>
          </Spin>
        </div>
    )
  }
}

export default ChartXilai;