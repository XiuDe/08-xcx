//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    this.globalData = {
      // key
      key: '9cc05aeda36998e65ce2e288df00a61f',
      // latestClassic a610d24a-ed48-418d-90dc-9ca21f69e29a
      collectionLatest: 'latestClassic',
      latestClassicId: 'a610d24a-ed48-418d-90dc-9ca21f69e29a',
      // like d29ce40b-a464-4432-8670-f1effa02500e
      collectionLike: 'like',
      likeDocId: 'd29ce40b-a464-4432-8670-f1effa02500e',
      // music1 64d8d935-2b4e-4e57-9341-90fcd931b283
      collectionMusic1: 'music1',
      music1DocId: '64d8d935-2b4e-4e57-9341-90fcd931b283',
      // classic8 3c33c34d-215f-4266-9b17-6814c6ed7c70
      classicId8: '3c33c34d-215f-4266-9b17-6814c6ed7c70',
      // classic7 6ae9aaf3-cb3f-4f38-82fd-0f6b1dc0e1e9
      classicId7: '6ae9aaf3-cb3f-4f38-82fd-0f6b1dc0e1e9',
      // classic6 7ed529a9-0de8-4b8b-9ae6-6ba1fdcc3f91
      classicId6: '7ed529a9-0de8-4b8b-9ae6-6ba1fdcc3f91',
      // classic5 1b28f5d9-a2e8-413c-ad33-aebeda0e255d
      classicId5: '1b28f5d9-a2e8-413c-ad33-aebeda0e255d',
      // classic4 1a29d648-b766-4c12-8130-1bf093f296d9
      classicId4: '1a29d648-b766-4c12-8130-1bf093f296d9',
      // classic3 44df9a9c-1318-4c01-a3b2-a0f69479bf88
      classicId3: '44df9a9c-1318-4c01-a3b2-a0f69479bf88',
      // classic2 24bfd648-73ff-45a0-a48f-74ecaf769136
      classicId2: '24bfd648-73ff-45a0-a48f-74ecaf769136',
      // classic1 e41d95ea-7021-48db-baa3-513396da714d
      classicId1: 'e41d95ea-7021-48db-baa3-513396da714d'
     }
  }
})
