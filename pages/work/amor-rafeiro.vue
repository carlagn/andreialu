<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title"> Amor <br> by Amor <br> Rafeiro</h1>
                <h2 class="subtitle">& other love stories.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                 <p class="credits">Print and outdoor campaigns</p>

                <p>Because my love for words was stronger, I changed my career from being a veterinary surgeon to become a copywriter. But my love for animals is still here, so I try to help them any time I can. Sometimes as a veterinarian, sometimes as a copywriter. That's why I decided to replace the word "animal" with the word "love" in a series of campaigns I did for the group "Amor Rafeiro", a group of citizens committed to building a better reality concerning animal protection and welfare in Almada. We did an outdoor and social media campaign that helped raise awareness on several subjects, such as adoption and illegal dog chaining.</p>
               
               <div>
                <Img :source="'amor-rafeiro/amor1.png'" />

                <p> <b>Não deixe o amor ao abandono.</b> Abandoning a pet is abandoning love. We decided to show that with an outdoor campaign before the holidays, when abandonment rates are higher. All the models were rescued animals. </p>
                <Img :source="'amor-rafeiro/amor3.png'" />
                <Img :source="'amor-rafeiro/amor2.png'" />


                <p><b>O amor não se compra. Mas pode adotá-lo.</b> The Beatles said it before: can't buy me love. Yeah, but you can surely adopt it. We did a photoshoot with animals from the shelter, available for adoption. The results where tail-waggin' good.</p>

                <Img :source="'amor-rafeiro/amor10.png'" />

                <p> <b>O amor liberta.</b> Dog chaining is illegal and cruel, love should set you free. We worked with "Almada sem Correntes", a group that raises awareness on the subject, created a brand for them and an outdoor campaign. The good boy on the photo is one of the unchained dogs, Snoopy. I also did the portrait and had to do all this crazy bird sounds so that he could stand still for the picture. It turned out all right.</p>

                <Img :source="'amor-rafeiro/amor4.png'" />

                <Img :source="'amor-rafeiro/amor5.png'" />

                <p> Behold my dog Eva, also  a rescue dog, in front of a HUGE outdoor of her. She was so proud. And so was I! <br> Nepotism what?</p>

                <Img :source="'amor-rafeiro/amor8.png'" />

                <p> <b>CATalogue.</b>I'm more of a dog person, but we can't forget about cats. Had this idea for an adoption campaign in partnership with Leroy Merlin. Because a cozy house calls for a little ball of fur.</p>
                <Img :source="'amor-rafeiro/amor6.png'" />
              
               
             
                </div>

                <p class="credits"><b>Pro bono Pro doggo</b> C: Andreia Luísa A.D: Tiago Gomes, Alberto Quintas C.D (CATalogue): Pedro Ferreira</p>
            </div>
        </div>
        <Pagination  />
        <footer></footer>
    </div>
</template>
<script>
import Vue from 'vue';
import { mapMutations } from 'vuex'
import Pagination from '../../components/Pagination.vue';
import Img from '../../components/Img.vue';

export default Vue.extend({
    components: {
        Pagination,
        Img
    },
    data() {
        return {
                    lang: "en"
                }
    },
    mounted() {
        this.$store.commit("setSidebar", "open-grid");
    },
    methods: {
        ...mapMutations([ "setSideBar" ]),
        setLang(str) {
            this.lang = str;
        }
    }
})
</script>