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
    },
    head() {
      return {
        title: 'Andreia Luísa - Side-A'
      }
    }
})
</script>

<style lang="scss">
html {
    body {
        background-color: #f8f8ff;
    }
}
</style>
