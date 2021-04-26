<template>
    <div
        v-if="animated"
        class="grid-element"
        :class="{'loaded': isLoaded(imgSrc), 'xv': mode === 'portrait'}">
        <video
            v-if="!isMobile" class="grid-video"
            autoplay="true"
            muted="true"
            loop="true"
            @canplay="pushToLoaded(imgSrc)"
        >
            <source :src="require(`~/assets/CAPAS/${imgSrc}`)" />
        </video>
        <img v-else :src="require(`~/assets/CAPAS/${imgAlt}`)" />
    </div>
    <div v-else class="grid-element" :class="{'loaded': isLoaded(imgSrc), 'xv': mode === 'portrait'}">
        <img @load="pushToLoaded(imgSrc)" :src="require(`~/assets/CAPAS/${imgSrc}`)" />
    </div>
</template>

<script>
export default {
    props: {
        source: {
            type: String,
            require: true
        },
        alt: {
            type: String
        },
        animated: {
            type: Boolean,
            default: false
        },
        mode: {
            type: String
        },
        isMobile: {
            type: Boolean
        }
    },
    data() {
        return {
            loaded: []
        }
    },
    computed: {
        imgSrc() {
            return this.source
        },
        imgAlt() {
            return this.alt
        }
    },
    methods: {
        isLoaded(str) {
            return this.loaded.includes(str)
        },
        pushToLoaded(str) {
            this.loaded.push(str)
        },
    }
}
</script>

<style lang="scss" scoped>
    .grid-element {
        &.loaded {
            opacity: 1;
        }
        @media (min-device-width: 769px) {
            &.xv {
                height: calc((100vh - 17px) * 2 /3);
            }
            width: calc((100vh - 17px) / 3);
            height: calc((100vh - 17px) / 3);
        }
        transition: opacity 0.15s ease-in-out;
        width: 50vw;
        height: 500px;
        opacity: 0;

        &.xh {
            width: 600px;
        }

        img, .grid-video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        &.empty {
            @media (min-device-width: 769px) {
                display: flex;
            }
            display: none;
            justify-content: center;
            align-items: center;
            font-family: 'Fraunces', serif;
            font-weight: lighter;
        }
        .grid-video {
            @media (min-device-width: 769px) {
                display: block;
            }
            display: none;
        }
        .grid-gif {
            @media (min-device-width: 769px) {
                display: none;
            }
            display: block;

        }
    }
</style>