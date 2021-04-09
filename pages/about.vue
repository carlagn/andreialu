<template>
    <div class="about">
        <p><b>Andreia never liked to write in the third person.</b></p>
        <p>
            <br>That being said, there is so much more I can say about me, but let's talk about the words - the thing that matters here. I like words, always have, but it was not until late that I realized I could have gone straight for it. I got into medicine first. I studied and practised veterinary medicine for the love of animals, but the love for words eventually spoke louder. In between came the pharma industry. That's where I met the copywriters and thought: hey, I like that.


             <p>Now I do what makes me happy, and the best part?
             <br>My dog never needs to go to the doctor.



        </p>
        <p>
            But enough about me, tell me about yourself.
            <br><a href="mailto:hello@andreia.lu">hello@andreia.lu</a>
        </p>
        <p>
          <b>AWARDS.</b>
          <br><b>CCP</b> Gold - short story, Jovens Talentos Delta Q, 2020
          <br><b>CCP</b> Shortlist - print, Jovens Talentos Delta Q, 2020
          <br><b>Young Lions</b> Shortlist - film, 2018
          <br><b>CCP</b> Silver - best radio campaign, Novo Banco, 2017
          <br><b>Restart</b> Best student, 2016
          <br><b>Colégio</b> Best poem about Timor, 1999 
        </p>

        <p>
          <b>EXPERIENCE.</b>
        <br><b>BBDO</b> Lisbon
        <br>Copywriter, Nov. 2016 - present
        <br><span></span>Clients: McDonald’s, Mercedes-Benz, smart, Água das Pedras, Super Bock, Sandeman, Novo Banco, Pingo Doce, Cafés Tofa, Buondi, Gallo, Barral</p>

        <p><b>Wunderman</b> Lisbon
        <br>Intern copywriter, Aug. 2016 - Nov. 2016
        <br>Clients: Milaneza, Labello, Harmony, Nivea, Europcar, Opel, A Tabaqueira
        </p>

        <p><b>Ogilvy</b> Lisbon
        <br>Freelance copywriter, Jul. 2016 
        <br>Clients: Unitel, Germano de Sousa, Pedigree
        <br>(this is where I realized: this is it.)
        </p>

        <p><b>Grand Union</b>  Lisbon
        <br>Project Manager, May 2016 - Jul. 2016
        <br>Clients: Leroy Merlin, EDP, Samsung
        <br>(this is where I realized: I’ll just stop lying about my Excel expertise.)
        </p>

        <p><b>The Janssen Pharmaceutical Companies of Johnson & Johnson</b>
        <br>Clinical Advisor Immunology, Jul. 2015-Dec.2015
        <br>(this is where I realized: the grass is greener in the communication department.)
        </p>

        <p><b>The Janssen Pharmaceutical Companies of Johnson & Johnson</b>
        <br>Marketing assistant, Apr. 2014 - May 2015
        </p>

        <p><b>Hospital Veterinário Principal & Clivipet Portugal</b>
        <br>Veterinary surgeon, May 2012 - Apr. 2014
        <br>(this is where I realized: this is not it.)
        </p>

        <p>
          <b>EDUCATION.</b>
        <p><b>Restart</b> Lisbon
        <br>Criatividade publicitária, Oct. 2015 - May 2016
        </p>

        <p><b>Faculdade de Medicina Veterinária</b> Lisbon
        <br>Masters in Veterinary Medicine, Sep. 2007 - Feb. 2012
        </p>

        <p><b>Szent István Egyetem</b> Budapest
        <br>Erasmus programme, Sep. 2008 - Sep. 2009
        </p>

        <p><b>University of Cambridge</b> ESOL Examination
        <br>CAE (certificate in advanced english), Jun. 2008 - no expiration
        </p>

        <p>
          <b>OTHER SKILLS.</b>
        <br>Having too many hobbies.
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
        margin-left: 350px;
        max-width: 800px;
        margin: 0 auto;
    }
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