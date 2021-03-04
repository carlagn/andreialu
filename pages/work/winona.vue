<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">Winona</h1>
                <h2 class="subtitle">Wine on paper.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->
                 <p class="credits">Zine, editorial</p>

                <p>We miss DIY, so me and 2 friends decided to drink and draw a zine about wines. A very productive excuse to go for a drink. Nothing fancy. No fine tastings, nor fear of stains.Thus Winona was born!</p>

                <p>Besides drinking - pardon... tasting - and getting to know small Portuguese producers and their incredible wines, we interviewed, we recommended some of the best taverns and “vinhos da casa” in Lisbon, we paired wine with music and we even partied with Pour Decisions on the terrace of galeria Zé dos Bois. 
                <img class="media" src="~/assets/winona/winona_poster.png" />
                <br>The first issue was red and all about red wine.</p>

                <img class="media" src="~/assets/winona/winona_foto.png" />
        
                </p>
               
               <div>
                <img class="media" src="~/assets/winona/winona1.png" />
                <img class="media" src="~/assets/winona/winona2.png" />
                <img class="media" src="~/assets/winona/winona3.png" />
                <img class="media" src="~/assets/winona/winona4.png" />
                <img class="media" src="~/assets/winona/winona5.png" />
                <img class="media" src="~/assets/winona/winona6.png" />
                <img class="media" src="~/assets/winona/winona7.png" />
                <img class="media" src="~/assets/winona/winona8.png" />
             
                </div>

                <p> The next issue will be sparkling and it's already in the barrels. Cheers!</p>

                <p class="credits"><b>Personal project</b> Words: Andreia Luísa Design: Marta Santos Wine expertise: Patrícia Pombo & Pour Decisions </p>
            </div>
        </div>
        <Pagination  />
    </div>
</template>
<script>
import Vue from 'vue';
import { mapMutations } from 'vuex'
import Pagination from '../../components/Pagination.vue';

export default Vue.extend({
    components: {
        Pagination
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