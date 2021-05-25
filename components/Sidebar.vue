<template>
    <div class="sidebar-wrapper" :class="{'active': getSidebarState, 'background': getActivePage === 'work' || getActivePage === 'side-b'}">
        <div class="sidebar-box">
            <div class="logo-box" :class="{'vertical': isVertical}">
                <div
                    @click="backToTop()"
                    class="logo"
                >
                    <img src="~/assets/logo.png" />
                    <span class="label">copywriter.</span>
                </div>
                <div class="menu" :class="{'vertical': isVertical}">
                    <nuxt-link to="/" :class="{'active': getActivePage === 'work'}">Side-A</nuxt-link>
                    <nuxt-link to="/side-b" :class="{'active': getActivePage === 'side-b'}">Side-B</nuxt-link>
                    <nuxt-link to="/about" :class="{'active': getCurrentRoute.includes('about')}">About</nuxt-link>
                </div>
                <div v-if="getCurrentRoute.includes('about')" class="lang-menu">
                    <p>
                        <nuxt-link v-if="getCurrentRoute === '/about'" to="/about-pt"><span>PT</span></nuxt-link>
                        <nuxt-link v-else-if="getCurrentRoute === '/about-pt'" to="/about"><span>EN</span></nuxt-link>
                    </p>
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
      isVertical() {
          return this.getCurrentRoute !== '/' && this.getCurrentRoute !== '/side-b'
      },
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

    &.about, &.about-pt {
        @media (min-device-width: 769px) {
            position: fixed;
        }
        position: absolute;
        top: 0;

        .sidebar-box {
            @media (min-device-width: 769px) {
                width: auto;
            }
            width: 100%;
        }
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
            height: calc((100vh - 17px) / 3);
            display: flex;
            height: 100%;
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
        position: relative;
        height: 268px;
        padding: 16px;

        &.vertical {
            @media (min-device-width: 769px) {
                flex-direction: column;
                align-items: flex-start;
            }

            a {
                pointer-events: auto;
            }
        }

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

        .lang-menu {
            @media (min-device-width: 769px) {
                display: block;
                width: 100%;
                right: unset;
                top: 240px;
                transform: none;
            }
            right: 32px;
            top: 50%;
            transform: translateY(-50%);
            width: auto;
            position: absolute;
            padding-left: 8px;
            text-align: center;
            a {
                @media (min-device-width: 550px) {
                    font-size: inherit;
                }
                color: black;
                text-decoration: none;
                font-size: 40px;
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
            &.vertical {
                @media (min-device-width: 769px) {
                    flex-direction: column;
                }
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                padding-left: 8px;
                margin-left: 0;
                a {
                    @media (min-device-width: 769px) {
                        padding: 0;
                    }
                    margin: 8px 0;
                    padding-right: 16px;
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
            &.vertical {
                opacity: 1;
                padding-left: 8px;
                a {
                    margin: 8px 0;
                    pointer-events: auto;
                }
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
