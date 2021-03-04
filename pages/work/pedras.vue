<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">Pedras</h1>
                <h2 class="subtitle">A natureza tem muitas cores.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                
                <p>Green is the color of nature. It is also the color of Água das Pedras, which makes sense for a sparkling water that is 100% natural. In order to strenghten the signature "Deixa o melhor de ti vir ao de cima" we did an ascending movie, from the fountain to the bottle.</p>

                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/224472530?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="fullscreen" allowfullscreen></iframe></div>

                <p>But there are more colors to nature than green. Like yellow, pink or red, the colors of Pedras Sabores. We served a fresh cocktail in the shape of an ad with the claim "Descobre as outras cores da natureza".</p>
                
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/219110949?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="fullscreen" allowfullscreen></iframe></div>

                <p>And because nature gives us Pedras, we decided to give back to nature at dardevolta.pt/a-natureza/</p>
                
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/392483268?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="fullscreen" allowfullscreen></iframe></div>

                <p>Pedras & coffe, good combinations.</p>

                <div>
                <img class="media" src="~/assets/pedras/pedrascafe.png" />
            
                </div>
                
            

                <p class="credits"><b>BBDO</b> C: Andreia Luísa A.D: António Belchior C.D: Marco Pacheco and Rui Silva Directors: Frederico Miranda and Luciano Ottani</p>
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
    mounted() {
        this.$store.commit("setSidebar", "open-grid");
    },
    methods: {
        ...mapMutations([ "setSideBar" ])
    }
})
</script>