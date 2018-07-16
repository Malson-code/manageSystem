/**
 *   Create by Malson on 2018/5/29
 */
import $ from 'jquery';
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
  }
}