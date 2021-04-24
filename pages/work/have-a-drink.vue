<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">Super Bock <br> Pingo Doce <br> Sandeman </h1>
                <h2 class="subtitle">Print.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                 <p class="credits">Print and outdoor campaigns</p>

                <p>Drinks on the house.</p>
               
               <div>
                <Img :source="'print/print-sb.png'" :zoom="true"/>
                <Img :source="'print/print-pd.png'" :zoom="true"/>
                <Img :source="'print/printc1a.png'" :zoom="true"/>
                <Img :source="'print/printc1.png'" :zoom="true"/>
                <Img :source="'print/printc1b.png'" :zoom="true"/>
             
                </div>
                <p class="credits"><b>BBDO</b> C: Andreia Luísa A.D: António Belchior, Hugo Carvalheiro C.D: Marco Pacheco, Hugo Carvalheiro</p>
            </div>
        </div>
        <Pagination  />
        <footer></footer>
    </div>
</template>
<script>
import Vue from 'vue';
import { mapMutations } from 'vuex'
import Pagination from '../../components/Pagination.vue'
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