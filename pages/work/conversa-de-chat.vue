<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">Novo Banco</h1>
                <h2 class="subtitle">Conversa de chat.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                <p class="credits">Silver for best radio campaign @CCP</p>

                <p>Novo Banco was the first portuguese bank to launch an app that made money transfers possible by chat. An app that made sending money, as easy as sending emojis. We named it: Chat Pay. We also decided to go inside live chats and narrate the conversations, in order to show people how the new app works.</p>
               
                    <h3>Radios</h3>
                   <iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1188413743&color=%231c1c30&auto_play=false&hide_related=false&show_teaser=true"></iframe>

                <p class="credits"><b>TBWA</b> C: Andreia Luísa C.D: Marco Pacheco </p>
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