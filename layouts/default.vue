<template>
    <div>
        <Sidebar :class="sidebarClass"/>
        <transition
            name="fade"
            mode="out-in"
        >
            <Nuxt :sidebar="sidebarClass"/>
        </transition>
        <Modal />
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Modal from '../components/Modal.vue'
import { mapMutations } from 'vuex'

export default{
    transition: {
        name: 'test',
        mode: 'out-in'
    },
    components: {
        Sidebar,
        Modal
    },
    computed: {
        getCurrentRoute() {
            return this.$route.path.slice(1);
        },
        sidebarClass () {
            return `${this.$store.state.sidebar} ${this.getCurrentRoute}`;
        },
        activeZoom () {
            return this.$store.state.activeZoom;
        }
    },
    mounted() {
        window.addEventListener('keydown', e => {
            const idx = document.querySelector('.grid-wrapper').scrollLeft
            if (e.key === 'ArrowRight')
                document.querySelector('.grid-wrapper').scrollLeft = idx + 20
            else if (e.key === 'ArrowLeft')
                document.querySelector('.grid-wrapper').scrollLeft = idx - 20
        })
    },
    methods: {
        ...mapMutations([ 'setSideBar', 'setActiveZoom']),
        checkIfMobile() {
            return document.querySelector('.grid-container').getBoundingClientRect() >= 768;
        },
        closeModal() {
            this.$store.commit("setActiveZoom", "");
        }
    }
}
</script>

<style lang="scss">
.cover-link {
    width: min-content;
}
body {
        background-color: #f8f8ff;
        margin: 0;
}
.title-section {
    @media (min-device-width: 769px) {
        position: fixed;
        left: 16px;
        max-width: 20%;
        margin-right: 0;
        height: auto;
        text-align: left;
    }
    font-family: 'Roboto Mono', monospace;
    margin-right: 40px;
    text-align: right;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    top: 270px;

    .title, .subtitle {
        padding-left: 16px;
    }
    h1.title {
        @media (min-device-width: 769px) {
            font-size: 20px;
        }
        font-size: 32px;
    }
    h2.subtitle {
        @media (min-device-width: 769px) {
            font-size: 18px;
            margin: 4px 0;
        }
        font-weight: normal;
        font-size: 24px;
        margin-top: 24px;
    }
}
.project-wrapper {
    @media (min-device-width: 769px) {
        margin-top: 0;
        overflow: auto;
        margin-left: 100px;
        display: block;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 16px;
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    font-weight: 300;
    position: relative;
    margin-top: -300px;

    iframe, video {
        width: 100%;
    }

    .media {
        margin: 32px auto;
        display: block;
        max-height: 500px;
        width: auto;
        max-width: 100%;
        &.portrait {
            width: 50%;
            height: auto;
        }

        @media (min-device-width: 769px) {
            &.zoom {
                position: absolute;
                z-index: 10000;
                max-height: calc(100vh - 100px);
                width: auto;
                height: 100%;
                margin: 0;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }

    .project-content {
        max-width: 800px;
        margin: 0 auto;
        padding: 32px;
    }

    h1 {
        margin: 0;
    }

    h3 {
        @media (min-device-width: 769px) {
            font-size: 16px;
        }
        font-size: 24px;
        margin: 0;
        font-weight: 400;
        margin: 8px 0;
    }

    .credits {
        @media (min-device-width: 769px) {
            font-size: 12px;
        }
        font-size: 20px;
        font-weight: light;
        color: gray;
        margin: 4px 0;
    }


    a {
        font-weight: bold;
        color: black;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }

}
p {
    @media (min-device-width: 769px) {
        line-height: 16pt;
        margin: 32px 0;
        font-size: 16px;
    }
    font-size: 28px;
    text-align: justify;
    margin: 48px 0;
    line-height: 28pt;
}
.lang{
    b {
    cursor: pointer;
    }
}
.image-modal {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    left: 0;

    img {
        display: block;
        height: calc(100% - 128px);
        margin: 16px;
        max-height: 100%;
        margin: 64px auto;
    }
} 
footer {
    height: 68px;
}
</style>
