<template>
    <div class="project-wrapper">
        <div class="title-section">
            <h1 class="title">McDonald’s</h1>
            <h2 class="subtitle">Reprogramar a manhã.</h2>
        </div>
        <div class="project-content">
            <!-- <h3>This is a tagline</h3> -->
            <p class="credits">(c) LüRZER'S ARCHIVE & 4 stars in DAVID REVIEWS</p>
            <p>Links: <a href="https://vimeo.com/266584215">ENG</a> & <a href="https://www.youtube.com/watch?v=16g1yV89nvA">PT</a>
            </p>
            <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/266584215?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="fullscreen" allowfullscreen></iframe></div>
            <p>McDonald’s “The Robots” is like “Groundhog Day”– only this time with robots. Caught in a time loop, doing the same things over and over again, not being able to break out of the circle until the McDonald’s breakfast menu offers a helping hand, adding variety to the daily grind.</p>
            <p>We had this served it with some radios on the side. Sunny side up.
                <br>Rádios -  <a href="https://soundcloud.com/ndyuu/sets/reprogramar-a-manha-radios">https://soundcloud.com/ndyuu/sets/reprogramar-a-manha-radios</a>
            </p>
            <p class="credits"><b>TBWA</b> C: Andreia Luísa A.D: António Belchior C.D: Marco Pacheco Director: Major Paco (Major West)</p>
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