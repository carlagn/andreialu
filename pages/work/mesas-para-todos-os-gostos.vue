<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">Pingo Doce</h1>
                <h2 class="subtitle">Mesas para todos os gostos.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                <p class="credits">Film campaign</p>

                <p>How many tables do you know? Pingo Doce knows them all. 
                 So it launched a new recipe book that suits all tables, great and small.</p>
               
                <div v-if="lang === 'en'" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://www.youtube.com/embed/1MhrkJoZK9s" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="fullscreen" allowfullscreen></iframe></div>
                
                <p class="credits"><b>BBDO</b> C: Andreia Luísa A.D: André Navarro C.D: Marco Pacheco, André Navarro</p>
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