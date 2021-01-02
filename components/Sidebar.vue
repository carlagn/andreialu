<template>
    <div class="sidebar-wrapper">
        <div class="sidebar-box">
            <div class="logo-box">
                <div
                    @click="backToTop()"
                    class="logo"
                >
                    <img src="~/assets/logo.png" />
                    <span class="label">copywriter.</span>
                </div>
                <div class="menu">
                    <nuxt-link to="/contacts">Contacts</nuxt-link>
                    <nuxt-link to="/resume">Experience</nuxt-link>
                </div>
            </div>
            <div class="intro-box">
                <b>Andreia nunca gostou de escrever na terceira pessoa.</b>
                <br>
                <br>Posto isto… Olá. 
                <br>Sou Andreia para uns, Luísa para outros. Copywriter para uns, veterinária para outros. Depende da fase da vida em que me apanhaste, mas digamos que estou a gostar muito desta fase. Não que seja só uma fase.
                <br>
                <br>Falamos?
                <br><a href="mailto:hello@andreia.lu">hello@andreia.lu</a>
            </div>
            <div class="hotlinks">
                Encontra-me em:
                <div class="link-box">
                    [lo][lo][lo]
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
          return this.$router.path;
      }
  },
  methods: {
      ...mapMutations(["setSideBar", "setProjTitle"]),
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
        width: 500px;
        height: 100vh;
    }
    transition: 0.2s, 0.1s ease-in;
    transition-property: height, width;
    transition-delay: 0s, 0.3s;
    pointer-events: none;
    position: fixed;
    background-color: #f8f8ff;
    font-family: 'Roboto Mono', monospace;
    font-weight: 300;
    height: auto;
    width: 100%;

    .sidebar-box {
        width: auto;
        padding: 0 24px;
    }

    .logo-box {
        display: flex;
        pointer-events: auto;
        align-items: center;

        img {
            margin-top: 0;
            max-width: 100px;
        }

        .logo {
            cursor: pointer;
            display: inline-block;
        }

        .menu {
            padding-left: 16px;
            text-transform: uppercase;
            font-family: 'Roboto', sans-serif;
            font-size: 14px;
            letter-spacing: 2px;
            transition-property: opacity;
            transition-delay: 0.4s;

            a {
                margin-right: 8px;
                text-decoration: none;
                position: relative;
                color: black;

                &:after {
                    width: 0;
                    height: 1px;
                    background-color: black;
                    content: "";
                    position: absolute;
                    bottom: 0px;
                    left: 0;
                    transition: width 0.1s ease-in;
                }

                &:hover {
                    &:after {
                        width: 100%;
                    }
                }
            }
        }
    }


    &.open-grid {
        @media (min-device-width: 769px) {
            width: 170px;
        }
        transition: 0.2s, 0.1s ease-in;
        transition-property: height, width;
        width: 100%;
        transition-delay: 0.35s, 0.3s;
        height: 160px;
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
        }
    }

    .label {
        @media (min-device-width: 769px) {
            margin-top: -25px;
            margin-bottom: 24px;
            text-align: left;
            margin-left: 24px;
        }
        font-family: 'Roboto Mono', monospace;
        font-weight: bold;
        font-size: 12px;
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
        position: absolute;
        bottom: 0;
    }
}
</style>