<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">Unitel</h1>
                <h2 class="subtitle">Mais Cabo Verde.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                 <p class="credits">Print campaign</p>

                <p>The National Olympic Committee of Cape Verde was present at the Rio 2016 Summer Olympic Games. <br> Unitel t+ proudly showed support to the athletes, wearing the colors of the flag.
                 </p>
               
               <div>
                <Img :source="'print/printb6.png'" :zoom="true" />
                <Img :source="'print/printb7.png'" :zoom="true" />
                <Img :source="'print/printb8.png'" :zoom="true" />
             
                </div>
                <p class="credits"><b>OGILVY</b> C: Andreia Luísa A.D: Alexandre Pina C.D: Jorge Coelho</p>
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