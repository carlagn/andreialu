<template>
    <component :is="isMobile ? 'div' : 'HorizontalScroll'" class="grid-wrapper" :class="sidebarClass">
        <div class="grid-container" ref="grid">
            <div class="grid-element-empty"></div>
           
            <nuxt-link to="/side-a/pedras">
                <Cover :isMobile="isMobile" :source="'pedras.webm'" :animated="true" :mode="'portrait'" :alt="'pedras_still.png'"  />
            </nuxt-link>
        
            <div class="grid-element-empty"></div>

            <nuxt-link to="/side-a/o-segredo-das-relacoes">
                <Cover :isMobile="isMobile" :source="'CERAS.png'" />
            </nuxt-link>

            <nuxt-link to="/side-a/tofa">
                <Cover :isMobile="isMobile" :source="'capa_tofa.jpg'" />
            </nuxt-link>

            <div v-if="!isMobile" class="grid-big">
                <nuxt-link to="/side-a/reprogramar-a-manha">
                    <Cover
                        :isMobile="isMobile"
                        :source="'acordarcedo.webm'"
                        :animated="true"
                        :alt="'acordarcedo.gif'"
                        :mode="'big'"
                    />
                </nuxt-link>
                <div>
                    <nuxt-link to="/side-a/mesas-para-todos-os-gostos">
                        <Cover :isMobile="isMobile" :source="'mesas.png'" />
                    </nuxt-link>

                    <nuxt-link to="/side-a/smart">
                    <Cover :isMobile="isMobile" :source="'smarta_capa.jpg'" />
                    </nuxt-link>
                </div>
            </div>
            <nuxt-link v-if="isMobile" to="/side-a/reprogramar-a-manha">
                <Cover
                    :isMobile="isMobile"
                    :source="'robot.webm'"
                    :animated="true"
                    :alt="'robot.gif'"
                />
            </nuxt-link>
            <nuxt-link v-if="isMobile" to="/side-a/mesas-para-todos-os-gostos">
                <Cover :isMobile="isMobile" :source="'mesas.png'" />
            </nuxt-link>

            <nuxt-link v-if="isMobile" to="/side-a/smart">
                <Cover :isMobile="isMobile" :source="'smarta_capa.jpg'" />
            </nuxt-link>


            <nuxt-link to="/side-a/desafio-da-poupanca">
                <Cover :isMobile="isMobile" :source="'porcos.webm'" :animated="true" :alt="'porcos.gif'"  />
            </nuxt-link>


            <nuxt-link to="/side-a/print">
                <Cover :isMobile="isMobile" :source="'CAPA_SANDEMAN.jpg'" :mode="'portrait'" />
            </nuxt-link>

            <nuxt-link to="/side-a/conversa-de-chat">
                <Cover :isMobile="isMobile" :source="'CAPA2.jpg'" />
            </nuxt-link>


            <nuxt-link to="/side-a/coisas-de-miudos">
                <Cover :isMobile="isMobile" :source="'kidz.webm'" :animated="true" :alt="'kidz.gif'"  />
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
        this.setActivePage("side-a");
    },
    beforeDestroy() {
        this.setActivePage("");
    },
    methods: {
        ...mapMutations([ 'setSideBar', 'setActivePage' ]),
        setActivePage(str) {
            this.$store.commit("setActivePage", str)
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
        height: 100vh;
        padding-top: 0;
    }
    display: flex;
    padding-top: 300px;
    flex-wrap: wrap;
    margin-left: 0;
    height: auto;
    width: 100%;
    flex-direction: row;
}

.grid-element-empty {
    @media (min-device-width: 769px) {
        display: flex;
        width: calc((100vh - 17px) / 3);
        height: calc((100vh - 17px) / 3);
    }
    display: none;
    justify-content: center;
    align-items: center;
    font-family: 'Fraunces', serif;
    font-weight: lighter;
}

.grid-big {
    display: flex;
    flex-direction: column;
    > div {
        display: flex;
    }
}
</style>
