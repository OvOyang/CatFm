import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    musicUrl:'',
    menuListchange:true,
    denglu:false,
    homeid:[39092,1,39104,4,39087,39120,39126,39110,18,5],
    userData:{}
  },
  mutations: {
    menuListDoPlay(state){
      state.menuListchange=true;
    },
    menuListDoDetail(state){
      state.menuListchange=false;
    },
    dengluChange(state){
      state.denglu=true;
    },
    dengluExit(state){
      state.denglu=false
    },
    setUserData(state,data){
      this.state.userData=data;
    },
    setmusicUrl(state,data){
      state.musicUrl=data;
    }
  },
  actions: {}
});
