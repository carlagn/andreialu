<template>
    <div class="about">
        <p><b>Andreia nunca gostou de escrever na terceira pessoa.</b></p>
        <p>
            Posto isto… Olá.
            <br>Sou Andreia para uns, Luísa para outros. Copywriter para uns, veterinária para outros. Depende da fase da vida em que me apanhaste, mas digamos que estou a gostar muito desta fase. Não que seja só uma fase.
        </p>
        <p>
            Falamos?
            <br><a href="mailto:hello@andreia.lu">hello@andreia.lu</a>
        </p>
        <p><b>Andreia nunca gostou de escrever na terceira pessoa.</b></p>
        <p>
            Posto isto… Olá.
            <br>Sou Andreia para uns, Luísa para outros. Copywriter para uns, veterinária para outros. Depende da fase da vida em que me apanhaste, mas digamos que estou a gostar muito desta fase. Não que seja só uma fase.
        </p>
        <p>
            Falamos?
            <br><a href="mailto:hello@andreia.lu">hello@andreia.lu</a>
        </p>
        <p><b>Andreia nunca gostou de escrever na terceira pessoa.</b></p>
        <p>
            Posto isto… Olá.
            <br>Sou Andreia para uns, Luísa para outros. Copywriter para uns, veterinária para outros. Depende da fase da vida em que me apanhaste, mas digamos que estou a gostar muito desta fase. Não que seja só uma fase.
        </p>
        <p>
            Falamos?
            <br><a href="mailto:hello@andreia.lu">hello@andreia.lu</a>
        </p>
        <p><b>Andreia nunca gostou de escrever na terceira pessoa.</b></p>
        <p>
            Posto isto… Olá.
            <br>Sou Andreia para uns, Luísa para outros. Copywriter para uns, veterinária para outros. Depende da fase da vida em que me apanhaste, mas digamos que estou a gostar muito desta fase. Não que seja só uma fase.
        </p>
        <p>
            Falamos?
            <br><a href="mailto:hello@andreia.lu">hello@andreia.lu</a>
        </p>
        <p><b>Andreia nunca gostou de escrever na terceira pessoa.</b></p>
        <p>
            Posto isto… Olá.
            <br>Sou Andreia para uns, Luísa para outros. Copywriter para uns, veterinária para outros. Depende da fase da vida em que me apanhaste, mas digamos que estou a gostar muito desta fase. Não que seja só uma fase.
        </p>
        <p>
            Falamos?
            <br><a href="mailto:hello@andreia.lu">hello@andreia.lu</a>
        </p>
        <p><b>Andreia nunca gostou de escrever na terceira pessoa.</b></p>
        <p>
            Posto isto… Olá.
            <br>Sou Andreia para uns, Luísa para outros. Copywriter para uns, veterinária para outros. Depende da fase da vida em que me apanhaste, mas digamos que estou a gostar muito desta fase. Não que seja só uma fase.
        </p>
        <p>
            Falamos?
            <br><a href="mailto:hello@andreia.lu">hello@andreia.lu</a>
        </p>
        <p><b>Andreia nunca gostou de escrever na terceira pessoa.</b></p>
        <p>
            Posto isto… Olá.
            <br>Sou Andreia para uns, Luísa para outros. Copywriter para uns, veterinária para outros. Depende da fase da vida em que me apanhaste, mas digamos que estou a gostar muito desta fase. Não que seja só uma fase.
        </p>
        <p>
            Falamos?
            <br><a href="mailto:hello@andreia.lu">hello@andreia.lu</a>
        </p>
        <p><b>Andreia nunca gostou de escrever na terceira pessoa.</b></p>
        <p>
            Posto isto… Olá.
            <br>Sou Andreia para uns, Luísa para outros. Copywriter para uns, veterinária para outros. Depende da fase da vida em que me apanhaste, mas digamos que estou a gostar muito desta fase. Não que seja só uma fase.
        </p>
        <p>
            Falamos?
            <br><a href="mailto:hello@andreia.lu">hello@andreia.lu</a>
        </p>
        <p><b>Andreia nunca gostou de escrever na terceira pessoa.</b></p>
        <p>
            Posto isto… Olá.
            <br>Sou Andreia para uns, Luísa para outros. Copywriter para uns, veterinária para outros. Depende da fase da vida em que me apanhaste, mas digamos que estou a gostar muito desta fase. Não que seja só uma fase.
        </p>
        <p>
            Falamos?
            <br><a href="mailto:hello@andreia.lu">hello@andreia.lu</a>
        </p>
        <p><b>Andreia nunca gostou de escrever na terceira pessoa.</b></p>
        <p>
            Posto isto… Olá.
            <br>Sou Andreia para uns, Luísa para outros. Copywriter para uns, veterinária para outros. Depende da fase da vida em que me apanhaste, mas digamos que estou a gostar muito desta fase. Não que seja só uma fase.
        </p>
        <p>
            Falamos?
            <br><a href="mailto:hello@andreia.lu">hello@andreia.lu</a>
        </p>
        <div class="hotlinks">
            Encontra-me em:
            <div class="link-box">
                [lo][lo][lo]
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { mapMutations } from 'vuex';
export default Vue.extend({
    mounted() {
        this.$store.commit("setActivePage", "about")
    },
    methods: {
        ...mapMutations(["setActivePage"])
    }
})
</script>

<style lang="scss" scoped>
.about {
    margin-left: 350px;
    padding: 32px 32px 32px 200px;
    max-width: 800px;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    font-weight: lighter;
    @media (min-device-width: 769px) {
        padding-left: 32px;
        margin-top: 200px;
    }
}
</style>