<template>
    <div class="sidebar-wrapper" :class="{'active': getSidebarState, 'background': getActivePage === 'work'}">
        <div class="sidebar-box">
            <div class="logo-box">
                <div
                    @click="backToTop()"
                    class="logo"
                >
                    <img src="~/assets/logo.png" />
                    <span class="label">copywriter.</span>
                </div>
                <div v-if="getCurrentRoute === '/'" class="menu">
                    <nuxt-link to="/" :class="{'active': getActivePage === 'work'}">Work</nuxt-link>
                    <nuxt-link to="/about" :class="{'active': getActivePage === 'about'}">About</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { mapMutations, mapGetters } from 'vuex';
export default Vue.extend({
  computed: {
      getCurrentRoute() {
          return this.$route.path;
      },
      getActivePage() {
          return this.$store.state.activePage;
      },
      getSidebarState() {
          return  this.$store.state.sidebar;
      }
  },
  mounted() {
      this.$store.commit("setActivePage", "");
  },
  methods: {
      ...mapMutations(["setSideBar", "setProjTitle", "setActivePage"]),
      toggleAbout() {
          this.displayAbout = !this.displayAbout;
      },
      backToTop() {
        if(this.$route.path === "/") {
            this.$store.commit("setSidebar", "");
            const scroll = setInterval(() => {
                document.querySelector('.grid-wrapper').scrollLeft -=20;
                if (document.querySelector('.grid-wrapper').scrollLeft === 0) clearInterval(scroll);
            }, 1);
        } else {
            this.$router.push({
                path: '/'
            })
        }
      }
  }
})
</script>

<style lang="scss" scoped>
.sidebar-wrapper {
    @media (min-device-width: 769px) {
        width: auto;
        position: absolute;
        top: 0;
        height: calc((100vh - 17px) / 3);
    }
    z-index: 10000;
    position: relative;
    transition: 0.2s, 0.1s ease-in;
    transition-property: height, width;
    transition-delay: 0s, 0.3s;
    pointer-events: none;
    font-family: 'Roboto Mono', monospace;
    font-weight: 300;
    height: auto;
    width: 100%;

    &.active {
        height: 100vh;
    }

    &.background {
        @media (min-device-width: 769px) {
            height: calc((100vh - 17px) / 3);
        }
        height: auto;
        position: fixed;
        background-color: #f8f8ff;
    }

    a {
        pointer-events: auto;
        &.active {
            text-decoration: underline;
        }
    }
    .sidebar-box {
        @media (min-device-width: 769px) {
            padding: 0 32px 0 24px;
            margin: 46px 0;
        }
        width: auto;
    }

    .logo-box {
        @media (min-device-width: 769px) {
            height: auto;
            padding: 0;
        }
        display: flex;
        pointer-events: auto;
        align-items: center;
        height: 268px;
        padding: 16px;

        img {
            @media (min-device-width: 769px) {
                max-width: 100px;
            }
            margin-top: 0;
            max-width: 180px;
        }

        .logo {
            cursor: pointer;
            display: inline-block;
            padding-bottom: 32px;
            @media (min-device-width: 769px) {
                padding-bottom: 0;
            }
        }

        .menu {
            @media (min-device-width: 769px) {
                font-size: 14px;
                margin-left: none;
            }
            font-size: 32px;
            margin-left: auto;
            text-transform: uppercase;
            padding-left: 16px;
            font-family: 'Roboto', sans-serif;
            letter-spacing: 2px;
            transition-property: opacity;
            transition-delay: 0.4s;

            a, div {
                display: inline-block;
                margin-right: 8px;
                text-decoration: none;
                position: relative;
                color: black;
                &.active {
                    text-decoration: underline;
                }
            }
        }
    }


    &.open-grid {
        @media (min-device-width: 769px) {
            width: 170px;
            height: 160px;
        }
        height: auto;
        transition: 0.2s, 0.1s ease-in;
        transition-property: height, width;
        width: 100%;
        transition-delay: 0.35s, 0.3s;
        display: flex;
        align-items: flex-start;
        .intro-box, .link-box, .hotlinks{
            opacity: 0;
            position: absolute;
            transition: opacity 0.1s ease-in;
            transition-delay: 0s;
        }
        .menu {
            opacity: 0;
            transition-property: opacity;
            transition-delay: 0s;
            > a {
                pointer-events: none;
            }
        }
    }

    .label {
        @media (min-device-width: 769px) {
            margin-top: -25px;
            margin-bottom: 24px;
            text-align: left;
            font-size: 12px;
            margin-left: 24px;
        }
        text-align: center;
        margin-top: -40px;
        font-size: 18px;
        margin-left: 32px;
        font-family: 'Roboto Mono', monospace;
        font-weight: bold;
        display: block;
        text-decoration: underline;
    }

    img {
        @media (min-device-width: 769px) {
            max-width: 150px;
            margin: 100% 0 0;
        }
        display: block;
        max-width: 100px;
    }
    &.open {
        &::after {
            background: black;
        }
    }

    .intro-box {
        margin-top: 25%;
    }

    .intro-box, .hotlinks, .link-box {
        transition: opacity 0.1s ease-in;
        line-height: 20px;
        transition-delay: 0.35s;
        @media (min-device-width: 769px) {
            position: static;
            opacity: 1;
        }
        padding: 10px 20px;
        position: absolute;
        opacity: 0;
    }

    .hotlinks {
        bottom: 0;
    }

    .about{
        display: none;
        &.active {
            display: block;
        }
    }
}
</style>