/**
 *   Create by Malson on 2018/6/4
 */

import React from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend, Guide } from "bizcharts";
import { View } from '@antv/data-set';

class Chart1 extends React.Component{
  constructor(props){
    super(props);
    this.state={
    
    }
  }
  componentDidMount(){
  }
  render(){
    const dv = new View();
    const data = [
      { item: '事例一', count: 40 },
      { item: '事例二', count: 21 },
      { item: '事例三', count: 17 },
      { item: '事例四', count: 13 },
      { item: '事例五', count: 9 }
    ];
    dv.source(data).transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent'
    });
    const cols = {
      percent: {
        formatter: val => {
          val = (val * 100) + '%';
          return val;
        }
      }
    }
    return(
        <Chart height={300} data={dv} scale={cols} padding={[80,80,20,80]} forceFit>
          <Coord type='theta' radius={0.75} />
          <Axis name="percent" />
          <Legend position='top' offsetY={-50} offsetX={0} />
          <Tooltip
              showTitle={false}
              itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
          />
          <Geom
              type="intervalStack"
              position="percent"
              color='item'
              tooltip={['item*percent',(item, percent) => {
                percent = percent * 100 + '%';
                return {
                  name: item,
                  value: percent
                };
              }]}
              style={{lineWidth: 1,stroke: '#fff'}}
          >
            <Label content='percent' formatter={(val, item) => {
              return item.point.item + ': ' + val;}} />
          </Geom>
        </Chart>
    )
  }
}
export default Chart1;