<template>
    <div>
         <div class="recommend">
                <div class="recommendTop"><img style="height: 40px;width:40px;vertical-align: middle;" src="../../assets/images/书籍.png"> <span style="vertical-align: middle;font-size: 20px;font-weight: 800;margin-left: 5px">猜你喜欢</span> <span style="vertical-align: middle;font-size: 18px;position:relative;right:-187px;color: #0062cc" @click="changeId">换一批</span> </div>
                <div class="recommendBottom">


                    <router-link :to="'/menu/'+item.album.albumID" class="recommendBook" v-for="item in bookDetail">
                        <img :src="item.album.cover.urls[2].url" style="height: 120px;width: 100%;margin-bottom: 8px">
                        <div class="recommendName">{{item.album.name}}</div>
                    </router-link>


                </div>
         </div>
    </div>
</template>

<script>
    export default {
        name: "homeMain",
        data:function(){
            return {
                num:1,
                submitId:this.$store.state.homeid[0],
                bookDetail:[],
            }
        },
        created(){
            this.getBooks()
        },
        methods:{
            getBooks(){
                var id = this.submitId;
                this.$http.get('https://api.imjad.cn/qqfm/v1/?type=album&id='+id).then(result=>{
                    this.bookDetail=result.body.data.albumInfoList;
                })
            },
             changeId(){
                 this.num+=1;
                 if(this.num==10){
                     this.num=0
                 }
                 this.submitId = this.$store.state.homeid[this.num]
                 this.getBooks()
             }
        }
    }
</script>

<style scoped lang="less">
    .recommend{
        position: relative;
        height: 210px;
    }

    .recommendTop{
        position: relative;
        height: 40px;
    }

    .recommendBottom{
        position: relative;
        width: 100%;
        height:140px;
        margin-top: 8px;
        overflow-x: auto;
        display: flex;

    }

    @keyframes gun {
        0% {transform: translateX(0%)}
        100% {transform: translateX(-1000%)}
    }
    
    
    .recommendBook{
        padding-top: 10px;
        margin-right: 20px;
        animation: gun 30s linear infinite;
    }

    .recommendName{
        width: 90px;
        overflow:hidden;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        -webkit-text-overflow:ellipsis;
        -moz-text-overflow:ellipsis;
        white-space:nowrap;
        font-size: 12px;
        font-weight: 800;
    }
</style>