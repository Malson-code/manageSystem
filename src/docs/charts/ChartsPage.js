/**
 *   Create by Malson on 2018/5/29
 */
import React from 'react';
import './chart.scss';
import './chartXilai.scss';
import Animate from '../components/Animate';
import {Card, Button, Col, Row, Icon, Spin} from 'antd';
import Chart1 from './component/Chart1';
import Chart2 from './component/Chart2';
import Chart3 from './component/Chart3';
import Chart4 from './component/Chart4';
import ChartXilai from './component/ChartXilai';

class ChartsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      
    }
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false});
    }, 2000)
  }
  
  render() {
    let colSpan = 12;
    const ChartXilaiProps = {
      firstLine: '下单量',
      secondLine: '成单量',
      unit: '单'
    };
    const ChartXilaiProps2 = {
      firstLine: '订单金额',
      secondLine: '预计分成金额',
      unit: '元'
    };
    const {loading} = this.state;
    return (
        <Animate type='right'>
          <div key='1'>
            <div className='modal-title'>图表展示</div>
            <div style={{marginTop: 20}}>
              <Spin spinning={loading}>
                <Row>
                  <Col span={6} className='chart-card-mini'>
                    <Card title={null}>
                      <div className='card-wrap'>
                        <div className='left-icon' style={{backgroundColor: '#B5ABFF'}}>
                          <Icon className='show-icon' type='book'/>
                        </div>
                        <div className='chart-right'>
                          <div className='title'>下单量</div>
                          <div><span title='365'>365</span>单</div>
                        </div>
                      </div>
                    </Card>
                  </Col>
                  <Col span={6} className='chart-card-mini'>
                    <Card title={null}>
                      <div className='card-wrap'>
                        <div className='left-icon' style={{backgroundColor: '#F4AB45'}}>
                          <Icon className='show-icon' type='schedule'/>
                        </div>
                        <div className='chart-right'>
                          <div className='title'>成单量</div>
                          <div><span title='365'>365</span>单</div>
                        </div>
                      </div>
                    </Card>
                  </Col>
                  <Col span={6} className='chart-card-mini'>
                    <Card title={null}>
                      <div className='card-wrap'>
                        <div className='left-icon' style={{backgroundColor: '#30A1FB'}}>
                          <Icon className='show-icon' type='inbox'/>
                        </div>
                        <div className='chart-right'>
                          <div className='title'>订单金额</div>
                          <div><span title='112031111'>100000</span>元</div>
                        </div>
                      </div>
                    </Card>
                  </Col>
                  <Col span={6} className='chart-card-mini'>
                    <Card title={null}>
                      <div className='card-wrap'>
                        <div className='left-icon' style={{backgroundColor: '#63D067'}}>
                          <Icon className='show-icon' type='wallet'/>
                        </div>
                        <div className='chart-right'>
                          <div className='title'>预计分成金额</div>
                          <div><span title='13624'>13624</span>元</div>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
                <ChartXilai {...ChartXilaiProps} />
                <ChartXilai {...ChartXilaiProps2} />
                <Row>
                  <Col span={colSpan} className='chart-card'>
                    <Card hoverable title='我是图表1'>
                      <Chart1/>
                    </Card>
                  </Col>
                  <Col span={colSpan} className='chart-card'>
                    <Card hoverable title='我是图表2'>
                      <Chart2/>
                    </Card>
                  </Col>
                  <Col span={colSpan} className='chart-card'>
                    <Card hoverable title='我是图表3'>
                      <Chart3/>
                    </Card>
                  </Col>
                  <Col span={colSpan} className='chart-card'>
                    <Card hoverable title='我是图表4'>
                      <Chart4/>
                    </Card>
                  </Col>
                </Row>
              </Spin>
            </div>
          </div>
        </Animate>
    )
  }
}

export default ChartsPage;