/**
 *   Create by Malson on 2018/10/15
 */
import {ValidRegExp,ValidMsg} from './ValidRegExp';
import React from 'react';
//公共方法
let _check = (matchRule, value='') =>{
  let m = matchRule;
  if(m.required == true && value===''){ return `请输入${m.desc}` }
  if(m.max && value.length > m.max){
    if(m.maxFlag){
      maxF = true ;
      let o = {[m.id]:this.state.inputVal[m.id].substring(0,m.max)};
      this.setState({inputVal:Object.assign({},this.state.inputVal,o)});
    }
    return `【${m.desc}】最多输入【${m.max}】个字符`;
  }
  if(m.min&&value.length < m.min){
    return `【${m.desc}】最少输入【${m.max}】个字符`;
  }
  if(m.specialChar){
    let specialChar = /[/*`~!@#$%^&*()_+<>?:|?<>"{},.\/\\;'[\]]/im;
    if (specialChar.test(value)){ return '不能输入特殊符号' }
  }
  if(m.pattern){
    if(!m.pattern.test(value)){
      if(m.patternPrompt){ return m.patternPrompt }
      else { return '请输入正确内容' }
    }
  }
  if(m.validator){
    let msg = m.validator(value);
    if(msg){
      return msg;
    }
  }
  let r = m.other;
  if(r&&r instanceof Array&&r.length){
    let ms;
    for(let i of r){
      if(ValidRegExp[i]&&!ValidRegExp[i].test(value)){
        ms = ValidMsg[i];
        break;
      }
    }
    if(ms){
      return ms;
    }
  }
  return '';
};

/**
 *  页面展示错误处理
 */
let _setError = ($this,id,errMsg) =>{
  if(!errMsg){
    $this.state.hints[id+'Status'] = '';
    $this.state.hints[id+'Hint'] = '';
  }else{
    $this.state.hints[id+'Status'] = 'error';
    $this.state.hints[id+'Hint'] = <span className='errorHint'>{ errMsg }</span>;
  }
};

/**
 *  校验方法
 *  $this   上下文环境
 *  record  当前state存储表单数据的对象值
 *  id      当前需要校验的表单id(如果不传id则为全部校验)
*/
let validate = ($this,record={},id) =>{
  //页面定义的校验规则
  let validRules = $this.state.validRules || [];
  if(!validRules.length){return true;}
  let flag = true;
  
  if (!id) {
    //存放错误提示的容器   固定字段hints
    $this.state.hints = {};
    validRules.map((rule, i) => {
      let value = record[rule.id];
      //去除首尾空格s
      if (value) {
        value = value.toString().replace(/(^\s*)|(\s*$)/g, "");
        record[rule.id] = value;
      }
      
      let errMsg = _check(rule, value);
      if (errMsg) {
        //含有最多这个字段的时候截取字段
        if(errMsg.indexOf('最多')!==-1 && rule['max']){
          record[rule.id] = value.substring(0,rule['max'])
        }
        _setError($this, rule.id, errMsg);
        flag = false;
      }
    });
  }
  else {
    for (let x = validRules.length - 1; x >= 0; x--) {
      let rule = validRules[x];
      if (rule.id === id) {
        let value = record[id];
        let errMsg = _check(rule, value);
        _setError($this, id, errMsg);
        if (errMsg) {
          flag = false;
          //含有最多这个字段的时候截取字段
          if(errMsg.indexOf('最多')!==-1&&rule['max']){
            record[rule.id] = value.substring(0,rule['max'])
          }
        }
        else if (rule.dataType === 'number' && value !== '') {
          record[id] = '' + parseInt(value);
        }
        break;
      }
    }
  }
  //强制刷新下UI
  $this.forceUpdate();
  return flag;
};
//全部表单校验
const formValidate = ($this,record)=>validate($this,record);


export {validate,formValidate};