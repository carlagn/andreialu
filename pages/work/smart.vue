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
                <Img :source="'smart/tesla-post.png'" :zoom="true" />

                <p>We reacted fast.</p>
                <Img :source="'smart/smart1_.png'" :zoom="true" />

                <p>We also did some prints.</p>
                <div>
                <Img :source="'smart/smart4.jpg'" :zoom="true" />
                <Img :source="'smart/smart5.jpg'" :zoom="true" />
                <Img :source="'smart/smart7.jpg'" :zoom="true" />
                
                </div>

                <p class="credits"><b>BBDO</b> C: Andreia Luísa A.D: António Belchior C.D: Marco Pacheco</p>
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
    mounted() {
        this.$store.commit("setSidebar", "open-grid");
    },
    methods: {
        ...mapMutations([ "setSideBar" ])
    }
})
</script>