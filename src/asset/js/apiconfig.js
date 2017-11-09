/**
 * Created by Administrator on 2017/11/9.
 * 此js用于配置 api接口，分为测试环境，正式环境,18环境
 */
const env = 'dev';

var pool = {
  'get/user/bind': {devBranch: 'dev-cctui', onlineBranch: 'ark-api'}
};
/**
 * 获取商城的api根域名
 * @param path 请求的接口
 */
const getNewShopBaseUrl = function(path){
  var devBranch = 'master', onlineBranch = 'ark-api';
  if(path && pool[path]){
    devBranch = pool[path].devBranch;
    onlineBranch = pool[path].onlineBranch;
  }
  if (env == 'dev') {
      var newShop = 'http://' + devBranch + '.dwxk-api.daweixinke.com:9998';

  } else if (env == 'ite') {
       newShop =  'https://ite-ark-api.daweixinke.com/';

  } else {
    newShop =  'https://' + onlineBranch + '.daweixinke.com/';
  }
  return newShop;
};

/**
 * 获取ads根域名
 *
 */
const getAdsBaseUrl = function () {
  if (env == 'dev') {
    adsUrl = 'http://hotfix-category-load-slow.ads-api.chuchuguwen.com/';
  } else if(location.host.indexOf('ite.') > -1){
    adsUrl = 'https://long-ads-api.chuchuguwen.com/';
  } else {
    adsUrl = 'https://ads-api.chuchuguwen.com/';
  }
  return adsUrl;
};
export default {getNewShopBaseUrl,getAdsBaseUrl}




