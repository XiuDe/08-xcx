import {
  ClassicModel
} from '../../models/classic.js';
import {
  LikeModel
} from '../../models/like.js';

let likeModel = new LikeModel();
let classicModel = new ClassicModel();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    classic: null,
    latest: true,
    first: false,
    // like组件状态
    likeCount:0,
    likeStatus:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    classicModel.getLatest((res) => {
      this.setData({
        classic: res.data,
        // ...res.data
        likeCount: res.data.fav_nums,
        likeStatus: res.data.like_status
      });
      // latestClassic -> latestIndex currentClassic-> currentIndex 使用数据缓存解决
    });
  },
  /**
   * 自定义事件监听like
   */
  onLike: function(e) {
    let behavior = e.detail.behavior; //获取当前的喜欢与否的状态提交到服务器
    likeModel.like(behavior, this.data.classic.id, this.data.classic.type);
  },
  /**
   * 下一页面
   */
  onNext: function(event) {
    let index = this.data.classic.index;
    index = Number(index) + 1;
    if (index < 9 && index > 0) {
      classicModel.getPreviousOrNext(index,(res) => {
        this.setData({
          classic: res.data,
          latest: classicModel.isLatest(res.data.index),
          first: classicModel.isFirst(res.data.index)
        });
      })
    }
    

  },
  /**
   * 上一页面
   */
  onPrevious: function(event) {
    let index = this.data.classic.index;
    // 云数据库
    index = index - 1;
    if (index < 9 && index >= 1) {
      classicModel.getPreviousOrNext(index,(res) => {
        this._getLikeStatus(res.id,res.type);
        this.setData({
          classic: res.data,
          latest: classicModel.isLatest(res.data.index),
          first: classicModel.isFirst(res.data.index)
        });
      })
    }

  },
  /**
   * 得到like状态
  */
  _getLikeStatus:function(artID, category){
    likeModel.getClassicLikeStatus(artID, category, res =>{
      this.setDate({
        likeCount: res.data.fav_nums,
        likeStatus: res.data.like_status
      });
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})