<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">smart</h1>
                <h2 class="subtitle">Little things <br> for a big car.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->

                <p class="credits">Featured on Digital Done Right</p>

                <p>Remember when Elon Musk sent a Tesla Roadster into space?</p>
                <img class="media" src="~/assets/smart/tesla-post.png" />

                <p>We reacted fast.</p>
                <img class="media" src="~/assets/smart/smart1_.png" />

                <p>We also did some prints.</p>
                <div>
                <img class="media" src="~/assets/smart/smart4.jpg" />
                <img class="media" src="~/assets/smart/smart5.jpg" />
                <img class="media" src="~/assets/smart/smart7.jpg" />
                <img class="media" src="~/assets/smart/smart3.jpg" />
                
                <p>And welcomed you into Lisbon.</p>
                <img class="media" src="~/assets/smart/direcional_ambientado.png" />
                </div>

                <p class="credits"><b>BBDO</b> C: Andreia Luísa A.D: António Belchior C.D: Marco Pacheco</p>
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