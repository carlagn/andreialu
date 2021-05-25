<template>
    <div class="project-wrapper">
        <div class="content-minus-pag">
            <div class="title-section">
                <h1 class="title">Winona</h1>
                <h2 class="subtitle">Wine on paper.</h2>
            </div>
            <div class="project-content">
                <!-- <h3>This is a tagline</h3> -->

                <p>We miss DIY, so we decided to drink and draw a zine about wines. A very productive excuse to go for a drink. Besides tasting incredible wines, we interviewed small Portuguese producers, recommended some of the best taverns and “vinhos da casa” in Lisbon, paired wine with music and even had a launch party.
 
                <Img :source="'winona/winona_poster.png'" :zoom="true" />
                <br>The first issue was red and all about red wine.</p>

                <Img :source="'winona/winona_foto.png'" :zoom="true"/>
        
               <div>
                <Img :source="'winona/winona1.png'" :zoom="true"/>
                <Img :source="'winona/winona2.png'" :zoom="true"/>
                <Img :source="'winona/winona3.png'" :zoom="true"/>
                <Img :source="'winona/winona4.png'" :zoom="true"/>
                <Img :source="'winona/winona5.png'" :zoom="true"/>
                <Img :source="'winona/winona6.png'" :zoom="true"/>
                <Img :source="'winona/winona7.png'" :zoom="true"/>
                <Img :source="'winona/winona8.png'" :zoom="true"/>
             
                </div>

                <p> The next issue will be sparkling and it's already in the barrels. Cheers!</p>

                <p class="credits"><b>Zine, editorial</b> Words & photography: Andreia Luísa, Marta Santos Design: Marta Santos Wine expertise: Patrícia Pombo & Pour Decisions </p>
            </div>
        </div>
        <Pagination  />
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