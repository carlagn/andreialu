<template>
    <component :is="isMobile ? 'div' : 'HorizontalScroll'" class="grid-wrapper" :class="sidebarClass">
        <div class="grid-container" ref="grid">
            <div class="grid-element empty"></div>
           
            <!-- Capa Pedras -->
            <nuxt-link to="/work/pedras">
                <div class="grid-element xv empty">
                    
                </div>
            
            </nuxt-link>
        
            <div class="grid-element empty">Hello :)</div>

            <nuxt-link to="/work/acordar-com-gosto">
            <div class="grid-element">
             <img src="~/assets/CAPAS/mcmuffin.png" />
             </div>
            </nuxt-link>

            <nuxt-link to="/work/winona">
                <div class="grid-element">
                    <img src="~/assets/CAPAS/winona_CAPA.png" />
                </div>
            </nuxt-link>


            <nuxt-link to="/work/reprogramar-a-manha">
                <div class="grid-element empty">Hello :)</div>
            </nuxt-link>


            <nuxt-link to="/work/mesas-para-todos-os-gostos">
                <div class="grid-element">
                    <img src="~/assets/CAPAS/mesas.png" />
                </div>
            </nuxt-link>


            <nuxt-link to="/work/amor-rafeiro">
                <div class="grid-element">
                    <img src="~/assets/CAPAS/AMOR_CAPA.png" />
                </div>
            </nuxt-link>


            <nuxt-link to="/work/o-segredo-das-relacoes">
                <div class="grid-element">
                    <img src="~/assets/CAPAS/CERAS.png" />
                </div>
            </nuxt-link>


            <nuxt-link to="/work/drive-code">
                <div class="grid-element">
                    <img src="~/assets/CAPAS/drive.png" />
                </div>
            </nuxt-link>


            <nuxt-link to="/work/desafio-da-poupanca">
            <div class="grid-element empty">Hello :)</div>
            </nuxt-link>


            <nuxt-link to="/work/have-a-drink">
            <div class="grid-element xv">
                <img src="~/assets/CAPAS/CAPA_SANDEMAN.jpg" />
            </div>
        </nuxt-link>


        <nuxt-link to="/work/um-mundo-sem-cem">
            <div class="grid-element">
                <img src="~/assets/CAPAS/pub.png" />
            </div>
        </nuxt-link>


        <nuxt-link to="/work/coisas-de-miudos">
            <div class="grid-element empty">Hello :)</div>
        </nuxt-link>

        <nuxt-link to="/work/conversa-de-chat">
            <div class="grid-element">
                <img src="~/assets/CAPAS/CAPA2.jpg" />
            </div>
        </nuxt-link>


        <nuxt-link to="/work/tofa">
            <div class="grid-element">
                <img src="~/assets/CAPAS/capa_tofa.jpg" />
            </div>
        </nuxt-link>


        <nuxt-link to="/work/smart">
            <div class="grid-element">
                <img src="~/assets/CAPAS/smarta_capa.jpg" />
            </div>
        </nuxt-link>


        <nuxt-link to="/work/mais-cabo-verde">
            <div class="grid-element">
                <img src="~/assets/CAPAS/unitel.png" />
            </div>
        </nuxt-link>



        <nuxt-link to="/work/seja-o-heroi">
        <div class="grid-element">
            <img src="~/assets/CAPAS/aspirina.png" />
        </div>
            </nuxt-link>






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
        this.setActivePage("work");
    },
    beforeDestroy() {
        this.setActivePage("");
    },
    methods: {
        ...mapMutations([ 'setSideBar', 'setActivePage' ]),
        setActivePage(str) {
            this.$store.commit("setActivePage", str)
        },
        getCover(projName) {
            if (this.isMobile){
                var image = `<img src="~/assets/CAPAS/${projName}.gif" />`;
                return image;
            }
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
                height: calc((100vh - 17px) * 2 /3);
            }
        }
        &.xh {
            width: 600px;
        }

        img, .grid-video {
            width: 100%;
            height: 100%;
            object-fit: cover;
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
        .grid-video {
            @media (min-device-width: 769px) {
                display: block;
            }
            display: none;
        }
        .grid-gif {
            @media (min-device-width: 769px) {
                display: none;
            }
            display: block;

        }
    }
}
</style>