<template>
    <component :is="isMobile ? 'div' : 'HorizontalScroll'" class="grid-wrapper" :class="sidebarClass">
        <div class="grid-container" ref="grid">
            <div class="grid-element-empty"></div>
           
            <nuxt-link to="/side-b/skate" class="cover-link">
                <Cover :isMobile="isMobile" :source="'LONG.png'" :mode="'portrait'"/>
            </nuxt-link>
        
            <div class="grid-element-empty"></div>

            <nuxt-link to="/side-b/hello" class="cover-link">
                <Cover :isMobile="isMobile" :source="'HELLO.png'" />
            </nuxt-link>

            <nuxt-link to="/side-b/bimba" class="cover-link">
                <Cover :isMobile="isMobile" :source="'BAMBI.png'" />
            </nuxt-link>

            <div v-if="!isMobile" class="grid-big">
                <nuxt-link to="/side-b/fotopoema" class="cover-link">
                    <Cover
                        :isMobile="isMobile"
                        :source="'FOTOPOEMA.png'"
                        :mode="'big'"
                    />
                </nuxt-link>
                <div>
                    <nuxt-link to="/side-b/noite-oraculo" class="cover-link">
                        <Cover :isMobile="isMobile" :source="'NO.png'" />
                    </nuxt-link>

                    <nuxt-link to="/side-b/winona" class="cover-link">
                    <Cover :isMobile="isMobile" :source="'winona_CAPA.png'" />
                    </nuxt-link>
                </div>
            </div>

            <nuxt-link v-if="!isMobile" to="/side-b/fotopoema" class="cover-link">
                <Cover
                    :isMobile="isMobile"
                    :source="'FOTOPOEMA.png'"
                />
            </nuxt-link>

            <nuxt-link v-if="isMobile" to="/side-b/noite-oraculo" class="cover-link">
                <Cover :isMobile="isMobile" :source="'NO.png'" />
            </nuxt-link>

            <nuxt-link v-if="isMobile" to="/side-b/winona" class="cover-link">
                <Cover :isMobile="isMobile" :source="'winona_CAPA.png'" />
            </nuxt-link>


            <nuxt-link to="/side-b/horror-de-licor" class="cover-link">
                <Cover :isMobile="isMobile" :source="'HORROR.png'" />
            </nuxt-link>


            <nuxt-link to="/side-b/cowboy" class="cover-link">
                <Cover :isMobile="isMobile" :source="'LONG_COWBOY.png'" :mode="'portrait'" />
            </nuxt-link>

            <nuxt-link to="/side-b/neon" class="cover-link">
                <Cover :isMobile="isMobile" :source="'NEON.png'" />
            </nuxt-link>


            <nuxt-link to="/side-b/amor-rafeiro" class="cover-link">
                <Cover :isMobile="isMobile" :source="'AMOR_CAPA.png'"   />
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
        this.setActivePage("side-b");
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
