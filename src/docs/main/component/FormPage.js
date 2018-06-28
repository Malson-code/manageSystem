/**
 *   Create by Malson on 2018/6/4
 */

import React from 'react';
import {Icon, Modal, Form, Input, Button,Row, Col} from 'antd';
import HandleChange from '../../../common/HandleChange';
const FormItem = Form.Item;

@HandleChange
class CreateFormPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
    
    }
  }
  init = ()=>{
    let totalInput = ['a', 'b', 'c','d','e','f','g'],
        validRules = [
          {
            id: 'a',//id
            desc: 'a',//显示的字段名
            required: true,
            max: 20,
          },
          {
            id:'b',
            desc: 'b',//显示的字段名
            required: true
          },
          {
            id:'c',
            desc: 'c',//显示的字段名
          }
          
        ];
    let {actions} = this.props;
    actions.initField(totalInput, validRules);
  };
  initUpdateData  = (data)=>{
    this.props.actions.initUpdataField(data);
  };
  componentDidMount(){
    this.init();
  }
  handleOk = ()=>{
    this.props.handleOk();
    this.init();
  };
  handleCancel = ()=>{
    this.props.handleCancel();
    this.init();
  };
  render(){
    const formLayout = 'horizontal';
    const textLabel = {
      labelCol:{span:7},
      wrapperCol:{span:17}
    };
    const {validBackData,inputVal} = this.props.state;
    const {actions,modalType,modalVisible} = this.props;
    let modalTitle = modalType==='add'?'新增信息':modalType==='edit'?'编辑信息':'';
    const colNum = 24;
    return(
        <Modal
            title={modalTitle}
            visible={modalVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
        >
          {/*需要form根据字段长短调节的  加上classnName 'flex-form'  或者单个加  'flex-form-item'*/}
          <Form layout={formLayout}>
            <Row>
              <Col span={colNum}>
                <FormItem
                    help={validBackData.aHint}
                    validateStatus={validBackData.aStatus}
                    label="名称的的"
                    {...textLabel}
                >
                  <Input placeholder="输入名称"
                         id='a'
                         onChange={actions.handleInputChange}
                         value={inputVal.a}
                  />
                </FormItem>
              </Col>
              <Col span={colNum}>
                <FormItem
                    help={validBackData.bHint}
                    validateStatus={validBackData.bStatus}
                    label="年龄我是"
                    {...textLabel}
                >
                  <Input placeholder="输入年龄"
                         id='b'
                         onChange={actions.handleInputChange}
                         value={inputVal.b}
                  />
                </FormItem>
              </Col>
              <Col span={colNum}>
                <FormItem
                    help={validBackData.cHint}
                    validateStatus={validBackData.cStatus}
                    label="年龄我是"
                    {...textLabel}
                >
                  <Input placeholder="输入年龄"
                         id='c'
                         onChange={actions.handleInputChange}
                         value={inputVal.c}
                  />
                </FormItem>
              </Col>
              <Col span={colNum}>
                <FormItem
                    help={validBackData.dHint}
                    validateStatus={validBackData.dStatus}
                    label="年龄我是"
                    {...textLabel}
                >
                  <Input placeholder="输入年龄"
                         id='d'
                         onChange={actions.handleInputChange}
                         value={inputVal.d}
                  />
                </FormItem>
              </Col>
              <Col span={colNum}>
                <FormItem
                    help={validBackData.eHint}
                    validateStatus={validBackData.eStatus}
                    label="年龄我是我是"
                    {...textLabel}
                >
                  <Input placeholder="输入年龄"
                         id='e'
                         onChange={actions.handleInputChange}
                         value={inputVal.e}
                  />
                </FormItem>
              </Col>
            </Row>
          </Form>
        </Modal>
    )
  }
}
export default CreateFormPage;