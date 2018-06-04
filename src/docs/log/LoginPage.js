/**
 *   Create by Malson on 2018/5/29
 */
import React from 'react';
import {Icon, Checkbox, Form, Input, Button} from 'antd';
import './log.scss';
import '../../style/common.scss';
import HandleChange from '../../common/HandleChange';
import common from '../../common/common';
const FormItem = Form.Item;

@HandleChange
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }
  
  componentWillMount() {
    let validRules =
        [
          {
            id: 'account',//id
            desc: '账号',//显示的字段名
            required: true,
            max: 20,
            maxFlag: true,
          },
          {
            id: 'password',
            desc: '密码',
            required: true,
            max: 300,
          },
        ],
        totalInput = ['account', 'password'];
    //初始化有多少Input
    this.props.actions.initField(totalInput, validRules);
    //查看是否有记住密码
  }
  onSure = () => {
    const {formValidate} = this.props.actions;
    if (formValidate()) {
      if (this.state.checked) {
        window.localStorage.account = this.props.state.inputVal.account;
        window.localStorage.password = this.props.state.inputVal.password;
      }
      let home = common.homeUrl || '/home';
      this.props.history.push(home);
    }
  }
  handleCheckChange = (e) => {
    this.setState({checked: e.target.checked});
  }
  
  render() {
    const formLayout = 'horizontal';
    const {validBackData, inputVal} = this.props.state;
    const {actions} = this.props;
    return (
        <div className='login-bg'>
          <div className='mal-login-wrap'>
            <div className='login-title'>
              啊哈哈，我要登录！
            </div>
            <Form layout={formLayout}>
              <FormItem
                  help={validBackData.accountHint}
                  validateStatus={validBackData.accountStatus}
                  style={{height: 74, marginBottom: 0}}
              >
                <Input
                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                    placeholder="请输入账号"
                    id='account'
                    className='login-input'
                    onChange={actions.handleInputChange}
                    value={inputVal.account}
                    size='large'
                    autoComplete = 'username'
                />
              </FormItem>
              <FormItem
                  help={validBackData.passwordHint}
                  validateStatus={validBackData.passwordStatus}
                  style={{height: 74, marginBottom: 0}}
              >
                <Input
                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                    autosize={{minRows: 4, maxRows: 4}}
                    type='password'
                    placeholder="请输入密码"
                    id='password'
                    size='large'
                    className='login-input'
                    onChange={actions.handleInputChange}
                    value={inputVal.password}
                    autoComplete = 'current-password'
                />
              </FormItem>
              <div style={{marginTop: 0}}>
                <Checkbox checked={this.state.checked} onChange={this.handleCheckChange}>自动登录</Checkbox>
                <span className='forget-password'>忘记密码</span>
              </div>
              <Button
                  type="primary"
                  style={{width: '100%', marginTop: '15px'}}
                  onClick={this.onSure}
                  size='large'
              >
                确 定
              </Button>
              <div style={{marginTop: 15}}>
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