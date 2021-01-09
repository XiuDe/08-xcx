import {
  HTTP
} from '../util/http.js';

var app = getApp();
class ClassicModel extends HTTP {
  /**
   * 获取最新电影
   */
  getLatest(sCallback) {
    // 使用云数据库获取最新电影
    this.cloudDatabaseGet({
      collectionName: app.globalData.collectionLatest,
      docId: app.globalData.latestClassicId,
      success: res => {
        // 获取到的数据
        sCallback(res);
        // 获取到数据后先缓存
        this._setLatestIndex(res.data.index);
        let key = this._getKey(res.data.index);
        wx.setStorageSync(key, res)
      }
    })

    /* // 如果使用后端
    this.request({
      url: 'classic/latest',
      success: res =>{
        sCallback(res);
      }
    }) */
  }

  /**
   * 获取classic上一页音乐
   */
  getPreviousOrNext(index, sCallback) {
    // 使用后端
    /* this.request({
      url: 'classic/'+index+'/previous',
      success: res =>{
        sCallback(res);
      }
    }); */
    // 缓存中寻找 or 发送请求并写入缓存
    // key 确定key nextOrPrevious-> Next（true +1得来的）  nextOrPrevious-> Previous（false -1得来的）
    // let key = nextOrPrevious == 'true' ? this._getKey(index - 1) : this._getKey(index + 1);
    let key = this._getKey(index);
    console.log(key);
    let classic = wx.getStorageSync(key);
    console.log(classic);

    if (!classic) {
      // 云数据库集合是classic1-8 
      let collectionName = 'classic' + index;
      let docId = 'classicId' + index;
      this.cloudDatabaseGet({
        collectionName,
        docId: app.globalData[docId],
        success: res => {
          // 获取到的数据
          // 将请求的数据写入到缓存中
          wx.setStorageSync(this._getKey(index), res);
          sCallback(res);
          // console.log(res.data); 没有出现问题
        }
      })
    }else{
      sCallback(classic);
    }
    
  }

  // 判断是否是第一张
  isFirst(index) {
    return index == 1 ? true : false;
  }
  // 判断是否是最新
  isLatest(index) {
    let latestIndex = this._getLatestIndex();
    return latestIndex == index ? true : false;
  }

  // 私有方法 存入latestIndex
  _setLatestIndex(index) {
    wx.setStorageSync('latest', index);
  }
  // 私有方法 获取latestIndex
  _getLatestIndex() {
    let index = wx.getStorageSync('latest');
    return index;
  }

  _getKey(index) {
    let key = 'classic-' + index;
    return key;
  }
}

export {
  ClassicModel
}