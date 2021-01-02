<template>
    <div class="project-wrapper">
        <div class="title-section">
            <h1 class="title">McDonald’s</h1>
            <h2 class="subtitle">Reprogramar a manhã.</h2>
        </div>
        <div class="project-content">
            <!-- <h3>This is a tagline</h3> -->
            <p class="credits">(c) LüRZER'S ARCHIVE & 4 stars in DAVID REVIEWS</p>
            <p>De manhã todos temos as nossas rotinas e tendemos a agir de forma automática. Mas... E se pudéssemos reprogramar a manhã? Ter um programa diferente e fazer algo novo? </p>
            <p>É esta vontade de ter uma manhã diferente que queremos passar, com uma simpática família de robôs - os Andrades - que decide ir tomar o pequeno-almoço ao McDonald’s, para variar.</p>
                <video
                    controls
                    muted
                    autoplay
                    class="media"
                    src="https://cdn-a.luerzersarchive.com/archive/submissions/tv_commercials/720/2018/317094.mp4?Expires=1609614723&Signature=GHeYQe3YeQ2j~cltAnM4nG17xQXDAz7EyRzXFZfea34bsdpO5R9RoWumey3Ldt1BDiS7ax5FhsLIatBJiLEMp6UyCl1z9fw~efQDP~awWLQ1SgtOaDC3HzHnZX3mqJkuwC1YXss0ri4Nq4IAmvRrJ2QwevR8s9gOgGR4G81IdHPBMNjs5P8vrDcz~QrmzZdOZ5AUulb1JT9yxNt4Bv-dDqMlJbiUTTzN1xlID9nsJUpGuTg7prWwvRmfG-OVOYgRODbDx0ShVpOVGe0iqd~Y5jwzVPBBPwCap76QEQpjcl4dYKjFKLBjOsibawaZ2MzbKRF-NdZ4h8SOqMm6iX7VOA__&Key-Pair-Id=APKAJXKTOLSPBG77KE6Q"
                ></video>
            <p>McDonald’s “The Robots” is like “Groundhog Day”– only this time with robots. Caught in a time loop, doing the same things over and over again, not being able to break out of the circle until the McDonald’s breakfast menu offers a helping hand, adding variety to the daily grind.</p>
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