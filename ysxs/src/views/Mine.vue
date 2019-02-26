<template>
    <div>
        <transition
                enter-active-class="animated bounceInLeft"
        >
        <div class="nodeng" v-if="!this.$store.state.denglu">
            <p>你咋还没有登录呢(￣Д￣)ﾉ</p>
            <div class="btn">  <span style="background-color: black;color: white;margin-left: 65px" @click="tozhuce">注册</span>  <span style="margin-left: 10px;background-color: white;color: black" @click="todenglu">登录</span>     </div>
        </div>
        </transition>

        <transition
                enter-active-class="animated bounceInLeft"
        >
        <div class="deng" v-if="this.$store.state.denglu">


            <div class="mui-card">
                <div class="mui-card-content" style="padding-top: 8px;padding-left: 8px;margin-bottom: 8px;display: flex">
                    <img src="../assets/images/cat.jpg" style="height: 100px;width: 100px;border-radius: 50%;border: 4px solid black">
                      <div>
                          <p style="color:black;font-size: 30px;margin-left: 10px;font-weight: 600;margin-top: 9px">{{this.$store.state.userData.name}}</p>
                          <p style="margin-left: 10px;font-size: 16px;margin-top: 25px">欢迎来到猫耳朵Fm ♪( ´▽｀)</p>

                      </div>
                </div>

                <div class="mui-card-content">  <ul class="mui-table-view">
                    <li class="mui-table-view-cell mui-collapse">
                        <a class="mui-navigate-right" href="#" style="font-weight: 600">订阅的内容在这里</a>
                        <div class="mui-collapse-content" v-for="item in likeBooks">
                            <router-link  :to="'/menu/'+item.albumID" style="color:#668B8B">{{item.name}}</router-link>   <span :id="item.albumID" style="position:absolute;right:0;" class="iconfont" @click="docancel">&#xeeef;</span>
                        </div>
                    </li>
                </ul></div>
                <div class="mui-card-footer">
                    <div style="color:#668B8B;right: 20px;position: absolute" @click="exit">退出登录</div>
                </div>
            </div>



        </div>

        </transition>

        <transition
                enter-active-class="animated bounceInLeft"
        >
<div class="zhuce" v-if="this.zcshow" >

    <form class="mui-input-group">
        <div class="mui-input-row">
            <label>用户名</label>
            <input type="text" class="mui-input-clear "  placeholder="请输入用户名" v-model="zcformData.username">
        </div>
        <div class="mui-input-row">
            <label>密码</label>
            <input type="password" class="mui-input-password "  placeholder="请输入密码" v-model="zcformData.userpassword">
        </div>
        <div class="mui-button-row">
            <button type="button" style="background-color: black;color: white;" @click="zhuce" >注册</button>
        </div>
    </form>

</div>



        <div class="denglu" v-if="this.dlshow">

            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>用户名</label>
                    <input type="text" class="mui-input-clear " placeholder="请输入用户名" v-model="dlformData.username">
                </div>
                <div class="mui-input-row">
                    <label>密码</label>
                    <input type="password" class="mui-input-password " placeholder="请输入密码" v-model="dlformData.userpassword">
                </div>
                <div class="mui-button-row">
                    <button type="button" style="background-color: white;color: black;border: 2px solid black" @click="denglu" >登录</button>
                </div>
            </form>

        </div>
        </transition>



    </div>
</template>

<script>
    import 'mui/js/mui.min.js'
    export default {
        name: "Mine",
        data:function(){
            return{
                zcshow:false,
            dlshow:false,
                zcformData:{
                    username:"",
                    userpassword:""
                },
                dlformData:{
                    username:"",
                    userpassword:""
                },
                likeBooks:[]
            }
        },
        created(){
            this.getLike();
        },
        methods:{

            docancel(event){
                var userData ={
                    _id:"",
                    dislikeid:"",
                };
                userData._id = this.$store.state.userData._id;
                userData.dislikeid=event.target.id
                this.$http.post('http://39.105.102.76:8888/cancel',userData).then(result=>{
                    if(result.status==200){
                        //console.log(result.body)
                        this.$toast({  message:"取消订阅成功~",duration: 1200, position:'bottom' });
                        this.$store.commit('setUserData',result.body.user)
                        this.likeBooks=[];
                        this.getLike()
                    }

                })
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
                  //  console.log(this.likeBooks)
                }

            },


            exit(){
              this.$store.commit('dengluExit')
            },
            tozhuce(){
                this.dlshow=false
                this.zcshow=true;
                this.dlformData={ username:"",
                    userpassword:""}
            },
            todenglu(){
                this.zcshow=false;
                this.dlshow=true
                this.zcformData={ username:"",
                    userpassword:""}
            },

            zhuce(event){
                event.preventDefault();
                let formData = this.zcformData;

                if(formData.username==""){
                    this.$toast({  message: "用户名怎么可以不写！",duration: 1200, position:'bottom' });
                }
                else if(formData.userpassword==""){
                    this.$toast({  message: "密码怎么可以不写！",duration: 1200, position:'bottom' });
                }
                else{
                    this.$http.post('http://39.105.102.76:8888/zhuce',formData).then(result=>{
                        if(result.status==200&&result.body.do=="success"){
                            this.$toast({ message: result.body.tip,duration: 1200, position:'bottom' });
                            this.zcshow=false;
                            this.dlshow=true;
                            this.zcformData={ username:"",
                                userpassword:""}
                        }
                        else if(result.status==200&&result.body.do=='fail'){
                            this.$toast({ message: result.body.tip,duration: 1200, position:'bottom' });
                            this.zcformData={ username:"",
                                userpassword:""}
                        }
                    })
                }




            },
            denglu(event){
                event.preventDefault();
                let formData = this.dlformData;
                if(formData.username==""){
                    this.$toast({ message: "用户名怎么可以不写！",duration: 1200, position:'bottom' });
                }
                else if(formData.userpassword==""){
                    this.$toast({ message: "密码怎么可以不写！",duration: 1200, position:'bottom' });
                }
                else {
                    this.$http.post('http://39.105.102.76:8888/denglu',formData).then(result=>{
                        // console.log(result.body)
                        if(result.status==200&&result.body.do=="success"){
                            this.$toast({  message:result.body.tip ,duration: 1200, position:'bottom' });
                            this.$store.commit("dengluChange");
                            this.dlshow=false;
                            this.$store.commit('setUserData',result.body.user);
                            this.likeBooks=[]
                            this.getLike()
                        }
                        else if(result.status==200&&result.body.do=='fail'){
                            this.$toast({  message:result.body.tip,duration: 1200, position:'bottom' });
                            this.dlformData={ username:"",
                                userpassword:""}
                        }

                    })
                }
            }
        }
    }
</script>

<style scoped lang="less">

.btn>span{
    display: inline-block;
    height:30px;
    width: 100px;
    line-height: 30px;
    border-radius: 2em;
    text-align: center;
    border: 2px solid black;
}

.nodeng{
    position: relative;
}
.btn{
    margin-top: 25px;
}

.nodeng p{
        margin-top: 20px;
        text-align: center;
        font-size: 18px;
        font-weight: 700;
        color: crimson;
    }

    .zhuce,.denglu{
        margin-top:30px;
    }

</style>