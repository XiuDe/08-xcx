export default class LastMaydaSave {
  paletteSave() {
    return ({
      width: '680px',
      height: '1200px',
      background: '#FFFFFF',
      views: [
        {
          type: 'image',
          url: 'http://yaotiao-base.oss-cn-beijing.aliyuncs.com/data/upload/xcx/common/canvas-img/tit-img2.png',
          css: {
            top: '0rpx',
            left: '0rpx',
            width: '680px',
            height: '140px',
          },
        },
        {
          type: 'image',
          url: 'http://yaotiao-base.oss-cn-beijing.aliyuncs.com/data/upload/xcx/common/canvas-img/avator-img2.png',
          css: {
            top: '164px',
            left: '57px',
            width: '90px',
            height: '90px',
          },
        },
        {
          id: 'text-id-canvas-1',
          type: 'text',
          text: '要挑  谁谁的店铺',
          css: [{
            top: '177px',
            left: '177px',
            textAlign: 'center',
            deletable: true,
            fontSize: '30px',
            color: '#EE0101',
            fontFamily:'Source Han Sans CN',
          }],
        },
        {
          id: 'text-id-canvas-2',
          type: 'text',
          text: '评价好货限时团购，快来抢！',
          css: [{
            top: '223px',
            left: '175px',
            textAlign: 'center',
            deletable: true,
            fontSize: '23px',
            color: '#999999',
            fontFamily:'Source Han Sans CN',
          }],
        },
        {
          type: 'image',
          url: 'http://yaotiao-base.oss-cn-beijing.aliyuncs.com/data/upload/xcx/common/canvas-img/goods-img2.png',
          css: {
            top: '283px',
            left: '47px',
            // align: 'center',
            width: '587px',
            height: '588px',
          },
        },
        {
          id: 'text-id-canvas-4',
          type: 'text',
          text: '雅诗兰黛Estee Lauder...',
          css: [{
            top: '900px',
            left: '50px',
            deletable: true,
            fontSize: '30px',
            color: '#3D3C3C',
            fontFamily:'Source Han Sans CN',
          }],
        },
        {
          id: 'text-id-canvas-5',
          type: 'text',
          text: '¥299.00',
          css: [{
            top: '895px',
            right: '51px',
            deletable: true,
            fontSize: '42px',
            color: '#EE0101',
            fontFamily:'Source Han Sans CN',
          }],
        },
        {
          id: 'text-id-canvas-6',
          type: 'text',
          text: '原价：¥369.9',
          css: [{
            top: '948px',
            right: '53px',
            deletable: true,
            fontSize: '21px',
            color: '#636363',
            fontFamily:'Source Han Sans CN',
            textDecoration: 'line-through'
          }],
        },
        {
          type: 'qrcode',
          content: 'https://mall.yaotiao.net/cwap/cwap_product_detail.html?gid=10120',
          css: {
            bottom: '86px',
            left: '43px',
            color: 'black',
            width: '141px',
            height: '141px',
          },
        },
        {
          id: 'text-id-canvas-7',
          type: 'text',
          text: '谁谁的店铺',
          css: [{
            top: '1024px',
            left: '203px',
            deletable: true,
            fontSize: '26px',
            color: '#999999',
            fontFamily:'Source Han Sans CN'
          }],
        },
        {
          id: 'text-id-canvas-8',
          type: 'text',
          text: '长按识别二维码查看商品详情',
          css: [{
            top: '1065px',
            left: '203px',
            deletable: true,
            fontSize: '28px',
            color: '#4D4D4D',
            fontFamily:'Source Han Sans CN'
          }],
        },
        {
          type: 'image',
          url: 'http://yaotiao-base.oss-cn-beijing.aliyuncs.com/data/upload/xcx/common/canvas-img/bottom-tag-img2.png',
          css: {
            bottom: '27px',
            left: '130px',
            width: '421px',
            height: '20px',
          },
        },
      ],
    });
  }
}
