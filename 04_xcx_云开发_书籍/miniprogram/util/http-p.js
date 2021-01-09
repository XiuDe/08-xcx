// 导入的名要和导出的名相同，如果不相同导入时 {config as config1}，导入变量和函数 {config,fun1}
import {config} from '../config.js';
const db = wx.cloud.database();
var app = getApp();

// 定义数据请求失败后反馈给用户的消息
const tips = {
  1: '抱歉，出现了一个错误',
  1005: '没有用户权限',
  3000: '期刊不存在'
};

class HTTP{
 
  /**
   *  反馈错误信息 私有方法
  */
  _show_error(error_code){
    // 如果error_code不存在或为空
    if(!error_code){
      error_code = 1
    }
    const tip = tips[error_code];
    wx.showToast({
      title: tip?tip:tips[error_code],
      icon: 'none',
      duration: 2000
    })
  }

  request({url, data={}, method='GET'}) {
    return new Promise((resolve, reject)=>{
      this._request(url,resolve,reject,data,method);
    });
  }

  // 从要挑后台获取数据 // url, data, method
  _request(url, resolve, reject,data={}, method='GET'){
    if(!method){
      method = "GET"
    }
    wx.request({
      url: config.api_base_url + url,
      method: method,
      data: data,
      header: {
        'content-type':'application/json'
      },
      success:res =>{
        const code = res.statusCode.toString();
        if(code.startsWith('2')){  // 请求成功
          // resolve(success(res.data)); // 回调函数
          resolve(res);
        }else{
          reject();
          const error_code = res.data.error_code;
          this._show_error(error_code);
        }
      },
      fail: err =>{
        reject();
        // API 调用失败
        this._show_error(1);
      }
    })
  }

}

export {HTTP}