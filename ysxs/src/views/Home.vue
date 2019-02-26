<template>
   <div class="homeAll"   >
       <lunbo class="lunbo"/>
        <sortTxt class="sortTxt"/>
        <homeMain class="homeMain" />
       <div class="homeBottom">
           <div ><img style="height: 40px;width:40px;vertical-align: middle;" src="../assets/images/书籍.png"> <span style="vertical-align: middle;font-size: 20px;font-weight: 800;margin-left: 5px">我的收藏</span>
           </div>

           <div v-if="!$store.state.denglu">
               <p class="denglutip">温馨提示：请先登录 (●°u°●)​ </p>
               <router-link tag="div" to="/mine" class="todenglu">点我去登录</router-link>
           </div>

           <div v-if="$store.state.denglu" style="margin-top: 20px;padding-left: 16px">
               <div v-for="item in likeBooks" style="display:inline-block;height: 250px;width:50%;">
                      <router-link  :to="'/menu/'+item.albumID"  tag="div" style="height: 190px;width: 160px"><img :src="item.cover.urls[2].url" style="height: 100%;width: 100%;border-radius: 31%;border: 5px solid #ccc"></router-link>
                   <p class="likebookname">{{item.name}}</p>
                  <p class="likebookdesc">{{item.categoryName}}</p>


               </div>
           </div>
       </div>
       </div>

</template>

<script>
    import lunbo from '../components/home/lunbo.vue'
    import sortTxt from '../components/home/sortTxt.vue'
    import homeMain from '../components/home/homeMain.vue'
    export default {
        name: "Home",
        data:function(){
            return{
                likeBooks:[],
                showshow:false
            }
        },
        created(){
            this.getLike();
        },
        components:{
            lunbo,
            sortTxt,
            homeMain,
        },
        methods:{
            comeon(){
                this.showshow=true
            },

            getLike(){
                if(this.$store.state.userData.like){
                    for(let i=0;i<this.$store.state.userData.like.length;i++){
                        this.$http.get('https://api.imjad.cn/qqfm/v1/?type=show&id='+this.$store.state.userData.like[i]).then(result=>{
                            this.$http.get('https://api.imjad.cn/qqfm/v1/?type=skip_show&id='+this.$store.state.userData.like[i]+'&shows='+result.body[0]).then(result=>{
                                var detail=result.body.data.showList;
                                for(let i in detail){
                                    this.likeBooks.push(detail[i].album)
                                }
                            })
                        })
                    }
                    //console.log(this.likeBooks)
                }

            }
        }
    }
</script>

<style scoped >
    .homeAll{
        overflow-y:auto;
    }
.lunbo{
    width: 100%;
    height: 130px;
}

    .sortTxt{
        margin-top: 15px;
        width: 100%;
        height: 150px;
    }
    .homeMain{
        position: relative;
        margin-top: 10px;
    }
   .homeBottom{
       width: 100%;
   }

    .denglutip{
        margin-top: 20px;
        text-align: center;
        font-size: 18px;
        font-weight: 700;
        color:crimson;

    }

    .todenglu{
        background-color: black;
        color: white;
       text-align: center;
        height:30px;
        width: 100px;
        line-height: 30px;
        margin: 10px auto;
        border-radius: 2em;
    }

    .likebookname{
        font-weight: 700;
        padding-left: 10px;
        margin-top: 6px;
        color: black;
        font-size: 16px;
        width: 120px;
        overflow:hidden;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        -webkit-text-overflow:ellipsis;
        -moz-text-overflow:ellipsis;
        white-space:nowrap;
    }

    .likebookdesc{
        padding-left: 10px;
        margin-top: 6px;
        font-size: 12px;
    }


</style>

