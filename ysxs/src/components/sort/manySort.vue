<template >
    <div class="main">
        <div class="all-sort" v-if="this.all[0]">
        <ul class="sort-left" id="sort">
            <a  href="javascript:void(0)">
                <li  v-for="(item,index) in all" :class="{active:num==index}" @click="changeLi(index)">{{item.name}}</li>
            </a>
        </ul>
        <div class="sort-right" id="sort-right">

            <div class="sort-right-inner" id="ysxs1" ref="ysxs1">
                <router-link  :to="this.all[0]?'/list/'+this.all[0].id:'/list'">
                    <p>有声小说</p>
                </router-link>
                <div class="sort-right-a" v-for="item in ysxs">
                    <router-link  tag="a" :to="'/list/'+item.id" class="sort-name" >{{item.name}}</router-link>
                </div>
            </div>



            <div class="sort-right-inner" id="zyyl1" >
                <router-link  :to="this.all[1]?'/list/'+this.all[1].id:'/list'">
                    <p>综艺娱乐</p>
                </router-link>
                <div class="sort-right-a" v-for="item in zyyl">
                    <router-link  tag="a" :to="'/list/'+item.id" class="sort-name" >{{item.name}}</router-link>
                </div>
            </div>


            <div class="sort-right-inner" id="qgsh1" >
                <router-link  :to="this.all[2]?'/list/'+this.all[2].id:'/list'">
                    <p>情感生活</p>
                </router-link>
                <div class="sort-right-a" v-for="item in qgsh">
                    <router-link  tag="a" :to="'/list/'+item.id" class="sort-name" >{{item.name}}</router-link>
                </div>
            </div>

            <div class="sort-right-inner" id="xsps1" >
                <router-link  :to="this.all[3]?'/list/'+this.all[3].id:'/list'">
                    <p>相声评书</p>
                </router-link>
                <div class="sort-right-a" v-for="item in xsps">
                    <router-link  tag="a" :to="'/list/'+item.id" class="sort-name" >{{item.name}}</router-link>
                </div>
            </div>


            <div class="sort-right-inner" id="gxdz1" >
                <router-link  :to="this.all[4]?'/list/'+this.all[4].id:'/list'">
                    <p>搞笑段子</p>
                </router-link>
                <div class="sort-right-a" v-for="item in gxdz">
                    <router-link  tag="a" :to="'/list/'+item.id" class="sort-name" >{{item.name}}</router-link>
                </div>
            </div>

            <div class="sort-right-inner" id="etzq1" >
                <router-link  :to="this.all[5]?'/list/'+this.all[5].id:'/list'">
                    <p>儿童专区</p>
                </router-link>
                <div class="sort-right-a" v-for="item in etzq">
                    <router-link  tag="a" :to="'/list/'+item.id" class="sort-name" >{{item.name}}</router-link>
                </div>
            </div>


            <div class="sort-right-inner" id="zsgh1" >
                <router-link  :to="this.all[6]?'/list/'+this.all[6].id:'/list'">
                    <p>知识干货</p>
                </router-link>
                <div class="sort-right-a" v-for="item in zsgh">
                    <router-link  tag="a" :to="'/list/'+item.id" class="sort-name" >{{item.name}}</router-link>
                </div>
            </div>


            <div class="sort-right-inner" id="yydt1" >
                <router-link  :to="this.all[7]?'/list/'+this.all[7].id:'/list'">
                    <p>音乐电台</p>
                </router-link>
                <div class="sort-right-a" v-for="item in yydt">
                    <router-link  tag="a" :to="'/list/'+item.id" class="sort-name" >{{item.name}}</router-link>
                </div>
            </div>


            <div class="sort-right-inner" id="lsrw1" >
                <router-link  :to="this.all[8]?'/list/'+this.all[8].id:'/list'">
                    <p>历史人文</p>
                </router-link>
                <div class="sort-right-a" v-for="item in lsrw">
                    <router-link  tag="a" :to="'/list/'+item.id" class="sort-name" >{{item.name}}</router-link>
                </div>
            </div>


            <div class="sort-right-inner" id="xwzx1" >
                <router-link  :to="this.all[9]?'/list/'+this.all[9].id:'/list'">
                    <p>新闻资讯</p>
                </router-link>
                <div class="sort-right-a" v-for="item in xwzx">
                    <router-link  tag="a" :to="'/list/'+item.id" class="sort-name" >{{item.name}}</router-link>
                </div>
            </div>
