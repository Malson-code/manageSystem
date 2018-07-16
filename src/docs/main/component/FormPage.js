/**
 *   Create by Malson on 2018/6/4
 */

import React from 'react';
import {Icon, Modal, Form, Input, Button,Row, Col} from 'antd';
import HandleChange from '../../../common/HandleChange';
const FormItem = Form.Item;

/**
 *  将表格的增删改查放在同一个界面
*/


@HandleChange
class CreateFormPage extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }
  init = ()=>{
    let totalInput = ['name', 'age', 'phone','job','address'],//初始化  初始值为''
        validRules = [
          {
            id: 'name',//id
            desc: '姓名',//显示的字段名
            required: true,
            max: 20,
          },
          {
            id:'age',
            desc: '年龄',//显示的字段名
            required: true
          },
          {
            id:'phone',
            desc: '手机号',//显示的字段名
            required: true,
            other:['mobile']
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
    const {formValidate} = this.props.actions;
    if(formValidate()){
      this.props.handleOk();
    }
    // this.init();
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
    const {actions,modalType,modalVisible,btnLoading} = this.props;
    let modalTitle = modalType==='add'?'新增信息':modalType==='edit'?'编辑信息':'';
    const colNum = 24;
    return(
        <Modal
            title={modalTitle}
            visible={modalVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            confirmLoading={btnLoading}
        >
          {/*需要form根据字段长短调节的  加上classnName 'flex-form'  或者单个加  'flex-form-item'*/}
          <Form layout={formLayout}>
            <Row>
              <Col span={colNum}>
                <FormItem
                    help={validBackData.nameHint}
                    validateStatus={validBackData.nameStatus}
                    label="姓名"
                    {...textLabel}
                >
                  <Input placeholder="输入姓名"
                         id='name'
                         onChange={actions.handleInputChange}
                         value={inputVal.name}
                  />
                </FormItem>
              </Col>
              <Col span={colNum}>
                <FormItem
                    help={validBackData.ageHint}
                    validateStatus={validBackData.ageStatus}
                    label="年龄"
                    {...textLabel}
                >
                  <Input placeholder="输入年龄"
                         id='age'
                         onChange={actions.handleInputChange}
                         value={inputVal.age}
                  />
                </FormItem>
              </Col>
              <Col span={colNum}>
                <FormItem
                    help={validBackData.phoneHint}
                    validateStatus={validBackData.phoneStatus}
                    label="手机号"
                    {...textLabel}
                >
                  <Input placeholder="输入手机号"
                         id='phone'
                         onChange={actions.handleInputChange}
                         value={inputVal.phone}
                  />
                </FormItem>
              </Col>
              <Col span={colNum}>
                <FormItem
                    help={validBackData.jobHint}
                    validateStatus={validBackData.jobStatus}
                    label="工作职位"
                    {...textLabel}
                >
                  <Input placeholder="输入工作职位"
                         id='job'
                         onChange={actions.handleInputChange}
                         value={inputVal.job}
                  />
                </FormItem>
              </Col>
              <Col span={colNum}>
                <FormItem
                    help={validBackData.addressHint}
                    validateStatus={validBackData.addressStatus}
                    label="地址"
                    {...textLabel}
                >
                  <Input placeholder="输入地址"
                         id='address'
                         onChange={actions.handleInputChange}
                         value={inputVal.address}
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