<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">Multiclient</h1>
                <h2 class="subtitle">Print.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                 <p class="credits">Print and outdoor campaigns</p>

                <p>Prints for drinks.</p>
               
                <Img :source="'print/printc1.png'" :zoom="true"/>
                <Img :source="'print/print-pd.png'" :zoom="true"/>
                <Img :source="'print/print-sb.png'" :zoom="true"/>
                

                <p>Prints for cars.</p>


                <Img :source="'print/printc6.png'" />
                <Img :source="'print/printc7.png'" />
                <Img :source="'print/printc8.png'" />
                <Img :source="'print/printc9.png'" />
            

                <p>Prints for Público.
                 </p>
               
                <Img :source="'print/printb1.png'" :zoom="true" />
                <Img :source="'print/printb2.png'" :zoom="true" />
                <Img :source="'print/printb3.png'" :zoom="true" />
            

                <p>Prints for the Olympics.
                 </p>
               
                <Img :source="'print/printb6.png'" :zoom="true" />
                <Img :source="'print/printb7.png'" :zoom="true" />
                <Img :source="'print/printb8.png'" :zoom="true" />
            

                <p class="credits"><b>BBDO & OGILVY </b> C: Andreia Luísa A.D: António Belchior, Hugo Carvalheiro, Andreia Luísa, Alexandre Pina C.D: Marco Pacheco, Hugo Carvalheiro, Jorge Barrote, Jorge Coelho </p>
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
    head() {
      return {
        title: 'Side-A - Multiclient'
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
