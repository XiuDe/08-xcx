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
   * 获取云数据库电影、音乐的数据 
  */
  cloudDatabaseGet(params) {
    db.collection(params.collectionName).doc(params.docId).get().then(res => {
      params.success && params.success(res);
    }).catch(e => {
      // let error_code = res.data.error_code;
      this._show_error(1);
    });
  }
  /**
   * 获取云数据库音乐的数据
  */
  
  /**
   * 喜欢按钮更新数据库数据  -> 简便设置为添加用户数据
   * 逻辑：
   * 1、首先查询like集合内用户的openid
   * 2、openid存在则更新该openid的数据
   * 3、openid不存在则在like集合内创建openid
  */
  cloudDatabaseUpdata(params){
    // 更新数据库
    db.collection(params.collectionName).doc(app.globalData.likeDocId).update({
      data:{
        art_id: params.art_id,
        type: params.type
      }
    }).then(res=>{
      // 数据库中无修改权限
      params.success && params.success(res);
      console.log('执行完成~');
      console.log(res);
    }).catch(err=>{
      console.log('未执行~')
    });
    // 查询指定openid
    // db.collection(params.collectionName).where({
    //   _openid:'oXR3k5NfvtMHwjydIU-v2QQcx6j4'
    // }).get().then(res=>{
    //   console.log('openidS');
    //   console.log(res.data);
    // }).catch(err=>{
    //   console.log('openidF');
    //   console.log(err);
    // });
    // 保护数据库
    /* db.collection(params.collectionName).add({
      data:{
        art_id: params.art_id,
        type: params.type
      }
    }).then(res=>{
      params.success && params.success(res);
      console.log('执行完成~');
      console.log(res);
    }).catch(err=>{
      console.log('未执行~')
    }); */
  }
  /**
   *  反馈错误信息 私有方法
  */
  _show_error(error_code){
    // 如果error_code不存在或为空
    if(!error_code){
      error_code = 1
    }
    wx.showToast({
      title: tips[error_code],
      icon: 'none',
      duration: 2000
    })
  }
  // 从要挑后台获取数据 // url, data, method
  request(params){
    if(!params.method){
      params.method = "GET"
    }
    wx.request({
      url: config.api_base_url + params.url,
      method: params.method,
      data: params.data,
      header: {
        'content-type':'application/json'
      },
      success:res =>{
        let code = res.statusCode;
        if(code.startsWith('2')){  // 请求成功
          params.success && params.success(res); // 回调函数
        }else{
          let error_code = res.data.error_code;
          this._show_error(error_code);
        }
      },
      fail: err =>{
        // API 调用失败
        this._show_error(1);
      }
    })
  }

}

export {HTTP}