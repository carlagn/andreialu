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

                <p>I love words and animals, so I try to help the latter with words whenever I can. Love was the word in these campaigns I did for "Amor Rafeiro", a group of citizens committed to animal protection and welfare. We did an outdoor and social media campaign to raise awareness on subjects such as adoption and illegal dog chaining.</p>
               
               <div>
                <Img :source="'amor-rafeiro/amor1.png'" />

                <p> <b>Não deixe o amor ao abandono/ Don't abandon love.</b> Abandoning a pet is abandoning love. We showed it with an outdoor campaign before the holidays, when abandonment rates are higher. All the models were rescued animals. </p>
                <Img :source="'amor-rafeiro/amor3.png'" />
                <Img :source="'amor-rafeiro/amor2.png'" />


                <p><b>O amor não se compra. Mas pode adotá-lo/ You can't buy love. But you can adopt it.</b> The Beatles said it before: can't buy me love. Yeah, but you can surely adopt it. We did a photoshoot with animals from the shelter available for adoption and the results where tail-waggin' good.</p>

                <Img :source="'amor-rafeiro/amor10.png'" />

                <p> <b>O amor liberta/ Love sets you free.</b> We worked with "Almada sem Correntes", a group that raises awareness on the subject of illegal dog chaining and created a brand plus an outdoor campaign. The good boy on the photo is Snoopy, one of the dogs unchained by the group. I also did the portrait and had to do all these crazy bird sounds so that he could stand still for the picture. It turned out all right.</p>

                <Img :source="'amor-rafeiro/amor4.png'" />

                <Img :source="'amor-rafeiro/amor5.png'" />

                <p> Behold my dog, Eva, also a rescue dog, in front of a HUGE outdoor of her. Look at her proud stance. <br> Nepotism? Where?</p>

                <Img :source="'amor-rafeiro/amor8.png'" />

                <p> <b>CATalogue.</b>I'm more of a dog person, but we can't forget about cats. Had this idea for an adoption campaign in partnership with Leroy Merlin. Because a cozy house calls for a little ball of fur.</p>
                <Img :source="'amor-rafeiro/amor6.png'" :zoom="true"/>
              
               
             
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