<template>
    <div class="infoAll">
              <div class="infoMsg">
                   <div style="color: white;font-size: 19px">{{dataMessage.txtName}}</div>
                 <div style="margin-top: 8px"><span class="iconfont"   style="color: #F5F5F5;font-size: 10px">&#xe7ca;</span> <span style="color:#F5F5F5;font-size: 15px"> {{dataMessage.txtSort}}</span></div>
              </div>
              <div class="infoList"> <div  @click="orderMe" v-text="order?'取消订阅':'订阅'"  :class="order?'cancleOrder':'infoOrder'"></div>
              <div class="changeList"><span class="listSpan" @click="menuPlay" :style="{color:($store.state.menuListchange?'red':'black')}">播放列表</span>  <span class="listSpan" @click="menuDetail" :style="{color:(!$store.state.menuListchange?'red':'black')}" >详情介绍</span></div>
              </div>
                <img :src="dataMessage.txtImg" class="infoImg"/>
    </div>
</template>

<script>
    export default {
        name: "menuInfo",
       data:function(){
           return{
                order:false
           }
       },
        created(){

            if(this.$store.state.userData.like){
                if(this.$store.state.userData.like.indexOf(this.dataMessage.txtId)==-1){
                    this.order=false
                    //console.log(1)
                }
                else{
                    this.order=true
                    //console.log(2)
                }


            }


        },
       methods:{
          orderMe(){

              if(this.$store.state.denglu==true){

                  if(this.$store.state.userData.like.indexOf(this.dataMessage.txtId)==-1){
                      this.order=true;
                      var userData ={
                          _id:"",
                          likeid:"",
                      };
                        userData._id = this.$store.state.userData._id;
                        userData.likeid=this.dataMessage.txtId

                       this.$http.post('http://39.105.102.76:8888/order',userData).then(result=>{
                           if(result.status==200){
                               this.$toast({  message:"订阅成功~",duration: 1200, position:'bottom' });
                                 this.$store.commit('setUserData',result.body.user)
                           }

                       })
                  }
                  else{
                      this.order=false;

                      var userData ={
                          _id:"",
                          dislikeid:"",
                      };
                      userData._id = this.$store.state.userData._id;
                      userData.dislikeid=this.dataMessage.txtId

                      this.$http.post('http://39.105.102.76:8888/cancel',userData).then(result=>{
                          if(result.status==200){
                             // console.log(result.body)
                               this.$toast({  message:"取消订阅成功~",duration: 1200, position:'bottom' });
                              this.$store.commit('setUserData',result.body.user)
                          }

                      })

                  }

              }
              else{
                  this.$toast({  message: "登录才可以订阅哦！",duration: 1200, position:'bottom' });

              }


          },
          menuPlay(){
             this.$store.commit('menuListDoPlay')
          },
          menuDetail(){
             this.$store.commit('menuListDoDetail')
          }
       },
       props:['dataMessage']
    }
</script>

<style scoped lang="less">
.infoAll{
   height: 150px;
   position: relative;
   padding-top: 20px;
}
   .infoMsg{
      position: relative;
      height: 60px;
      padding-left:42%;
      padding-top:6px;
   }
   .infoList{
      position: relative;
      opacity: 0.7;
      background-color: white;
      height: 70px;
      border-top-left-radius:20px;
      border-top-right-radius:20px;
   }

   .infoImg{
      position: absolute;
      top:20px;
      left: 26px;
       border-radius: 10px;
   }

   .infoOrder{
      background-color: red;
      color:white;
      width: 90px;
      position: absolute;
      right: 20px;
      text-align: center;
      height: 25px;
      line-height: 25px;
      border-radius: 10px;
      top:12px;
   }

   .cancleOrder{
      background-color:gray;
      color:white;
      width: 90px;
      position: absolute;
      right: 20px;
      text-align: center;
      height: 25px;
      line-height: 25px;
      border-radius: 10px;
      top:12px;
   }


   .changeList{
      width: 100%;
      display: flex;
      position: absolute;
      bottom: 4px;
   }

   .listSpan{
      flex: 1;
      text-align: center;
      font-size: 14px;
   }

</style>