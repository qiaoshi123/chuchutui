/**
 * Created by Administrator on 2017/11/7.
 */
const changeShowFooterNav = 'changeShowFooterNav';
const changeCurFooterNavType = 'changeCurFooterNavType';
export default {
  //改变控制底部导航显示隐藏
  [changeShowFooterNav](state, flag) {
    state.showFooterNav = flag;
  },
  //控制底部导航选中态
  [changeCurFooterNavType](state,type){
    state.curFooterNavType = type;
  }
}
