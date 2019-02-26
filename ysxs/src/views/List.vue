<template>
    <div class="sort-main" >
        <router-link :to="'/menu/'+item.album.albumID" class="sort-detail" v-for=" item in Listdata">
            <img style="height:20vh;width:20vh;border-radius:5px" :src='item.album.cover.urls[2].url'>
            <i class="iconfont" style="position:absolute;bottom:0;left:0;font-size:30px;color:white">&#xe665;</i>
            <div class="detail-right">
                <div class="right-top"><i class="iconfont" style="font-size:40px;">&#xe60e;</i><span class="detail-name">{{item.album.name}}</span></div>
                <div class="right-center" >{{item.album.displayText}}</div>
                <div class="right-bottom"><span>{{item.album.score.toFixed(1)}}分</span><span>|</span><span>{{item.album.owner.nickname}}</span></div>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        data:function(){
          return{
              Listdata:[]
          }
        },
        name: "List",
        created(){
            this.getList();
        },
        methods:{
            getList(){
              var id = this.$route.params.id;
                this.$http.get('https://api.imjad.cn/qqfm/v1/?type=album&id='+id).then(result=>{
                    this.Listdata=result.body.data.albumInfoList
                })
            }
        }
    }
</script>

<style scoped lang="less">
.sort-main{
    z-index: 99999;
}
.sort-main{
    width: 100vw;
    height: 87vh;
    position: relative;
    overflow-y: auto;
}



.sort-title{
    height: 8vh;
    position: relative;
}

.sort-title>i{
    color: black;
    font-size: 20px;
    text-align: center;
    line-height: 8vh;
    position: absolute
}

.sort-search{
    flex: 1;
    background-color: white
}


.sort-detail{
    margin-top:20px;
    width: 100vw;
    height: 20vh;
    display: flex;
    position: relative;
}

.detail-right{
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 2vw;
    height:100%;
}

.right-top{
    height:35%;
}
.right-bottom>span{
    color:#708090;
    margin-right:2vw
}

.detail-name{
    font-size:20px;
    font-weight:700;
    margin-left:1vw;
    width: 43vw;
    display: inline-block;
    overflow:hidden;
    text-overflow:ellipsis;
    -o-text-overflow:ellipsis;
    -webkit-text-overflow:ellipsis;
    -moz-text-overflow:ellipsis;
    white-space:nowrap;
}

.right-center{
    height:50%;
    color:#708090;
    line-height: 1.3;

}

.right-bottom{
    height:15%;
}
</style>