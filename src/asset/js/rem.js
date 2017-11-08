/**
 * Created by Administrator on 2017/11/8.
 * 此js用于css样式rem适配，默认设计稿宽度为750
 * 引用方式: import './asset/js/rem'
 * 父级引用: main.js
 */

(function (doc, win) {
  var deviceWidth = document.documentElement.clientWidth;
  if (deviceWidth > 750) deviceWidth = 750;
  document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
})(document, window);
