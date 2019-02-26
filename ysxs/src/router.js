import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue"
import Mine from './views/Mine.vue'
import Sort from  './views/Sort.vue'
import List from  './views/List.vue'
import Menu from  './views/Menu.vue'
import Index from './views/Index.vue'
Vue.use(Router);

export default new Router({
  routes: [{
    path:"/",
    redirect:"/index"
  },
    {
      path:'/index',
      component:Index,
      meta:{
        title:"引导",
        sidetop:false,
        topNav:false,
        navshow:false
      }
    },
      {
    path:"/home",
    component:Home,
    meta:{
      title:"首页",
      backicon:false,
      sidetop:true,
      topNav:false,
      navshow:true
    }
  },
    {
      path:"/sort",
      component:Sort,
      meta:{
        title:"分类",
        backicon:false,
       two:true,
        topNav:true,
        navshow:true
      }
    },
    {
      path:"/mine",
      component:Mine,
      meta:{
        title:"我的",
        backicon:false,
       two:true,
        topNav:true,
        navshow:true
      }
    },
    {
      path:"/list/:id",
      component:List,
      meta:{
        title:"列表",
        backicon:true,
        side:true,
        topNav:true
      }
    },
    {
      path:"/menu/:id",
      component:Menu,
      meta:{
        title:"节目详情",
        backicon:true,
        none:true
      }
    }
  ],
  linkActiveClass:"mui-active"
});
