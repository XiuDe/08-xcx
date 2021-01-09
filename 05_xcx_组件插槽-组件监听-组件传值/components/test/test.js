// components/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propCount: Number
  },
  // 启用多插槽
  options:{
    multipleSlots: true
  },

  /**
   * 组件的初始数据
   */
  data: {
    name:'Yaotiao'
  },
  // 数据监听器
  observers: {
    'name,propCount': function(newName,newpropCount){
      console.log('最新的name值是：'+newName),
        console.log('最新的name值是：' + newpropCount)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

    // 按钮触摸事件
    btnHandler: function(){
      console.log(this.data.name);
      this.setData({
        name:'YaotiaoMiniProgram'
      });
      console.log(this.data.name);
    },
    comBtnHandler:function(){
      this.setData({
        propCount:this.properties.propCount + 1,
      })
      this.triggerEvent('myevent',{count:this.properties.propCount})
    }

  }
})
