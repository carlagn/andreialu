<template>
    <div class="sidebar-wrapper">
        <div class="sidebar-box">
            <div @click="backToTop()" class="logo-box">
                <img src="~/assets/logo.png" />
                <span class="label">copywriter.</span>
            </div>
            <div class="intro-box">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenean sed orci convallis, ultrices elit at, lacinia ante.
                Praesent quam felis, lobortis nec rhoncus quis, vestibulum at purus.
                Etiam leo quam, rutrum ut egestas eget, porta fringilla orci.
            </div>
            <div class="hotlinks">
                Find me at:
            </div>
            <div class="link-box">
                [lo][lo][lo]
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  watch: {
    $route(to, from) {
      console.log(to, from);
    }
  },
  methods: {
      backToTop() {
        this.$store.commit("setSidebar", "");
        const scroll = setInterval(() => {
            document.querySelector('.grid-wrapper').scrollLeft -=20;
            if (document.querySelector('.grid-wrapper').scrollLeft === 0) clearInterval(scroll);
        }, 1);
      }
  }
})
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
    .sidebar-wrapper {
        width: 500px;
        height: 100vh;

        .logo-box {
            display: block;
        }

        .label {
            margin-top: -25px;
            margin-bottom: 24px;
            text-align: center;
        }

        img {
            max-width: 150px;
            margin: 30% auto 0 auto;
        }
        .intro-box, .hotlinks, .link-box {
            display: block;
        }

        &.open-grid {
            width: 100px;
        }
    }
}
.sidebar-wrapper {

    position: absolute;
    background-color: white;
    font-family: 'Castoro', serif;
    height: auto;
    width: 100%;

    .logo-box {
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    &.open-grid {
        width: 100%;
        display: flex;
        align-items: center;
        .intro-box, .link-box, .hotlinks{
            display: none;
        }

        img {
            margin-top: 0;
            max-width: 100px;
        }
    }

    .label {
        font-size: 12px;
        display: block;
        text-decoration: underline;
    }

    img {
        display: block;
        max-width: 100px;
    }
    &.open {
        &::after {
            background: black;
        }
    }

    .intro-box, .hotlinks, .link-box {
        padding: 10px 30px;
        display: none;
    }
}
</style>