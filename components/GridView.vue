<template>
        <component :is="isMobile ? 'div' : 'HorizontalScroll'" class="grid-wrapper" :class="sidebarClass">
    <div class="grid-container" ref="grid">
        <nuxt-link to="/work/ProjectExample">
            <div class="grid-element xv">
                <video autoplay muted loop><source src="~/assets/CAPAS/pedras.webm" /></video>
            </div>
        </nuxt-link>
        <div class="grid-element"><img src="~/assets/CAPAS/300X300_BB.jpg" /></div>
        <div class="grid-element">
            <video autoplay muted loop><source src="~/assets/CAPAS/chatpay.webm" /></video>
        </div>
        <div class="grid-element"><img src="~/assets/CAPAS/600X600_OB.jpg" /></div>
        <div class="grid-element"><img src="~/assets/CAPAS/300X300_HE.jpg" /></div>
        <div class="grid-element"><img src="~/assets/CAPAS/600X600_WINONA1.jpg" /></div>
        <div class="grid-element">
            <video autoplay muted loop><source src="~/assets/CAPAS/mb.webm" /></video>
        </div>
        <div class="grid-element"><img src="~/assets/CAPAS/300X600_PUBLICO.jpg" /></div>
        <div class="grid-element"><img src="~/assets/CAPAS/300X300_SMART.jpg" /></div>
        <div class="grid-element"><img src="~/assets/CAPAS/300X300_TOFA.jpg" /></div>
        <div class="grid-element"><img src="~/assets/CAPAS/300X600_CAO.jpg" /></div>
        <nuxt-link to="/work/reprogramar-a-manha">
            <div class="grid-element">
                <video autoplay muted loop><source src="~/assets/CAPAS/robot.webm" /></video>
            </div>
        </nuxt-link>
        <div class="grid-element xv"><img src="~/assets/CAPAS/600X300_SANDEMAN.jpg" /></div>
        <div class="grid-element"><img src="~/assets/CAPAS/600X600BE_BEAUTY.jpg" /></div>
    </div>
        </component>
</template>

<script>
import Vue from 'vue';
import HorizontalScroll from 'vue-horizontal-scroll'
import { mapMutations } from 'vuex'
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
        this.$store.commit("setSidebar", "");
        this.$emit("grid", this.$refs.grid); 
        this.mobile = window.screen.width <= 768;

    },
    methods: {
        ...mapMutations([ 'setSideBar' ])
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
.grid-container {
    @media (min-device-width: 769px) {
        flex-direction: column;
        height: 100vh;
        margin-left: 500px;
    }
    display: flex;
    flex-wrap: wrap;
    margin-left: 0;
    height: auto;
    flex-direction: row;
    .grid-element {
        @media (min-device-width: 769px) {
            width: 300px;
            height: calc(100vh / 3);
        }
        width: 30vw;
        height: calc(100vh / 3);

        &.xv {
            height: calc(200vh /3);
        }
        &.xh {
            width: 600px;
        }

        img, video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>