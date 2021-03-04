<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">Unitel</h1>
                <h2 class="subtitle">Mais Cabo Verde.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                 <p class="credits">Print campaign</p>

                <p>The National Olympic Committee of Cape Verde was present at the Rio 2016 Summer Olympic Games. Unitel t+ proudly showed it's support, honouring the achievements of the country's athletes throughout the history of the Olympic Games, using the flag as a symbol of the different sports in which they succeeded.
                 </p>
               
               <div>
                <img class="media" src="~/assets/print/printb6.png" />
                <img class="media" src="~/assets/print/printb7.png" />
                <img class="media" src="~/assets/print/printb8.png" />
             
                </div>
                <p class="credits"><b>OGILVY</b> C: Andreia Luísa A.D: Alexandre Pina C.D: Jorge Coelho</p>
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
    data() {
        return {
                    lang: "en"
                }
    },
    mounted() {
        this.$store.commit("setSidebar", "open-grid");
    },
    methods: {
        ...mapMutations([ "setSideBar" ]),
        setLang(str) {
            this.lang = str;
        }
    }
})
</script>