/**
 *   Create by Malson on 2018/6/4
 */

import React from 'react';
import {Chart, Axis, Tooltip, Geom} from "bizcharts";

class Chart1 extends React.Component{
  constructor(props){
    super(props);
    this.state={
    
    }
  }
  componentDidMount(){
  }
  render(){
    const data = [
      { year: '1951 年', sales: 38 },
      { year: '1952 年', sales: 52 },
      { year: '1956 年', sales: 61 },
      { year: '1957 年', sales: 145 },
      { year: '1958 年', sales: 48 },
      { year: '1959 年', sales: 38 },
      { year: '1960 年', sales: 38 },
      { year: '1962 年', sales: 38 },
    ];
    const cols = {
      'sales': {tickInterval: 12},
    };
    return(
        <Chart height={300} data={data} scale={cols} forceFit padding={60}>
          <Axis name="year" />
          <Axis name="sales" />
          <Tooltip crosshairs={{type : "y"}}/>
          <Geom type="interval" position="year*sales" />
        </Chart>
    )
  }
}
export default Chart1;