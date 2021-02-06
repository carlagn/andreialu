<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">{{getProjTitle}}</h1>
                <h2 class="subtitle">{{getProjTitle}}</h2>
            </div>
            <div class="project-content">
                <h3>This is a tagline</h3>
                <p class="credits">(c) Xyz etc etc Google Apple Inc.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat ligula est, a vehicula ante ultricies vel. Nullam sagittis, augue quis facilisis ullamcorper, risus nibh accumsan nibh, in pulvinar mauris nisl a leo. Nulla facilisi. Integer convallis sodales elementum. Quisque in laoreet diam. Duis a nulla venenatis, imperdiet lacus quis, gravida neque. Praesent eu orci vel urna consectetur porttitor. Cras dictum tristique lorem vitae mattis. Aliquam facilisis ac mauris sit amet vehicula. Etiam ut tortor nec dui vehicula volutpat. In et pulvinar dui. Curabitur pulvinar porttitor tortor id congue. Vivamus fringilla quis dui vitae iaculis. Nunc vel sem venenatis sem ultricies rhoncus a varius quam.</p>
                <video controls class="media"
            src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"></video>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat ligula est, a vehicula ante ultricies vel. Nullam sagittis, augue quis facilisis ullamcorper, risus nibh accumsan nibh, in pulvinar mauris nisl a leo. Nulla facilisi. Integer convallis sodales elementum. Quisque in laoreet diam. Duis a nulla venenatis, imperdiet lacus quis, gravida neque. Praesent eu orci vel urna consectetur porttitor. Cras dictum tristique lorem vitae mattis. Aliquam facilisis ac mauris sit amet vehicula.</p>
            </div>
        </div>
        <Pagination :next="{title: 'next', url: '/work/hello'}" :prev="{title: 'prev', url: '/work/world'}" />
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
    computed: {
      getProjTitle() {
          return this.$store.state.title;
      }
    },
    mounted() {
        this.$store.commit("setSidebar", "open-grid");
        this.$store.commit("setProjTitle", "This is an example");
    },
    methods: {
        ...mapMutations([ "setSideBar", "setProjTitle" ])
    }
})
</script>