<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">Tofa</h1>
                <h2 class="subtitle">Rebranding.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
               
               <p>How do you like your coffee, Lisbon?<br>
               Be it "curto", "longo", "pingado", "escaldado" or "sem princípio", Tofa is a coffee Lisbon loves. </p>
                <p>Let's start with the storyline of the logo:</p>
                
                 <div>
                <Img :source="'tofa/tofa01.png'" :zoom="true" />

               <p>A rebranding was needed and we wanted to keep it simple.<br> 
               But with a twist on the F word (not that one), inspired by the coffe plant.</p>

                <Img :source="'tofa/tofa02.png'" :zoom="true" />

                <p>And a tasteful touch on the signature. O gosto que é nosso/ The taste that is ours.</p>

                <Img :source="'tofa/tofa03.png'" :zoom="true" />

                 <p>Would you like some sugar?</p>

                <Img :source="'tofa/tofa04.png'" :zoom="true" />

                <Img :source="'tofa/tofa05.png'" :zoom="true" />
                <p>We decorated some iconic transports with the new identity, such as the cacilheiro or the tram, and distributed some coffee on board. What a lovely way to see the city.</p>
                <Img :source="'tofa/tofa06.png'" :zoom="true" />
                <Img :source="'tofa/tofa_zoom.png'" :zoom="true" />

                <Img :source="'tofa/tofa07.png'" :zoom="true" />
            
                </div>
                
                <p class="credits"><b>BBDO</b> C: Andreia Luísa A.D: Rita Feliciano IL: João Fazenda C.D: Marco Pacheco e Rui Silva</p>
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
        title: 'Side-A - Tofa'
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
