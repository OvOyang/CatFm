<template>

  <div id="app"    :class="{'app1':$route.meta.two,'app2':$route.meta.side,'app3':$route.meta.none,'app4':$route.meta.sidetop}">

    <a class="iconfont" style="font-size: 25px;position: absolute;top:11px;left:15px;z-index: 1000000;color: white;" v-if="$route.meta.backicon"  @click="changeListPlay">&#xe650;</a>

    <transition
            enter-active-class="animated zoomInRight"
    >
    <mt-header   v-if="$route.meta.topNav"  style="border-bottom-right-radius:2em;background-color: #CD853F;color: white;font-size: 20px" class="header1" fixed :title="$route.meta.title">
    </mt-header>
    </transition>

    <transition
            enter-active-class="animated zoomInRight"
    >
    <router-view style="height: 100%"></router-view>
    </transition>

    <nav class="mui-bar mui-bar-tab" style="z-index: 999" v-if="$route.meta.navshow">
      <router-link class="mui-tab-itemllb" to="/home">
        <span class="iconfont mui-icon">&#xe60e;</span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-itemllb" to="/sort">
        <span class="mui-icon iconfont">&#xe64f;</span>
        <span class="mui-tab-label">分类</span>
      </router-link>
      <router-link class="mui-tab-itemllb" to="/mine">
        <span class="mui-icon iconfont">&#xe605;</span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>

</template>

<script>
  export default {
    data:function(){
      return{

      }
    },
    methods:{
      changeListPlay(){
        window.history.back();

      }
    },
  }

</script>


<style lang="less">
  @font-face {
    font-family: 'iconfont';  /* project id 1007438 */
    src: url('//at.alicdn.com/t/font_1007438_bbddrj7pbv.eot');
    src: url('//at.alicdn.com/t/font_1007438_bbddrj7pbv.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1007438_bbddrj7pbv.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1007438_bbddrj7pbv.woff') format('woff'),
    url('//at.alicdn.com/t/font_1007438_bbddrj7pbv.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1007438_bbddrj7pbv.svg#iconfont') format("svg");
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}



  .app1{
    position: relative;
    padding-top: 40px;
    padding-bottom: 40px;
    overflow: hidden;
    height: 100%;
  }

  .app2{
    position: relative;
    padding-top: 40px;
    overflow: hidden;
    height: 100%;
  }

  .app3{
    position: relative;
    overflow: hidden;
    height: 100%;
  }

  .app4{
    position: relative;
    padding-bottom: 60px;
    overflow: hidden;
    height: 100%;
  }

  .mui-bar-tab .mui-tab-itemllb
  {
    display: table-cell;
    overflow: hidden;

    width: 1%;
    height: 50px;

    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;

    color: #929292;
  }
  .mui-bar-tab .mui-tab-itemllb.mui-active
  {
    color:#CD8500;
  }
  .mui-bar-tab .mui-tab-itemllb .mui-icon
  {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .mui-bar-tab .mui-tab-itemllb .mui-icon ~ .mui-tab-label
  {
    font-size: 11px;
     margin-top: 5px;
    display: block;
    overflow: hidden;

    text-overflow: ellipsis;
  }
  .mui-bar-tab .mui-tab-itemllb .mui-icon:active
  {
    background: none;
  }




</style>

