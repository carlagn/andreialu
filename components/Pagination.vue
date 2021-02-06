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
    @media (min-device-width: 769px) {
        padding: 40px 0;
    }
    padding-top: 40px;
    padding-bottom: 80px;
    margin-left: 100px;
    margin-right: 100px;
    width: auto;

    .pagination-content {
        display: flex;
        justify-content: space-between;
        max-width: 500px;
        margin: 0 auto;

        a {
            @media (min-device-width: 769px) {
                font-weight: lighter;
                font-size: 16px;
            }
            font-weight: normal;
            position: relative;
            font-size: 32px;
        }
        .prev-proj {
            &:before {
                @media (min-device-width: 769px) {
                    border-width: 1px;
                    height: 8px;
                    width: 8px;
                    top: 5px;
                }
                content: "";
                position: absolute;
                border-left: 3px solid black;
                border-top: 3px solid black;
                transform: rotate(-45deg);
                height: 15px;
                width: 15px;
                right: 100%;
                top: 10px;
                margin-right: 10px;
            }
        }
        .next-proj {
            &:after {
                @media (min-device-width: 769px) {
                    border-width: 1px;
                    height: 8px;
                    width: 8px;
                    top: 5px;
                }
                content: "";
                position: absolute;
                border-right: 3px solid black;
                border-top: 3px solid black;
                margin-left: 10px;
                transform: rotate(45deg);
                height: 15px;
                width: 15px;
                left: 100%;
                top: 10px;
            }
        }
    }
}
</style>