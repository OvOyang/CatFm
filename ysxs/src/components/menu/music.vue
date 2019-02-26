<template>
    <div>
        <audio class="audioMusic" autoplay controls loop id="music" :src='this.$store.state.musicUrl'>

        </audio>
        <div>{{this.$store.state.play}}</div>
    </div>
</template>

<script>
    export default {
        name: "music",
        watch:{

        },
        methods:{
        }
    }
</script>

<style scoped>
.audioMusic{
    width: 107%;
    position: relative;
    left:-10px
}
</style>