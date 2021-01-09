import {
  HTTP
} from '../util/http-p.js';

const app = getApp();
const key = app.globalData.key;
const urlCategory = `catalog?key=${key}&dtype=json`;


class BookModel extends HTTP {
  // http://apis.juhe.cn/goodbook/catalog?key=你申请的key&dtype=json
  // 获取分类页
  getCategory() {
    console.log('已执行~');
    return this.request({
      url: urlCategory,
      
    });
  }

  
  getBookList() {
    // 随机获取某一分类页列表id在242-258范围内
    const id = this._randomFrom(242,258);
    const urlList = `query?key=${key}&catalog_id=${id}&pn=0&rn=10`;
    return this.request({
      url: urlList,
    });
  }

  // 随机数范围
  _randomFrom(lowerValue, upperValue) {
    return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
  }
}

export {
  BookModel
}