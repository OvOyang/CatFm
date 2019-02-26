<template>
    <div class="txtSort">
        <div class="sort">
           <router-link class="sort-inner" to="list/39092">
               <img src="../../assets/images/大象.png">
               <div class="bottomTxt">有声小说</div>
           </router-link>
           <router-link class="sort-inner" to="list/1">
               <img src="../../assets/images/牛.png">
               <div class="bottomTxt">综艺娱乐</div>
           </router-link>
           <router-link class="sort-inner" to="list/39104">
               <img src="../../assets/images/狐狸.png">
               <div class="bottomTxt">情感生活</div>
           </router-link>
           <router-link class="sort-inner" to="list/4">
               <img src="../../assets/images/狮子.png">
               <div class="bottomTxt">相声评书</div>
           </router-link>
           <router-link class="sort-inner" to="list/39087">
               <img src="../../assets/images/猪.png">
               <div class="bottomTxt">搞笑段子</div>
           </router-link>

        </div>
        <div class="sort">
            <router-link class="sort-inner" to="list/39120">
                <img src="../../assets/images/猴子.png">
                <div class="bottomTxt">儿童专区</div>
            </router-link>
            <router-link class="sort-inner" to="list/39126">
                <img src="../../assets/images/老鼠.png">
                <div class="bottomTxt">知识干货</div>
            </router-link>
            <router-link class="sort-inner" to="list/39110">
                <img src="../../assets/images/考拉.png">
                <div class="bottomTxt">音乐电台</div>
            </router-link>
            <router-link class="sort-inner" to="list/18">
                <img src="../../assets/images/长颈鹿.png">
                <div class="bottomTxt">历史人文</div>
            </router-link>
            <router-link class="sort-inner" to="list/5">
                <img src="../../assets/images/马.png">
                <div class="bottomTxt">新闻资讯</div>
            </router-link>


        </div>
    </div>
</template>

<script>
    export default {
        name: "sortTxt"
    }
</script>

<style scoped>
.txtSort{
    display: flex;
    flex-direction: column;
}
    .sort{
        flex: 1;
        display: flex;
    }

    .sort-inner{
        flex: 1;
    }
    img{
        height: 55%;
        width: 60%;
        position: relative;
        left: 12px;
    }
.bottomTxt{
        font-size: 12px;
    text-align: center;
    }
</style>