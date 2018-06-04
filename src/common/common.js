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
}