<template>
    <div class="body-wrapper">
        <GridViewPersonal/>
    </div>
</template>

<script>
import Vue from 'vue';
import GridViewPersonal from '~/components/GridViewPersonal.vue'
export default Vue.extend({
    components: { GridViewPersonal },
    props: {
        sidebar: {
            type: String
        }
    },
    head() {
      return {
        title: 'Andreia Luísa - Side-B'
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
