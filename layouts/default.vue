<template>
    <div>
        <Sidebar :class="sidebarClass"/>
        <transition
            name="fade"
            mode="out-in"
        >
            <Nuxt :sidebar="sidebarClass"/>
        </transition>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import { mapMutations } from 'vuex'

export default{
  transition: {
    name: 'test',
    mode: 'out-in'
  },
    components: {
        Sidebar
    },
    computed: {
        getCurrentRoute() {
            return this.$router.path;
        },
        sidebarClass () {
            return this.$store.state.sidebar;
        }
    },
    mounted() {
    },
    methods: {
        ...mapMutations([ 'setSideBar' ]),
        checkIfMobile() {
            return document.querySelector('.grid-container').getBoundingClientRect() >= 768;
        }
    }
}
</script>

<style lang="scss">
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
    top: 225px;

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
        width: 100%;

        &.portrait {
            width: 50%;
            height: auto;
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
    margin: 48px 0;
    line-height: 28pt;
}
</style>