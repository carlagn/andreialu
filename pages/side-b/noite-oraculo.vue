<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">Brujería</h1>
                <h2 class="subtitle">Production.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                
                
                <p>I don’t believe in witches, pero que las hay, las hay.</p>

                <div>
                
                <Img :source="'oraculo/no_cartaz.jpg'" />
                <Img :source="'oraculo/IMG_4765.JPG'" />
                <Img :source="'oraculo/noite_oraculo.png'" />
                <Img :source="'oraculo/IMG_4764.JPG'" />
                <Img :source="'oraculo/IMG_4769.JPG'" />
                <Img :source="'oraculo/IMG_4766.JPG'" />
                <Img :source="'oraculo/IMG_4767.JPG'" />
                <Img :source="'oraculo/IMG_4768.JPG'" />
                <Img :source="'oraculo/IMG_4770.JPG'" />
                
                
            
                </div>
            
                
            

                <p class="credits"><b>Coven:</b> Putting together a pagan party with Carlos, Catarina and Leonor. Pictures by Xipipa.</p>
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
    head() {
      return {
        title: 'Side-B - Noite oráculo'
      }
    },
    mounted() {
        this.$store.commit("setSidebar", "open-grid");
    },
    methods: {
        ...mapMutations([ "setSideBar" ])
    }
})
</script>
