<template>
    <div class="menuList">
        <div class="menuEvery" v-if="$store.state.menuListchange"  v-for="(item,index) in dataEvery.everyName">
          <span style="font-size: 20px;color: #666">{{index+1}}</span>  <span  class="detailName">{{item.name}}</span> <span class="iconfont" style="position: absolute;right: 10px;font-size:25px"  :id="item.url"  @click="playMusic">&#xe665;</span>
        </div>
        <div class="menuDesc" v-if="!$store.state.menuListchange">
           <div style=" font-weight: 900;font-size: 30px;font-family: FZShuTi;">内容简介</div>
            <div style="margin-top: 20px;font-size: 18px;line-height:29px;font-weight: bold;">{{dataEvery.everyIntro}}</div>
            <div style="  font-weight: 900;font-size: 30px;margin-top:50px;font-family: FZShuTi;">相关推荐</div>
            <div style="margin-top: 20px;font-size: 18px;line-height:35px;font-weight: bold;">暂无相关</div>
        </div>
    </div>
</template>

<script>
    export default {
        data:function(){
            return{
            }
        },
        methods:{
          playMusic(e){
              this.$store.commit("setmusicUrl",e.target.id);
          }
        },
        name: "menuList",
        props:['dataEvery']
    }
</script>

<style scoped lang="less">
.menuList{
    position: relative;
    background-color: white;
    opacity: 0.7;
}
.menuEvery{
border-bottom: 1px solid #ccc;
    height: 6vh;
    line-height: 6vh;
    padding-left: 6px;

}
.menuDesc{
position: relative;
    height: 90vh;
    padding-top: 30px;
    padding-left: 6px;
    }


    .detailName{
        position: absolute;
        left:50px;
        font-size: 15px;
        overflow:hidden;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        -webkit-text-overflow:ellipsis;
        -moz-text-overflow:ellipsis;
        white-space:nowrap;
        width: 210px;
        font-family: FZShuTi;
        font-weight: 800;
    }
</style>