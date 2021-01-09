// 导入behavior
import { classicBeh } from '../classic-beh.js';
// 需要拿到背景播放的音乐对象
//              getBackgroundAudioManager()
const mMgr = wx.getBackgroundAudioManager();

Component({
  /**
   * 组件的属性列表，动画
   * 动画API CSS3 canvas
   */
  behaviors:[classicBeh],
  properties: {
    src: String,
    title: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing:false,
    pauseSrc: 'images/player@pause.png',
    playSrc: 'images/player@play.png'
  },
  /**
   * wx:if 和 attached搭配，在数据赋值时使用
  */
  attached:function(event){
    this._recoverStatus();
  },
  /**
   * 组件从节点树中消失，wx:if触发
  */
  detached:function(event){
    // hidden wx:if 
    // mMgr.stop(); 
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onPlay:function(event){
      if(!this.data.playing){
        this.setData({
          playing: true
        });
        mMgr.src = this.properties.src;
        mMgr.title = this.properties.title;
      }else{
        this.setData({
          playing: false
        });
        mMgr.pause()
      }
    },
    // 匹配当前页面音乐按钮的状态
    _recoverStatus:function(){
      if(mMgr.paused){
        this.setData({
          playing:false
        });
        return 
      }
      if(mMgr.src == this.properties.src){
        this.setData({
          playing:true
        });
      }

    },
    // 检测播放按钮和背景状态开关，并实现同步
    _monitorSwitch:function(){
      mMgr.onPlay(()=>{
        this._recoverStatus();
      });
      mMgr.onPause(()=>{
        this._recoverStatus();
      });
      mMgr.onStop(()=>{
        this._recoverStatus();
      });
      mMgr.onEnded(()=>{
        this._recoverStatus();
      });
    }
  }
})
