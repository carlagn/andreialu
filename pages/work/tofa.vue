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
                <img class="media" src="~/assets/tofa/tofa01.png" />

               <p>A rebranding was needed and we wanted to keep it simple.<br> 
               But with a twist on the F word (not that one), inspired by the coffe plant.</p>

                <img class="media" src="~/assets/tofa/tofa02.png" />

                <p>And a tasteful touch on the signature.</p>

                <img class="media" src="~/assets/tofa/tofa03.png" />

                 <p>Would you like some sugar?</p>

                <img class="media" src="~/assets/tofa/tofa04.png" />

                <img class="media" src="~/assets/tofa/tofa05.png" />
                <p>We decorated some iconic transports with the new identity, such as the cacilheiro or the tram, and distributed some coffee on board. What a lovely way to see the city.</p>
                <img class="media" src="~/assets/tofa/tofa06.png" />
                <img class="media" src="~/assets/tofa/tofa_zoom.png" />

                <img class="media" src="~/assets/tofa/tofa07.png" />
            
                </div>
                
                <p class="credits"><b>BBDO</b> C: Andreia Luísa A.D: Rita Feliciano IL: João Fazenda C.D: Marco Pacheco e Rui Silva</p>
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