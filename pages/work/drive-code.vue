<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">Mercedes-Benz</h1>
                <h2 class="subtitle">Drive code.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                 <p class="credits">Print and outdoor campaign</p>

                <p>To celebrate Mercedes AMG's 50th anniversary we assigned a dress code to match each car. 
                <br> A drive code. 
                 </p>
               
               <div>

                <Img :source="'print/printc6.png'" />
                <Img :source="'print/printc7.png'" />
                <Img :source="'print/printc8.png'" />
                <Img :source="'print/printc9.png'" />
            
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