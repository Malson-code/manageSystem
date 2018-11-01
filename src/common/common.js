/**
 *   Create by Malson on 2018/5/29
 */
import $ from 'jquery';
import {validate,formValidate} from './Validate';
export default  {
  getConfig(){
    $.getJSON('config.json',function (result) {
      this.config = result;
    })
  },
  /**
   *  遍历配置文件  将属性加到common
  */
  initConfig(obj){
    for(let i in obj){
      this[i] = obj[i];
    }
  },
  /**
   *  清除所有cookies
  */
  clearAllCookies(){
    let  keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if(keys) {
      for(let  i = keys.length; i--;)
        document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
  },
  /**
   *  对象深拷贝
  */
  deepCopyValue(source) {
    let sourceCopy = source instanceof Array ? [] : {};
    for ( let item in source) {
      if(source[item]!==null){
        sourceCopy[item] = typeof source[item] === 'object' ? this.deepCopyValue(source[item]) : source[item];
      }
      else{
        sourceCopy[item]=source[item]=null;
      }
    }
    return sourceCopy;
  },
  /**
   *  ajax请求  封装
   *  主要分为  doAjax(正常ajax  Post 请求)
   *            doRetrieveAjax  (分页查询)
  */
  ajaxBody(params){
    let paramsBody = {
      term:'17ESDje12',//标志号
      body:{
        object:params
      }
    };
    return JSON.stringify(paramsBody);
  },
  ajaxRetrieveBody(params,startPage,pageSize){
    if(!startPage || !pageSize){
      console.error('ajaxRetrieveBody,请传入正确参数！');
      return;
    }
    let paramsBody = {
      term:'17ESDje12',//标志号
      body:{
        object:params,
        startPage,
        pageSize,
      }
    };
    return JSON.stringify(paramsBody);
  },
  initAjaxUrl(url){
    //参数检验
    let pre = window.location.origin;
      return pre+'/manage_s/'+url;
  },
  /**
   *  ajax请求
  */
  doAjax(url,params){
    let promise = new Promise((resolve,reject)=>{
      let ajaxParams = this.ajaxBody(params);
      let ajaxUrl = this.initAjaxUrl(url);
      $.ajax({
        type:'post',
        url:ajaxUrl,
        data:ajaxParams,
        contentType: 'application/json; charset=UTF-8',
      }).done(resolve).fail(reject)
    });
    return promise;
  },
  doReteieveAjax(url,params,startPage,pageSize){
    let promise = new Promise((resolve,reject) => {
      let ajaxParams = this.ajaxRetrieveBody(params,startPage,pageSize);
      let ajaxUrl = this.initAjaxUrl(url);
      if(!ajaxParams||!ajaxUrl) return;
      $.ajax({
        type:'post',
        url:ajaxUrl,
        data:ajaxParams,
        contentType: 'application/json; charset=UTF-8',
      }).done(resolve).fail(reject)
    });
    return promise;
  },
  /**
   *  input 内容修改
   *  record  存储在state数据
   *  e当前dom
  */
  handleInputChange($this,record,e){
    let id = e.target.id,
        val = e.target.value;
    record[id] = val;
    validate($this,record,id);
    //更新UI
    if($this.state.loading!=='undefined'){
      $this.setState({loading:$this.state.loading});
    }else{
      $this.forceUpdate();
    }
  },
  
  /**
   *  form表单校验方法
  */
  validate,
  formValidate,
  
  /**
   *  table公共属性
  */
  tableProps:{
    bordered:true,
    className:'table-header-center',
  },
  /**
   *  form公共属性
   *  state 内 hints 对象
   *  name 当前 form的name
   *  nameLabel 当前显示中文的label名称
  */
  formProps(data,name,label){
    return {
      help:data[name+'Hint'],
      validateStatus:data[name+'Status'],
      label,
      labelCol:{span:6},
      wrapperCol:{span:17}
    }
  },
  /**
   *  专属form Input的简写
   *  data显示 state 中数据
   *  id 当前 form的 id
   *  placeholder 当前显示中文的placeholder名称
   *
  */
  formInputProps(data,id,placeholder){
    return {
      value:data[id],
      id,
      placeholder:'输入' + placeholder,
    }
  },
}