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

                <p>Press campaign for an exclusive book collection of Público newspaper, one of the most influential daily newspapers in Portugal. Each book covered one of 6 topics: design, photography, fashion, cinema, architecture and art. Inside each book, one could read about 100 ideas that changed the world, by topic.

                 <br> And the insight was: what if there was a world without 100 ideas that changed it?
                 </p>
               
               <div>
                <img class="media" src="~/assets/print/printb1.png" />
                <img class="media" src="~/assets/print/printb2.png" />
                <img class="media" src="~/assets/print/printb3.png" />

                
    
            
                </div>
                <p class="credits"><b>Restart</b> C: Andreia Luísa A.D: Andreia Luísa C.D: Jorge Barrote </p>
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