<template>
    <div>
    <router-link tag="div" class="ani" to="/home">
        <p style="font-size:40px;color: white;margin-top: 150px;margin-left: 50px;text-shadow: 5px 5px 5px darkred">猫耳朵Fm~</p>
    </router-link>
    </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style >
  .ani{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity:0.8;
    -webkit-animation-name: "loops";
    -webkit-animation-duration: 20s;
    -webkit-animation-iteration-count: infinite;}


  @-webkit-keyframes loops{

    0%{background:url("../assets/images/one.jpg")}
    25%{background:url("../assets/images/two.jpg")}
    50%{background:url("../assets/images/three.jpg")}
    75%{background:url("../assets/images/four.jpg")}
    100%{background:url("../assets/images/one.jpg")}
  }

</style>