/**
 *   Create by Malson on 2018/5/29
 */
import React from 'react';
import { Icon, Checkbox ,Form,Input,Button } from 'antd';
import './log.scss';
import HandleChange from '../../common/HandleChange';
const FormItem = Form.Item;

@HandleChange
class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      checked:false
    }
  }
  componentWillMount(){
    let validRules =
            [
              {
                id: 'step',//id
                desc: '阶段',//显示的字段名
                required: true,
                max: 20,
                maxFlag:true,
              },
              {
                id: 'pointContent',
                desc: '概述',
                required: true,
                max: 300,
              },
            ],
        totalInput = ['step','pointContent'];
    let  {actions} = this.props;
    actions.initField(totalInput,validRules);
  }
  onSure = ()=>{
    const {formValidate} = this.props.actions;
    if(formValidate()){
      this.props.history.push('/main');
    }
  }
  handleCheckChange = (e)=>{
    this.setState({checked:e.target.checked});
  }
  render() {
    const formLayout = 'horizontal';
    const {validBackData,inputVal} = this.props.state;
    const {actions} = this.props;
    return (
        <div className='login-bg'>
        <div className='mal-login-wrap'>
          <div className='login-title'>
            啊哈哈，我要登录！
          </div>
          <Form layout={formLayout}>
            <FormItem
                help={validBackData.stepHint}
                validateStatus={validBackData.stepStatus}
                style={{height:74,marginBottom:0}}
            >
              <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="请输入账号"
                  id='step'
                  className='login-input'
                  onChange={actions.handleInputChange}
                  value={inputVal.step}
                  size='large'
              />
            </FormItem>
            <FormItem
                help={validBackData.pointContentHint}
                validateStatus={validBackData.pointContentStatus}
                style={{height:74,marginBottom:0}}
            >
              <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  autosize={{ minRows: 4, maxRows: 4 }}
                  type='password'
                  placeholder="请输入密码"
                  id='pointContent'
                  size='large'
                  className='login-input'
                  onChange={actions.handleInputChange}
                  value={inputVal.pointContent}
              />
            </FormItem>
            <div style={{marginTop:0}}>
              <Checkbox checked={this.state.checked} onChange={this.handleCheckChange}>自动登录</Checkbox>
              <span className='forget-password'>忘记密码</span>
            </div>
            <Button
                type="primary"
                style={{width:'100%',marginTop:'15px'}}
                onClick={this.onSure}
                size='large'
            >
              确 定
            </Button>
            <div style={{marginTop:15}}>
              <span className='other-style'>其他方式登录</span>
              <Icon type="wechat" className='other-style-icon'/>
              <Icon type="taobao-circle" className='other-style-icon'/>
              <Icon type="alipay-circle" className='other-style-icon'/>
              <span className='log-register'>注册</span>
            </div>
          </Form>
        </div>
        </div>
    );
  }
}
export default LoginPage;