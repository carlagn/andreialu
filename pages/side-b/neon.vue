<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">Neon</h1>
                <h2 class="subtitle">Photography.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                
            


                <div>

                       <p>I like neon lights.</p>
                
                <Img :source="'neon/IMG_4749.JPG'" />
                <Img :source="'neon/IMG_4750.JPG'" />
                <Img :source="'neon/IMG_4748.JPG'" />
                <Img :source="'neon/IMG_4747.JPG'" />
                <Img :source="'neon/IMG_4746.JPG'" />
                <Img :source="'neon/IMG_4745.JPG'" />
                <Img :source="'neon/IMG_4744.JPG'" />
               
                
                </div>
            
                
            

                <p class="credits"><b>Austin:</b> by night.</p>
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
        title: 'Side-B - Neon'
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
