<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">Sk8</h1>
                <h2 class="subtitle">Photography.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                
                
                <p>I wish I was a skater.</p>

                <div>
                
                <Img :source="'SKATE/IMG_4761.JPG'" />
                <Img :source="'SKATE/IMG_4763.JPG'" />
                <Img :source="'SKATE/IMG_4762.JPG'" />
                <Img :source="'SKATE/IMG_4760.JPG'" />
                <Img :source="'SKATE/IMG_4759.JPG'" />
                <Img :source="'SKATE/IMG_4758.JPG'" />
                <Img :source="'SKATE/IMG_4756.JPG'" />
                <Img :source="'SKATE/IMG_4757.JPG'" />
                
            
                </div>


                <p>But I just rollerskate. Not as cool.
                </p>
            
                
            

                <p class="credits"><b>California:</b> Skaters were harmed in the making of these pics.</p>
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
        title: 'Side-B - Sk8'
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
