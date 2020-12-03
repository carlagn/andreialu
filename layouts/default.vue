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
        },
        getScreenWidth() {
            return window.screen.width;
        }
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
        
    }
}
</script>