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
                
                <img class="media" src="~/assets/print/printc3.png" />
                <img class="media" src="~/assets/print/printc4.png" />
                <img class="media" src="~/assets/print/printc5.png" />
            
                </div>
                <p class="credits"><b>BBDO</b> C: Andreia Luísa A.D: António Belchior C.D: Marco Pacheco</p>
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