<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">McDonald’s</h1>
                <h2 class="subtitle">Reprogramar a manhã.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                <p class="credits">Featured on LüRZER'S ARCHIVE & DAVID REVIEWS</p>
                <p class="lang"><b @click="setLang('en')">PT</b> / <b @click="setLang('pt')">EN</b>
                </p>
                
                <p>Remember “Groundhog Day”? We did it robots. Nothing like a McDonald’s breakfast to reboot your morning.</p>
                <div v-if="lang !== 'en'" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/266584215?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="fullscreen" allowfullscreen></iframe></div>
                <div v-else style="padding:56.25% 0 0 0;position:relative;">
                <iframe src="https://www.youtube.com/embed/kTtGROW0prk"  style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="fullscreen" allowfullscreen></iframe></div>

                
                <p>We had this breakfast served with some radios on the side. Sunny side up.</p>
                    <h3>Radios</h3>
                    <iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1188396859&color=%231c1c30&auto_play=false&hide_related=false&show_teaser=true">
                    </iframe>
                
                <p class="credits"><b>TBWA</b> C: Andreia Luísa A.D: António Belchior C.D: Marco Pacheco e Rui Silva Director: Paco Cruz</p>
            </div>
        </div>
        <Pagination  />
        <footer></footer>
    </div>
</template>
<script>
import Vue from 'vue';
import { mapMutations } from 'vuex'
import Pagination from '../../components/Pagination.vue';

export default Vue.extend({
    components: {
        Pagination
    },
    data() {
        return {
                    lang: "en"
                }
    },
    mounted() {
        this.$store.commit("setSidebar", "open-grid");
    },
    methods: {
        ...mapMutations([ "setSideBar" ]),
        setLang(str) {
            this.lang = str;
        }
    }
})
</script>