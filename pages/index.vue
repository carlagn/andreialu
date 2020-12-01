<template>
    <div class="body-wrapper" @wheel="scrollHorizontal">
        <Sidebar />
        <GridView />
    </div>
</template>

<script>
import Vue from 'vue';
import Sidebar from '~/components/Sidebar.vue'
import GridView from '~/components/GridView.vue'
export default Vue.extend({
    components: { Sidebar, GridView },
    methods: {
        scrollHorizontal(element, event) {
            console.log(element);
        }
    }
})
</script>

<style lang="scss">
html {
    overflow: hidden;
}
body {
    margin: 0;
}
.body-wrapper {
    display: grid;
    grid-template-columns: auto 1fr;
    width: 100%;
}
</style>