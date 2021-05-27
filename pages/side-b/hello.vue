<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">:)</h1>
                <h2 class="subtitle">Hello.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                
            

                <div>
                
                <Img :source="'hello/IMG_4751.JPG'" />
                <Img :source="'hello/IMG_4752.JPG'" />
                <Img :source="'hello/Screen Shot 2021-05-23 at 21.55.53.png'" />
                
                <p>I try to stay positive.</p>
                
            
                </div>
            
                
            

                <p class="credits"><b>Austin and Lisbon:</b> Two cities that make me happy.</p>
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
        title: 'Side-B - Hello :)'
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
