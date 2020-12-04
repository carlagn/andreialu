<template>
        <component :is="isMobile ? 'div' : 'HorizontalScroll'" class="grid-wrapper" :class="sidebarClass">
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
        </component>
</template>

<script>
import Vue from 'vue';
import HorizontalScroll from 'vue-horizontal-scroll'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'
export default Vue.extend({
    components: {
        HorizontalScroll
    },
    data() {
        return {
            mobile: false
        }
    },
    mounted() {
        this.$emit("grid", this.$refs.grid); 
        this.mobile = window.screen.width <= 768;

    },
    computed: {
        sidebarClass () {
            return this.$store.state.sidebar;
        },
        isMobile() {
            return this.mobile
        }
    }
})
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
    .grid-container {
        flex-direction: column;
        height: 100vh;
        margin-left: 500px;

        .grid-element {
            width: 300px;
            height: calc(100vh / 3);

            &.xv {
                height: calc(200vh / 3);
            }

            &.xh {
                width: 600px;
            }
        }
    }
}
.grid-container {
    display: flex;
    flex-wrap: wrap;
    margin-left: 0;
    height: auto;
    flex-direction: row;
    .grid-element {
        width: 50%;
        height: 500px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &.xv, &.xh {
            width: 50%;
            height: 500px;
        }
    }
}
</style>