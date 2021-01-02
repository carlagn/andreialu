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
    @media (min-device-width: 769px) { 
        overflow: hidden;
    }
    overflow: auto;
    body {
        background-color: #f8f8ff;
    }
}
</style>