</div>
        </div>
    </div>
</template>

<script>
    export default {
        data:function(){
           return{
               num:0,
               ysxs:[],
               zyyl:[],
               qgsh:[],
               xsps:[],
               gxdz:[],
               etzq:[],
               zsgh:[],
               yydt:[],
               lsrw:[],
               xwzx:[],
               all:[]
           }
        },
        created(){
            this.getSortList();
        },
        methods:{
            getSortList(){
                this.$http.get('http://39.105.102.76:8888/getsort').then(result=>{
                    if (result.status=='200'){
                        this.ysxs = result.body[0].ysxs;
                        this.zyyl = result.body[0].zyyl;
                        this.qgsh = result.body[0].qgsh;
                        this.xsps = result.body[0].xsps;
                        this.gxdz = result.body[0].gxdz;
                        this.etzq = result.body[0].etzq;
                        this.zsgh = result.body[0].zsgh;
                        this.yydt = result.body[0].yydt;
                        this.lsrw = result.body[0].lsrw;
                        this.xwzx = result.body[0].xwzx;
                        this.all = result.body[0].all;
                    }

                })
            },
            changeLi(index){
                this.num=index;
             if(this.num==0){
                 $('#sort-right').animate({
                     scrollTop: $("#ysxs1").offset().top - $("#ysxs1").offset().top
                 }, 500);
             }
             else if(this.num==1){
                 $('#sort-right').animate({
                     scrollTop: $("#zyyl1").offset().top - $("#ysxs1").offset().top
                 }, 500);
             }
             else if(this.num==2){
                 $('#sort-right').animate({
                     scrollTop: $("#qgsh1").offset().top - $("#ysxs1").offset().top
                 }, 500);
             }
             else if(this.num==3){
                 $('#sort-right').animate({
                     scrollTop: $("#xsps1").offset().top - $("#ysxs1").offset().top
                 }, 500);
             }
             else if(this.num==4){
                 $('#sort-right').animate({
                     scrollTop: $("#gxdz1").offset().top - $("#ysxs1").offset().top
                 }, 500);
             }
             else if(this.num==5){
                 $('#sort-right').animate({
                     scrollTop: $("#etzq1").offset().top - $("#ysxs1").offset().top
                 }, 500);
             }
             else if(this.num==6){
                 $('#sort-right').animate({
                     scrollTop: $("#zsgh1").offset().top - $("#ysxs1").offset().top
                 }, 500);
             }
             else if(this.num==7){
                 $('#sort-right').animate({
                     scrollTop: $("#yydt1").offset().top - $("#ysxs1").offset().top
                 }, 500);
             }
             else if(this.num==8){
                 $('#sort-right').animate({
                     scrollTop: $("#lsrw1").offset().top - $("#ysxs1").offset().top
                 }, 500);
             }
             else  if(this.num==9){
                 $('#sort-right').animate({
                     scrollTop: $("#xwzx1").offset().top - $("#ysxs1").offset().top
                 }, 500);
             }

            }

        }
    }
</script>

<style lang="less" scoped>
.main{
    display: block;
    position: relative;
    height: 100%;
    background-image: url("../../assets/images/back1.png") ;
    background-repeat: no-repeat;
    background-size: 100%;
}
.all-sort{
position: relative;
    display: flex;
    flex-direction: row;
    height: 100%;
}
    .sort-left{
        overflow-Y: auto;
        height: 100%;
        width: 40vw;
        display: flex;
        flex-direction: column;
    }
.sort-left>a{
    flex: 1;
    font-size: 13px;
    text-align: center;
    line-height: 5;
}
.active{
    color:#CD8500;
}



//right


.sort-right{
    opacity:0.7;
    position: relative;
    height: 98%;
    flex: 1;
    background-color: white;
    display: flex;
    flex-direction:column;
    overflow-y: auto;
}

.sort-right-inner{
    margin-top: 3.5vh;
}

.sort-right-inner>a>p{
    font-family: FZShuTi;
    text-align: center;
    color:#CD8500;
    font-size: 30px;
    font-weight: bolder;
    margin-bottom: 2.5vh;
}


.sort-right-a{
    display: inline-block;
}


.sort-name{
    font-family: STXihei;
    font-weight: bolder;
    text-align: center;
    display:inline-block;
    color: black;
    height: 6vh;
    width: 29vw;
    font-size: 18px;
    line-height: 6vh;
}


</style>