<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">Pingo Doce</h1>
                <h2 class="subtitle">Coisas de miúdos.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                <p class="credits">Film and radio campaigns</p>

                <h3>Ler leva-nos mais longe.</h3>
                <p>A child’s imagination has no limits. To show that, and to sell a collection of juvenile books, we decided to invite Fernanda Serrano to interview a group of interviewees with a very fertile imagination.</p>

               
                <div v-if="lang === 'en'" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://www.youtube.com/embed/3-_jkS2acOY" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="fullscreen" allowfullscreen></iframe></div>

                <p </p>

                <div v-if="lang === 'en'" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://www.youtube.com/embed/T5CL-0npVWg" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="fullscreen" allowfullscreen></iframe></div>

                <p </p>
                <h3>Bando do Bosque</h3>
                <p>Bando do Bosque is a bunch of plush friends that anyone who shops at Pingo Doce can take home. They also have an adventure book. And are adorable. We invited them to go to the radio and tell the children about this brand new collection.
                </p>

                <div>
                <img class="media" src="~/assets/print/bb.jpg" />
                </div>

                    <iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1188412042&color=%23272823&auto_play=false&hide_related=false&show_teaser=true">
                    </iframe>
                
                <p class="credits"><b>BBDO</b> C: Andreia Luísa C.D: Marco Pacheco</p>
            </div>
        </div>
        <Pagination  />
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