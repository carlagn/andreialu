<template>
    <div class="body-wrapper">
        <GridView/>
    </div>
</template>

<script>
import Vue from 'vue';
import GridView from '~/components/GridView.vue'
export default Vue.extend({
    components: { GridView },
    props: {
        sidebar: {
            type: String
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
</style>