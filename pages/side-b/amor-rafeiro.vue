<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title"> Amor <br> by Amor <br> Rafeiro</h1>
                <h2 class="subtitle">& other love stories.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->

                <p>I'm a dog person.</p>
               
               <div>
                <Img :source="'amor-rafeiro/amor1.png'" />

                <p> <b>Don't abandon love.</b> Abandoning a pet is abandoning love. We showed it with an outdoor campaign right before the holidays. All models are rescued animals. </p>
                <Img :source="'amor-rafeiro/amor3.png'" />
                <Img :source="'amor-rafeiro/amor2.png'" />


                <p><b>You can't buy love. But you can adopt it.</b> The Beatles said it before: can't buy me love. We did a photoshoot with animals from the shelter available for adoption and the results where tail-waggin' good.</p>

                <Img :source="'amor-rafeiro/amor10.png'" />

                <p> <b>Love sets you free.</b> We worked with "Almada sem Correntes", a group that raises awareness on the subject of illegal dog chaining and created a brand plus an outdoor campaign.</p>

                <Img :source="'amor-rafeiro/amor4.png'" />

                <Img :source="'amor-rafeiro/amor5.png'" />

                <p> Behold my dog Eva, in front of a HUGE outdoor of her. Look at her proud stance. <br> Nepotism? Where?</p>

                <Img :source="'amor-rafeiro/amor8.png'" />

                <p> And sometimes, just sometimes, I'm a cat person.</p>
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