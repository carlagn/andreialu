<template>
    <component :is="isMobile ? 'div' : 'HorizontalScroll'" class="grid-wrapper" :class="sidebarClass">
        <div class="grid-container" ref="grid">
            <div class="grid-element empty"></div>
           
            <nuxt-link to="/work/pedras">
                <Cover :source="'pedras.webm'" :animated="true" :mode="'portrait'" :alt="'pedras_still.png'"  />
            </nuxt-link>
        
            <div class="grid-element empty">Hello :)</div>

            <nuxt-link to="/work/acordar-com-gosto">
                <Cover :source="'mcmuffin.png'" />
            </nuxt-link>

            <nuxt-link to="/work/winona">
                <Cover :source="'winona_CAPA.png'" />
            </nuxt-link>


            <nuxt-link to="/work/reprogramar-a-manha">
                <Cover :source="'robot.webm'" :animated="true" :alt="'robot.gif'"  />
            </nuxt-link>


            <nuxt-link to="/work/mesas-para-todos-os-gostos">
                <Cover :source="'mesas.png'" />
            </nuxt-link>


            <nuxt-link to="/work/amor-rafeiro">
                <Cover :source="'AMOR_CAPA.png'" />
            </nuxt-link>


            <nuxt-link to="/work/o-segredo-das-relacoes">
                <Cover :source="'CERAS.png'" />
            </nuxt-link>


            <nuxt-link to="/work/drive-code">
                <Cover :source="'drive.png'" />
            </nuxt-link>


            <nuxt-link to="/work/desafio-da-poupanca">
                <Cover :source="'porcos.webm'" :animated="true" :alt="'porcos.gif'"  />
            </nuxt-link>


            <nuxt-link to="/work/have-a-drink">
                <Cover :source="'CAPA_SANDEMAN.jpg'" :mode="'portrait'" />
            </nuxt-link>


            <nuxt-link to="/work/um-mundo-sem-cem">
                <Cover :source="'pub.png'" />
            </nuxt-link>


            <nuxt-link to="/work/coisas-de-miudos">
                <Cover :source="'kidz.webm'" :animated="true" :alt="'kidz.gif'"  />
            </nuxt-link>

            <nuxt-link to="/work/conversa-de-chat">
                <Cover :source="'CAPA2.jpg'" />
            </nuxt-link>


            <nuxt-link to="/work/tofa">
                <Cover :source="'capa_tofa.jpg'" />
            </nuxt-link>


            <nuxt-link to="/work/smart">
                <Cover :source="'smarta_capa.jpg'" />
            </nuxt-link>


            <nuxt-link to="/work/mais-cabo-verde">
                <Cover :source="'unitel.png'" />
            </nuxt-link>


            <nuxt-link to="/work/seja-o-heroi">
                <Cover :source="'aspirina.png'" />
            </nuxt-link>
        </div>
    </component>
</template>

<script>
import Vue from 'vue';
import HorizontalScroll from 'vue-horizontal-scroll'
import { mapMutations } from 'vuex'
import Cover from './Cover'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'
export default Vue.extend({
    components: {
        HorizontalScroll,
        Cover
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
        this.setActivePage("work");
    },
    beforeDestroy() {
        this.setActivePage("");
    },
    methods: {
        ...mapMutations([ 'setSideBar', 'setActivePage' ]),
        isLoaded(str) {
            return true
        },
        pushToLoaded(str) {
            return "h"
        },
        setActivePage(str) {
            this.$store.commit("setActivePage", str)
        },
        getCover(projName) {
            // if (this.isMobile){
            //     var image = `<img src="~/assets/CAPAS/${projName}.gif" />`;
            //     return image;
            // }
            const videourl = require(`~/assets/CAPAS/${projName}.webm`);
            var video = `<video class="grid-video" autoplay="true" muted="true" loop="true"><source src="${videourl}" /></video>`;
            return video;
        }
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
        height: calc(100vh - 17px);
        padding-top: 0;
    }
    display: flex;
    padding-top: 300px;
    flex-wrap: wrap;
    margin-left: 0;
    height: auto;
    flex-direction: row;
    .grid-element {
        @media (min-device-width: 769px) {
            width: calc((100vh - 17px) / 3);
            height: calc((100vh - 17px) / 3);
        }
        width: 50vw;
        height: 500px;
        &.xv {
            @media (min-device-width: 769px) {
                height: calc((100vh - 17px) * 2 /3) !important;
            }
        }
        &.empty {
            @media (min-device-width: 769px) {
                display: flex;
            }
            display: none;
            justify-content: center;
            align-items: center;
            font-family: 'Fraunces', serif;
            font-weight: lighter;
        }
    }
}
</style>