<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">Aspirina</h1>
                <h2 class="subtitle">Seja o herói.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                <p class="credits">Radio campaign</p>

                <p>Not all heroes wear capes, some give you aspirin when you need it the most. <br>These are some radios calling out for all those heroes out there.</p>
               
                    <h3>Radios</h3>
                   <iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1217169517&color=%23272823&auto_play=false&hide_related=false&show_teaser=true"></iframe>

                <p class="credits"><b>BBDO</b> C: Andreia Luísa C.D: Marco Pacheco, Rui Silva </p>
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