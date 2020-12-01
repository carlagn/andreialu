<template>
    <div class="body-wrapper" @wheel="scrollHorizontal">
        <Sidebar :class="sidebarWidth"/>
        <GridView @grid="getGrid"/>
    </div>
</template>

<script>
import Vue from 'vue';
import Sidebar from '~/components/Sidebar.vue'
import GridView from '~/components/GridView.vue'
export default Vue.extend({
    components: { Sidebar, GridView },
    data() {
        return {
            sidebarWidth: "",
            grid: null
        }
    },
    computed: {
        getScreenWidth() {
            return window.screen.width;
        }
    },
    methods: {
        scrollHorizontal(element, event) {
            if(this.grid) {
                if (this.grid.getBoundingClientRect().x < 100)
                    this.sidebarWidth = 'open-grid';
                else this.sidebarWidth = '';
            }
        },
        getGrid(gridEl) {
            this.grid = gridEl;
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