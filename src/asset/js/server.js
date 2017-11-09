/**
 * Created by Administrator on 2017/11/8.
 * 此js用于封装项目中的一些请求，例如 商城、ADS、IM、JAVA
 *
 *
 */
import Ajax from './ajax'
import apiConfig from  './apiconfig';


/**
 * 请求
 */
const newShopApi = function (data,path,success,fail,method) {
  var baseUrl = apiConfig.getNewShopBaseUrl(path);








};

const setCommonParams = function () {
  var client,
    sendData = {},
    clientW = document.documentElement.clientWidth,
    clientH = document.documentElement.clientHeight;

  var userInfo = localStorage.getItem('wx_ccj_userInfo'),
    userId = userInfo ? JSON.parse(userInfo).userID : 0;

  if(IsChuchujieAPP()){
    if (ccj.utils.browser.versions.ios) {
      client = 'ios';
    }

    if (ccj.utils.browser.versions.android) {
      client = 'android';
    }
  }else{
    client = 'h5';
  }

  var commonParams = {
    ts:$.now(),
    si:'h5',
    di:'h5',
    cv:'h5',
    os:client,
    ov:'h5',
    nt:'h5',
    vn: '1.0',
    sc:clientH+'*'+clientW,
    ch:'h5',
    pn:'h5',
    im:'h5',
    ge:'-1',
    pid:'',
    uid: userId,
    tk: token,
  };

};


export default {newShopApi,}
