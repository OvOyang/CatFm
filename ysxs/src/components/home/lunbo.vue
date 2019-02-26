<template>
    <div>
        <mt-swipe :auto="3000">
            <mt-swipe-item >
                <img src="../../assets/images/1.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item >
                <img src="../../assets/images/2.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item >
                <img src="../../assets/images/3.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item >
                <img src="../../assets/images/4.jpg" alt="">
            </mt-swipe-item>

        </mt-swipe>
    </div>

</template>

<script>
    export default {
        data:function(){
            return{
            }
        },
        name: "lunbo"
    }
</script>

<style scoped>
img{
    height: 100%;
    width: 100%;
}
</style>