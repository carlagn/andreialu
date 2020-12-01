<template>
        <HorizontalScroll>
    <div class="grid-container">
        <div class="grid-element"><img src="~/assets/1.png" /></div>
        <div class="grid-element"><img src="~/assets/2.png" /></div>
        <div class="grid-element"><img src="~/assets/3.png" /></div>
        <div class="grid-element"><img src="~/assets/4.png" /></div>
        <div class="grid-element"><img src="~/assets/7.png" /></div>
        <div class="grid-element"><img src="~/assets/8.png" /></div>
        <div class="grid-element"><img src="~/assets/3.png" /></div>
        <div class="grid-element"><img src="~/assets/4.png" /></div>
        <div class="grid-element"><img src="~/assets/5.png" /></div>
    </div>
        </HorizontalScroll>
</template>

<script>
import Vue from 'vue';
import HorizontalScroll from 'vue-horizontal-scroll'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'
export default Vue.extend({
    components: {
        HorizontalScroll
    }
    
})
</script>

<style lang="scss" scoped>
.grid-container {
    display: grid;
    grid-template-rows: repeat(3, calc(100vh / 3));
    grid-auto-flow: column;
    box-sizing: border-box;
    background: black;

    .grid-element {
        width: 300px;
        height: calc(100vh / 3);

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>