<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">Público</h1>
                <h2 class="subtitle">Um mundo sem cem.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                 <p class="credits">Print campaign</p>

                <p>There was this exclusive book collection of Público newspaper about 100 ideas that changed the world, by topic: art, photography and fashion. But what if there was a world without 100 ideas that changed it?
                 </p>
               
               <div>
                <Img :source="'print/printb1.png'" :zoom="true" />
                <Img :source="'print/printb2.png'" :zoom="true" />
                <Img :source="'print/printb3.png'" :zoom="true" />

                
    
            
                </div>
                <p class="credits"><b>Restart</b> C: Andreia Luísa A.D: Andreia Luísa C.D: Jorge Barrote </p>
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