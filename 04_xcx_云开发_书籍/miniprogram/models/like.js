import {HTTP} from '../util/http.js';

var app = getApp();

class LikeModel extends HTTP{

  like(behavior,artID,category){
    let url = behavior =='like'?'like':'like/cancel';
    this.cloudDatabaseUpdata({
      collectionName: app.globalData.collectionLike,
      docId: app.globalData.likeDocId,
      art_id: artID,
      type: category
    });
    // 数据提交给后台
    /* this.request({
      url: url,
      method: 'POST',
      data:{
        art_id: artID,
        type: category
      }
    }) */

  }

  /**
   * 获取喜爱的数量
  */
  getClassicLikeStatus(artID,category,sCallback){
    this.cloudDatabaseUpdata({
      collectionName: app.globalData.collectionLike,
      docId: app.globalData.likeDocId,
      art_id: artID,
      type: category,
      success: sCallback
    });
  }

}

export {LikeModel}