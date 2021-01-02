<template>
    <div class="pagination-wrapper">
        <div class="pagination-content">
            <nuxt-link :to="prevUrl.path" class="prev-proj">{{prevUrl.name}}</nuxt-link>
            <nuxt-link :to="nextUrl.path" class="next-proj">{{nextUrl.name}}</nuxt-link>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import global from "../mixin/global"

export default Vue.extend({
    mixins: [global],
    data() {
        return {
            currentUrl: "",
            nextUrl: {},
            prevUrl: {}
        }
    },
    props: {
        next: {
            type: Object
        },
        prev: {
            type: Object
        }
    },
    created() {
        this.currentUrl = this.$route.name.split("-")[1];
        const currentIdx = this.routes.findIndex(e => e.path === this.$route.path);
        if (currentIdx > 0) this.prevUrl = this.routes[currentIdx - 1];
        else this.prevUrl = {};
        if (currentIdx === this.routes.length - 1) this.nextUrl = {};
        else this.nextUrl = this.routes[currentIdx + 1];
    }
})
</script>

<style lang="scss" scoped>
.pagination-wrapper {
    margin-left: 100px;
    margin-right: 100px;
    width: auto;
    margin-top: 32px;
    margin-bottom: 40px;

    .pagination-content {
        display: flex;
        justify-content: space-between;
        max-width: 500px;
        margin: 0 auto;

        a {
            font-weight: lighter;
        }
    }
}
</style>