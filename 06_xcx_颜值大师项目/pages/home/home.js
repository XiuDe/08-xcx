// 获取app中的数据
const app = getApp();
console.log(app.globalData.access_token);

// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 窗口可用高度
    wh: 0,
    // 摄像头朝向 front back
    position: 'front',
    // 拍照得到的照片
    src:'',
    // 是否展示选择的照片
    isShowPic: false,
    // 颜值评测数据已接收
    isShowBox: false,
    // 人脸信息
    faceInfo: null,
    // 映射关系
    map: {
      gender: {
        male: '男',
        female: '女'
      },
      expression:{
        none: '不笑',
        smile: '微笑',
        laugh: '大笑'
      },
      glasses:{
        none: '不带眼镜',
        common: '带眼镜',
        sun: '带墨镜'
      },
      emotion:{
        angry: '愤怒',
        disgust: '厌恶',
        fear: '恐惧',
        happy: '高兴',
        sad: '伤心',
        surprise: '惊讶',
        neutral: '无表情',
        pouty: '撅嘴',
        grimace: '鬼脸'
        // 尽可能的做表情
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 获取系统信息
    const sysInfo = wx.getSystemInfoSync();
    // console.log(sysInfo.windowHeight);
    this.setData({
      wh: sysInfo.windowHeight,
    });

  },

  // 点击按钮切换摄像头
  reverseCamera(){
    const newPosition = this.data.position === 'front' ? 'back' : 'front';
    this.setData({
      position: newPosition
    });
  }, 

  // 拍照
  takePhoto() {
    // 创建相机的实例对象
    const ctx = wx.createCameraContext();
    // 实现拍照
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath,
          isShowPic: true
        }, ()=> {
          this.getFaceInfo();
        })
        console.log(src);
      },
      fail: () => {
        this.setData({
          src:''
        });
        console.log('拍照失败了！');
      }
    })
  },

  // 从相册选择图片
  choosePhoto(){
    wx.chooseImage({
      count:1,
      sizeType: ['original'],
      sourceType: ['album'],
      success: (res) => {
        console.log(res);
        if(res.tempFilePaths.length > 0){
          this.setData({
            src: res.tempFilePaths[0],
            isShowPic: true
          }, () => {
            this.getFaceInfo();
          });
        }
      },
      fail: () => {
        console.log('获取照片失败了~');
        this.setData({
          src:''
        });
      }
    });
  },
  // 重选照片
  reChoose(){
    this.setData({
      isShowPic: false,
      src:'',
      isShowBox:false
    });
  },

  // 测颜值的函数
  getFaceInfo() {
    console.log('调用了测颜值的函数~');
    console.log(app.globalData);
    
    const token = app.globalData.access_token;
    if(!token) {
      return wx.showToast({
        title: '鉴权失败~',
      })
    }
    // 颜值检测中...
    wx.showLoading({
      title: '颜值检测中...',
    })

    // 进行颜值检测
    // 把用户照片转码为base64
    const fileManager = wx.getFileSystemManager();
    const fileStr = fileManager.readFileSync(this.data.src, 'base64');
    
    // 携带编码的图片请求人脸识别
    wx.request({
      method:'POST',
      url: 'https://aip.baidubce.com/rest/2.0/face/v3/detect?access_token=' + token,
      header: {
        'Content-Type':'application/json'
      },
      data:{
        image_type:'BASE64',
        image: fileStr,
        // 年龄 颜值 表情 性别 眼镜 情绪(喜怒哀乐)
        face_field: 'age,beauty,expression,gender,glasses,emotion'
      },
      success: (res) => {
        console.log(res);
        // if (res.data.result.face_num <= 0){
        if (res.data.result == null || res.data.result.face_num <= 0) {
          return wx.showToast({
            title: '未检测到人脸~',
          })
        }
        this.setData({
          faceInfo: res.data.result.face_list[0],
          isShowBox: true
        });
      },
      fail: () => {
        wx.showToast({
          title: '颜值检测失败啦~',
        })
      },
      complete: () => {
        wx.hideLoading();
      }
    })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})