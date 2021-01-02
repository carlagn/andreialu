<template>
    <div class="project-wrapper">
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
        <img src="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png" class="media">
        <img src="https://lh3.googleusercontent.com/proxy/oEDjJ6QtlJBhKd1hV0l8Zfh3-W8vgrgkxuh8hWESE6E5mzPD1h7aAt7CzUOsFXZcZLJOQapOlOANgqP_rOG1oK1HC5HLH3DYf6VbDN47g_JXTzD6mCcdYYvyJjEHbJeIQuXFxuKy" class="media portrait" >
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