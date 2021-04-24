<template>
    <div v-if="activeZoom.length > 0" class="image-modal" @click="closeModal()">
        <div class="img-container" @click="(e) => coords(e)">
            <img
                :style="{
                    transformOrigin: `${zoomPoint.x}% ${zoomPoint.y}%`,
                    transform: `scale(${zoomed ? '2': '1'})`,
                    cursor: zoomed ? `zoom-out` : `zoom-in`
                }"
                :src="require(`@/assets/` + activeZoom + '')">
        </div>
        <div @click="closeModal()" class="close-btn" />
    </div>
</template>
            cursor: zoom-in;

<script>
export default {
    computed: {
        activeZoom () {
            return this.$store.state.activeZoom;
        }
    },
    data() {
        return {
            zoomPoint: {
                x: 50,
                y: 50
            },
            zoomed: false
        }
    },
    watch: {
        activeZoom() {
            if (this.activeZoom.length > 0) {
                this.zoomed = false
            }
        }
    },
    methods: {
        coords(e) {
            e.stopPropagation()
            const {height, width} = e.target
            const {offsetX, offsetY} = e

            const x = offsetX * 100 / height
            const y = offsetY * 100 / height
            if (this.zoomed) this.zoomed = false
            else {
                this.zoomPoint = {x, y}
                this.zoomed = true
            }
        },
        closeModal() {
            this.$store.commit("setActiveZoom", "");
        }
    }
}
</script>

<style lang="scss" scoped>
.image-modal {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    left: 0;
    z-index: 1000000000000000;
    background-color: rgba(0, 0, 0, 0.5);

    .img-container {
        height: calc(100% - 32px);
        margin: 16px auto;
        max-width: max-content;
        img {
            background: #f8f8ff;
            display: block;
            transition: transform 0.2s ease-in-out;
            max-height: 100%;
        }

    }
    .close-btn {
        position: absolute;
        right: 16px;
        top: 16px;
        width: 48px;
        height: 48px;
        cursor: pointer;

        &::before, &::after {
            position: absolute;
            width: 2px;
            background-color: black;
            transform-origin: center;
            height: 100%;
            content: "'";
            left: 50%;
        }

        &::after {
            transform: rotate(-45deg);
        }
        &::before {
            transform: rotate(45deg);
        }
    }
} 
</style>