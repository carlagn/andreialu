<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">McDonald’s</h1>
                <h2 class="subtitle">Acordar com gosto.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                 <p class="credits">Print and outdoor campaign</p>

                <p>Wake up with the McDonald's breakfast, a breakfast as fresh as you in the morning. <br> If you're a morning person.
                 </p>
               
               <div>
                
                <Img :source="'print/printc3.png'" />
                <Img :source="'print/printc4.png'" />
                <Img :source="'print/printc5.png'" />
            
                </div>
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
import Img from '../../components/Img.vue';

export default Vue.extend({
    components: {
        Pagination,
        Img
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