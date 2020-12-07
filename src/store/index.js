import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      author: "GuoYF",
      rightMenu: {
        status: "none",
        top: "0px",
        left: "0px",
        list: []
      }
    };
  },
  mutations: {
    updateRightMenuStatus(state, menuObj) {
      state.rightMenu.status = menuObj.status;
      state.rightMenu.top = menuObj.top;
      state.rightMenu.left = menuObj.left;
      state.rightMenu.list = menuObj.list;
    }
  }
});