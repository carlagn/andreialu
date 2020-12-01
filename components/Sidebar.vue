<template>
    <div class="sidebar-wrapper">
        <div class="sidebar-box">
            <img src="~/assets/logo.png" />
            <span class="label">copywriter.</span>
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

})
</script>

<style lang="scss" scoped>
.sidebar-wrapper {
    position: relative;
    height: 100vh;
    width: 500px;
    font-family: 'Castoro', serif;

    .label {
        font-size: 12px;
        margin-top: -25px;
        display: block;
        text-align: center;
        margin-bottom: 24px;
        text-decoration: underline;
    }

    img {
        margin-top: 30%;
        margin: 30% auto 0 auto;
        display: block;
        max-width: 150px;
    }
    &::before {
        content: "";
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.7;
    }
    &.open {
        &::after {
            background: black;
        }
    }

    .intro-box, .hotlinks, .link-box {
        padding: 10px 30px;
    }
}
</style>