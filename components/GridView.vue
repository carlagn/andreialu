<template>
        <HorizontalScroll>
    <div class="grid-container" ref="grid">
        <div class="grid-element"><img src="~/assets/1.png" /></div>
        <div class="grid-element"><img src="~/assets/2.png" /></div>
        <div class="grid-element xh"><img src="~/assets/5.png" /></div>
        <div class="grid-element"><img src="~/assets/4.png" /></div>
        <div class="grid-element"><img src="~/assets/7.png" /></div>
        <div class="grid-element xv"><img src="~/assets/7.png" /></div>
        <div class="grid-element"><img src="~/assets/8.png" /></div>
        <div class="grid-element"><img src="~/assets/3.png" /></div>
        <div class="grid-element xv xh"><img src="~/assets/2.png" /></div>
        <div class="grid-element"><img src="~/assets/4.png" /></div>
        <div class="grid-element xh"><img src="~/assets/3.png" /></div>
        <div class="grid-element xv"><img src="~/assets/1.png" /></div>
        <div class="grid-element"><img src="~/assets/4.png" /></div>
        <div class="grid-element"><img src="~/assets/5.png" /></div>
        <div class="grid-element"><img src="~/assets/3.png" /></div>
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
    },
    mounted() {
        this.$emit("grid", this.$refs.grid); 
    }
    
})
</script>

<style lang="scss" scoped>
.grid-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100vh;

    .grid-element {
        width: 300px;
        height: calc(100vh / 3);

        &.xv {
            height: calc(200vh / 3);
        }

        &.xh {
            width: 600px;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>