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
  initConfig(obj){
    for(let i in obj){
      this[i] = obj[i];
    }
  },
  clearAllCookies(){
    let  keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if(keys) {
      for(let  i = keys.length; i--;)
        document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
  }
}