<template>
    <div class="about">
        <p><b>Andreia nunca gostou de escrever na terceira pessoa.</b></p>
        <p>
            <br>Posto isto, há muito mais que posso dizer sobre mim, mas falemos das palavras - que é o que importa aqui. Gosto delas, sempre gostei, mas só percebi relativamente tarde que podia ter enveredado logo por aí. Meti-me nas ciências primeiro, estudei e exerci medicina veterinária por amor aos animais, mas o amor às letras acabou por falar mais alto. Pelo meio veio a indústria farmacêutica. Foi aí que conheci os redactores publicitários e pensei: gosto disto. 


             <p>Agora faço o que me faz feliz, e a melhor parte?
             <br>A minha cadela nunca precisa de ir ao médico.

        </p>
        <p>Falamos?
            <br><a href="mailto:hello@andreia.lu">hello@andreia.lu</a>
        </p>
        <p>
          <b>PRÉMIOS.</b>
          <br><b>CCP</b> Ouro - <a href="https://assets.bondlayer.com/nr1dxae7lw/_assets/n7v0ky4zsdbnurtrmpneaa.pdf">conto literário</a>, Jovens Talentos Delta Q, 2020 
          <br><b>CCP</b> Shortlist - imprensa, Jovens Talentos Delta Q, 2020
          <br><b>Young Lions</b> Shortlist - filme, 2018
          <br><b>CCP</b> Prata - melhor campanha de rádio, Novo Banco, 2017
          <br><b>Restart</b> Melhor aluno do curso, 2016
          <br><b>Colégio</b> Melhor poema sobre Timor, 1999 
        </p>

        <p>
          <b>EXPERIÊNCIA.</b>
        <br><b>BBDO</b> Lisboa
        <br>Redactora publicitária, Nov. 2016 - presente
        <br><span></span>Clientes: McDonald’s, Mercedes-Benz, smart, Água das Pedras, Super Bock, Sandeman, Novo Banco, Pingo Doce, Cafés Tofa, Buondi, Gallo, Barral</p>

        <p><b>Wunderman</b> Lisboa
        <br>Redactora publicitária estagiária, Ago. 2016 - Nov. 2016
        <br>Clientes: Milaneza, Labello, Harmony, Nivea, Europcar, Opel, A Tabaqueira
        </p>

        <p><b>Ogilvy</b> Lisboa
        <br>Redactora publicitária freelance, Jul. 2016 
        <br>Clientes: Unitel, Germano de Sousa, Pedigree
        <br>(Foi aqui que eu percebi: é isto.)
        </p>

        <p><b>Grand Union</b>  Lisboa
        <br>Gestora de Projecto, Mai. 2016 - Jul. 2016
        <br>Clientes: Leroy Merlin, EDP, Samsung
        <br>(Foi aqui que eu percebi: vou só parar de mentir sobre as minhas skills de Excel.)
        </p>

        <p><b>The Janssen Pharmaceutical Companies of Johnson & Johnson</b>
        <br>Assistente de Marketing, Abr. 2014 - Mai. 2015
        <br>Clinical Advisor Imunologia, Jul. 2015-Dez.2015
        <br>(Foi aqui eu eu percebi: acho que era mais feliz no departamento de comunicação.)
        </p>

        <p><b>Hospital Veterinário Principal & Clivipet Portugal</b>
        <br>Médica Veterinária, Mai. 2012 - Abr. 2014
        <br>(Foi aqui que eu percebi: não era bem disto que eu estava à espera.)
        </p>

        <p>
          <b>EDUCAÇÃO.</b>
        <br><b>Restart</b> Lisboa
        <br>Criatividade publicitária, Out. 2015 - Mai. 2016
        </p>

        <p><b>Faculdade de Medicina Veterinária</b> Lisboa
        <br>Mestrado Integrado em Medicina Veterinária, Set. 2007 - Fev. 2012
        </p>

        <p><b>Szent István Egyetem</b> Budapeste
        <br>Programa Erasmus, Set. 2008 - Set. 2009
        </p>

        <p><b>University of Cambridge</b> ESOL Examination
        <br>CAE (certificate in advanced english), Jun. 2008 - sem validade
        </p>

        <p>
          <b>OUTRAS "SKILLS".</b>
        <br>Ter demasiados passatempos.
        </p>

        <p>
          <b>AVISO:</b> É o que é. Não há cá ghosts.
        </p>

        <div class="hotlinks">
            
            <div class="link-box">
                <a href="https://www.linkedin.com/in/andreia-lu%C3%ADsa-8a391b41/">
                    <img src="~/assets/li-small.png" /> <span>LinkedIn</span>
                </a>
                <a href="https://www.instagram.com/andreia_lluisa/?hl=pt">
                    <img src="~/assets/ig-small.png" /> <span>Instagram</span>
                </a>
            </div>
        </div>
        <footer></footer>
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
    @media (min-device-width: 769px) {
        padding-left: 200px;
        max-width: 800px;
        margin: 0 auto 0 350px;
    }
    margin-top: 300px; 
    padding: 32px;
    font-family: 'Roboto', sans-serif;
    font-weight: lighter;
    .link-box {
        a {
            @media (min-device-width: 769px) {
                line-height: 16pt;
                font-size: 16px;
            }
            display: inline-flex;
            align-items: center;
            text-decoration: none;
            color: black;
            padding-right: 16px;
            font-size: 28px;
            line-height: 28pt;
            img {
                @media (min-device-width: 769px) {
                    max-width: 25px;
                }
                max-width: 50px;
                padding-right: 4px;
            }
        }
    }
}
</style>