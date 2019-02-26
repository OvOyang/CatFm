<template >
    <div class="menuBack" >
        <div class="menuMain">
        <menuInfo class="menuInfo" :dataMessage="message" v-if="message.txtSort"></menuInfo>
        <menuList class="menuList" v-if="message.txtSort" :dataEvery="every"></menuList>
        </div>
        <music class="menuMusic" v-if="message.txtSort"></music>
    </div>
</template>

<script>
    import menuInfo from '../components/menu/menuInfo.vue'
    import menuList from '../components/menu/menuList.vue'
    import music from '../components/menu/music.vue'
    export default {
        data:function(){
            return{
                menu:[],
                detail:[],
                message:{txtImg:'',txtName:'',txtSort:'',txtId:''},
                every:{everyName:[],everyIntro:""},
                txtMusic:{musicAddress:[]}
            }
        },
        name: "Menu",
        created(){
            this.getMenu();
        },
        methods:{
            getMenu(){
                var id = this.$route.params.id;
                this.$http.get('https://api.imjad.cn/qqfm/v1/?type=show&id='+id).then(result=>{
                    this.menu=result.body;
                    this.every.everyId=this.menu
                    var idList=''
                    for(let i=0;i<20;i++){
                        idList+= this.menu[i]+','
                    }
                    this.$http.get('https://api.imjad.cn/qqfm/v1/?type=skip_show&id='+id+'&shows='+idList).then(result=>{
                         // console.log(result.body.data.showList)
                        this.detail=result.body.data.showList;
                        for(let i in this.detail){
                             // console.log(i);
                               // console.log(this.detail[i])
                            this.message.txtImg=this.detail[i].album.cover.urls[3].url;
                            this.message.txtName=this.detail[i].album.name;
                            this.message.txtSort=this.detail[i].album.categoryName;
                            this.message.txtId=this.detail[i].album.albumID;
                             this.every.everyIntro=this.detail[i].album.desc
                            var obj={name:"",url:""};
                             obj.name=this.detail[i].show.name;
                             obj.url=this.detail[i].show.audioURL.urls[1].url;
                             this.every.everyName.push(obj)
                        }
                         // console.log(this.every.everyName)
                    })

                });


            },

        },
        components:{
            menuInfo,
            menuList,
            music
        }
    }
</script>

<style scoped lang="less">
    .menuBack{
        background-image: url("../assets/images/smog.jpg");
        background-size:150%;
        opacity: 0.8;
        background-position: right;
        position: relative;

    }

    .menuMain{
        width: 100%;
        position: absolute;
        bottom: 0;
        height: 100%;
        overflow-y: auto;
        padding-top: 30px;
        padding-bottom: 35px;
    }
    .menuInfo{
        position: relative;

    }
    .menuList{
        position: relative;
    }
    .menuMusic{
        position: fixed;
        bottom:0;
        height: 38px;
        width: 100%;
    }
</style>