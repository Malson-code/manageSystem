/**
 *   Create by Malson on 2018/5/29
 */
import React from 'react';
import './chart.scss';
import Animate from '../components/Animate';
import { Card, Button, Col, Row  } from 'antd';
import Chart1 from './component/Chart1';
import Chart2 from './component/Chart2';
import Chart3 from './component/Chart3';
import Chart4 from './component/Chart4';

class ChartsPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
    
    }
  }
  componentDidMount(){
  }
  render(){
    let colSpan = 12;
    return(
        <Animate type='right'>
          <div key='1'>
            <div className='modal-title' >图表展示</div>
            <div style={{marginTop:20}}>
              <Row>
                <Col span={colSpan} className='chart-card'>
                  <Card hoverable title='我是图表1'>
                    <Chart1 />
                  </Card>
                </Col>
                <Col span={colSpan} className='chart-card'>
                  <Card hoverable title='我是图表2'>
                    <Chart2 />
                  </Card>
                </Col>
                <Col span={colSpan} className='chart-card'>
                  <Card hoverable title='我是图表3'>
                    <Chart3 />
                  </Card>
                </Col>
                <Col span={colSpan} className='chart-card'>
                  <Card hoverable title='我是图表4'>
                    <Chart4 />
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </Animate>
    )
  }
}
export default ChartsPage;