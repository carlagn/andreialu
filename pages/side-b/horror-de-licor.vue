<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">Um Horror</h1>
                <h2 class="subtitle">de Licor.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                
                <p>I like horror movies.</p>

                        <Img :source="'horror/FILMES.jpg'" />

                          <p>I make liqueurs.</p>
            

                <div>
                
        
                <Img :source="'horror/LICORES.png'" />

            
                
            
                </div>
            
                
            

                <p class="credits"><b>The source of horror:</b> I pick the fruit myself. Liqueurs and copy: Andreia Luísa, Design: Mariana Conduto, Illustrations: Cryptmuzz</p>
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
        title: 'Side-B - Horror de licor'
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
