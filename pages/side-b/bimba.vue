<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">Carpets</h1>
                <h2 class="subtitle">& pets.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                
            
                <p>I make carpets.</p>
                <div>
                
                <Img :source="'carpet/IMG_4672.jpg'" />
                 <Img :source="'carpet/IMG_4676.jpg'" />

                 <p>My pets love my carpets.</p>
                
                </div>
            
                
            

                <p class="credits"><b>Lisbon:</b> Quarantimes.</p>
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
        title: 'Side-B - Carpets'
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
