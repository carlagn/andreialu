<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">Pedras</h1>
                <h2 class="subtitle">A natureza tem muitas cores.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                
                <p>Green is the color of nature. It is also the color of Água das Pedras, a sparkling water that comes from nature. So it's only natural that we filled this movie with green.</p>

                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/224472530?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="fullscreen" allowfullscreen></iframe></div>

                <p>But there are more colors to nature than green, like the colors of Pedras Sabores.</p>
                
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/219110949?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="fullscreen" allowfullscreen></iframe></div>

                <p>And because nature gives us Pedras, we decided to give back to nature <a href="https://www.dardevolta.pt/a-natureza/">here.</a></p>
                
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/392483268?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="fullscreen" allowfullscreen></iframe></div>

                <p>Pedras & Coffe, good combinations for social media.</p>

                <div>
                <Img :source="'pedras/pedrascafe.png'" 
                    :zoom="true"/>
            
                </div>
                
            

                <p class="credits"><b>BBDO</b> C: Andreia Luísa A.D: António Belchior C.D: Marco Pacheco and Rui Silva Directors: Frederico Miranda and Luciano Ottani</p>
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
        title: 'Side-A - Pedras'
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
