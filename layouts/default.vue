<template>
    <div @wheel="scrollHorizontal">
        <Sidebar :class="sidebarClass"/>
        <Nuxt :sidebar="sidebarClass"/>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import { mapMutations } from 'vuex'

export default{
    components: {
        Sidebar
    },
    computed: {
        sidebarClass () {
            return this.$store.state.sidebar;
        }
    },
    mounted() {
    },
    methods: {
        ...mapMutations([ 'setSideBar' ]),
        scrollHorizontal(element, event) {
            if(document.querySelector('.grid-container')){
                if (document.querySelector('.grid-container').getBoundingClientRect().x < 100){
                    this.$store.commit("setSidebar", 'open-grid');
                    }
                else{
                    this.$store.commit("setSidebar", "");
                }
            }
        },
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
    font-family: 'Merriweather', serif;
    position: fixed;
    left: 16px;
    max-width: 20%;
    top: 175px;

    .title, .subtitle {
        padding-left: 16px;
    }
    h1.title {
            font-size: 20px;
        }
    h2.subtitle {
            font-size: 18px;
            margin: 4px 0;
            font-weight: regular;

        }
}
.project-wrapper {
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    margin-left: 100px;
    overflow: auto;
    font-weight: 300;
    position: relative;

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
        padding: 16px;
    }

    h1 {
        margin: 0;
    }

    h3 {
        margin: 0;
        font-weight: 400;
        font-size: 16px;
        margin: 8px 0;
    }

    .credits {
        font-weight: light;
        color: gray;
        font-size: 12px;
        margin: 4px 0;
    }

    p {
        margin: 32px 0;
        line-height: 16pt;
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
</style>