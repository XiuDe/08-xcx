export default class LastMayday {
  palette() {
    return ({
      width: '680rpx',
      height: '1200rpx',
      background: '#FFFFFF',
      views: [
        {
          type: 'image',
          url: 'http://yaotiao-base.oss-cn-beijing.aliyuncs.com/data/upload/xcx/common/canvas-img/tit-img2.png',
          css: {
            top: '0rpx',
            left: '0rpx',
            width: '680rpx',
            height: '140rpx',
          },
        },
        {
          type: 'image',
          url: 'http://yaotiao-base.oss-cn-beijing.aliyuncs.com/data/upload/xcx/common/canvas-img/avator-img2.png',
          css: {
            top: '164rpx',
            left: '57rpx',
            width: '90rpx',
            height: '90rpx',
          },
        },
        {
          id: 'text-id-canvas-1',
          type: 'text',
          text: '要挑  谁谁的店铺',
          css: [{
            top: '177rpx',
            left: '177rpx',
            textAlign: 'center',
            deletable: true,
            fontSize: '30rpx',
            color: '#EE0101',
            fontFamily:'Source Han Sans CN',
          }],
        },
        {
          id: 'text-id-canvas-2',
          type: 'text',
          text: '评价好货限时团购，快来抢！',
          css: [{
            top: '223rpx',
            left: '175rpx',
            textAlign: 'center',
            deletable: true,
            fontSize: '23rpx',
            color: '#999999',
            fontFamily:'Source Han Sans CN',
          }],
        },
        {
          type: 'image',
          url: 'http://yaotiao-base.oss-cn-beijing.aliyuncs.com/data/upload/xcx/common/canvas-img/goods-img2.png',
          css: {
            top: '283rpx',
            left: '47rpx',
            // align: 'center',
            width: '587rpx',
            height: '588rpx',
          },
        },
        {
          id: 'text-id-canvas-4',
          type: 'text',
          text: '雅诗兰黛Estee Lauder...',
          css: [{
            top: '900rpx',
            left: '50rpx',
            deletable: true,
            fontSize: '30rpx',
            color: '#3D3C3C',
            fontFamily:'Source Han Sans CN',
          }],
        },
        {
          id: 'text-id-canvas-5',
          type: 'text',
          text: '¥299.00',
          css: [{
            top: '895rpx',
            right: '51rpx',
            deletable: true,
            fontSize: '42rpx',
            color: '#EE0101',
            fontFamily:'Source Han Sans CN',
          }],
        },
        {
          id: 'text-id-canvas-6',
          type: 'text',
          text: '原价：¥369.9',
          css: [{
            top: '948rpx',
            right: '53rpx',
            deletable: true,
            fontSize: '21rpx',
            color: '#636363',
            fontFamily:'Source Han Sans CN',
            textDecoration: 'line-through'
          }],
        },
        {
          type: 'qrcode',
          content: 'https://mall.yaotiao.net/cwap/cwap_product_detail.html?gid=10120',
          css: {
            bottom: '86rpx',
            left: '43rpx',
            color: 'black',
            width: '141rpx',
            height: '141rpx',
          },
        },
        {
          id: 'text-id-canvas-7',
          type: 'text',
          text: '谁谁的店铺',
          css: [{
            top: '1024rpx',
            left: '203rpx',
            deletable: true,
            fontSize: '26rpx',
            color: '#999999',
            fontFamily:'Source Han Sans CN'
          }],
        },
        {
          id: 'text-id-canvas-8',
          type: 'text',
          text: '长按识别二维码查看商品详情',
          css: [{
            top: '1065rpx',
            left: '203rpx',
            deletable: true,
            fontSize: '28rpx',
            color: '#4D4D4D',
            fontFamily:'Source Han Sans CN'
          }],
        },
        {
          type: 'image',
          url: 'http://yaotiao-base.oss-cn-beijing.aliyuncs.com/data/upload/xcx/common/canvas-img/bottom-tag-img2.png',
          css: {
            bottom: '27rpx',
            left: '130rpx',
            width: '421rpx',
            height: '20rpx',
          },
        },
      ],
    });
  }
}
