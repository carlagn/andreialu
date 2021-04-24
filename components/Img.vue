<template>
    <div class="pagination-wrapper">
        <img
            class="media"
            :style="{ cursor: zoom ? 'pointer' : 'auto' }"
            :src="require(`@/assets/${source}`)"
            @click="zoomIn(source)"
        />
    </div>
</template>

<script>
import Vue from 'vue';
import { mapMutations } from 'vuex'

export default Vue.extend({
    name: 'Img',
    props: {
        source: {
            type: String
        },
        zoom: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        ...mapMutations(["setActiveZoom" ]),
        zoomIn(str) {
            if (this.zoom) this.$store.commit("setActiveZoom", str);
        }
    }
})
</script>