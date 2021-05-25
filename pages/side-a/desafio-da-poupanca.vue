<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">Novo Banco</h1>
                <h2 class="subtitle">Piggy & Ziggy <br> Desafio da Poupança.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                <p class="credits">Film campaign</p>

                <p>Piggy and Ziggy are the pigs that teach children how to save money. Besides naming the 2 little pigs, we made a Saving Challenge for the Junior Savings account where the pigs were the MC’s.</p>
               
                <div v-if="lang === 'en'" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://www.youtube.com/embed/0zBT8H_DilI" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="fullscreen" allowfullscreen></iframe></div>
                
                <p class="credits"><b>BBDO</b> C: Andreia Luísa A.D: António Belchior C.D: Marco Pacheco</p>
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