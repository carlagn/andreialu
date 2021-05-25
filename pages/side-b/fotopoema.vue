<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">Foto</h1>
                <h2 class="subtitle">poema.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                
             <p>I write poems on the notes of my phone 
                and add photos to it. </p>

                <div>
                
                <Img :source="'fotopoema/ovo.png'" />
                <Img :source="'fotopoema/flor.png'" />
                <Img :source="'fotopoema/fotopoemas.png'" />

                <Img :source="'fotopoema/nada.png'" />

                <p>From ^this one, I made this track with my friend Andy. My voice and words mixed with his field recordings of Mexican waters.
                </p>
                    <iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/929729530&color=%23272823&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                    </iframe>

                <p>I did a photography exhibition.</p>

                <Img :source="'fotopoema/capa_evento.png'" />

                 <p>A red string was given to each visitor in order to connect each picture to the corresponding poem.</p>
                
                <Img :source="'fotopoema/expo.png'" />

                <p>New connections were made.</p>
            
                </div>
            
                
            

                <p class="credits"><b>iPhone:</b> Pocket poetry.</p>
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