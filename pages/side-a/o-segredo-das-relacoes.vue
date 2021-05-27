<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">Atelier Encaixe</h1>
                <h2 class="subtitle">O segredo das relações duradouras.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                <p class="credits">Film campaign</p>

                <p>How to sell beeswax? It's tricky. <br>Unless you sell it to people who love furniture that lasts for life. For those, this is not wax. <br> This is the secret to long-lasting relationships.</p>
               
                <div v-if="lang === 'en'" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://www.youtube.com/embed/Ul3lvKBjjTM" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="fullscreen" allowfullscreen></iframe></div>

                
                <p class="credits"><b>Atelier Encaixe</b> C.D: Andreia Luísa Director: Leonor Bettencourt Loureiro</p>
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
    head() {
      return {
        title: 'Side-A - O segredo das relações'
      }
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
