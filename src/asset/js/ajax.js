/**
 * Created by Administrator on 2017/11/8.
 * 此js创建Promise对象,并且使用原生js发出请求
 * 引用方式: import Ajax from './asset/js/ajax'
 * 父级引用: ./config/server.js
 * @param type  [请求类型 'POST','GET',默认为'GET']
 * @param url   [请求地址,默认为'']
 * @param data  [参数,默认为'']
 * @param async [true异步;fasle同步]
 */
export default (type='GET', url='', data={}, async=true) => {
  return new Promise((resolve, reject) => { //定义一个promise
    type = type.toUpperCase();

    let requestObj;
    if (window.XMLHttpRequest) {
      requestObj = new XMLHttpRequest();
    } else {
      requestObj = new ActiveXObject;
    }

    if (type == 'GET') {
      let dataStr = ''; //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&';
      })
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      url = url + '?' + dataStr;
      requestObj.open(type, url, async);
      requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      requestObj.send();
    }else if (type == 'POST') {
      requestObj.open(type, url, async);
      requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      requestObj.send(JSON.stringify(data));
    }else {
      reject('error type');
    }

    requestObj.onreadystatechange = () => {
      if (requestObj.readyState == 4) {
        if (requestObj.status == 200) {
          let obj = requestObj.response
          if (typeof obj !== 'object') {
            obj = JSON.parse(obj);
          }
          resolve(obj);
        }else {
          reject(requestObj);
        }
      }
    }
  })
}
