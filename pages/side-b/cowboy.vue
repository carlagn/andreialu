<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">Cowboy</h1>
                <h2 class="subtitle">Photography.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                
            


                <div>

                       <p>I wish I was a cowboy.</p>
                
                <Img :source="'COWBOY/1.jpeg'" />
                <Img :source="'COWBOY/2.jpeg'" />
                <Img :source="'COWBOY/3.jpeg'" />
                <Img :source="'COWBOY/4.jpeg'" />
                <Img :source="'COWBOY/5.jpeg'" />
                <Img :source="'COWBOY/6.jpeg'" />
                <Img :source="'COWBOY/7.jpeg'" />
                <Img :source="'COWBOY/8.jpeg'" />
                <Img :source="'COWBOY/9.jpeg'" />
                <Img :source="'COWBOY/10.jpeg'" />
                <Img :source="'COWBOY/11.jpeg'" />
                <Img :source="'COWBOY/12.jpeg'" />


                <iframe width="560" height="315" src="https://www.youtube.com/embed/feMwFuihX2o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                </div>
            
                
            

                <p class="credits"><b>Texas and Almeria:</b> There are 2 Texas.</p>
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