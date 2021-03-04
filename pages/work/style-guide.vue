<template>
    <div class="project-wrapper">
        <div class="title-section">
            <h1 class="title">Título grande</h1>
            <h2 class="subtitle">Título menor</h2>
        </div>
        <div class="project-content">
            <h3>This is a tagline</h3>
            <p class="credits">(c) Aqui são os créditos, ou qualquer side-note que querias pôr a cinza.</p>
            <p>Um parágrafo. Tudo o que for aqui dentro, mesmo que separado por um "Enter", vai ser mostrado como texto corrido. Para evitar esta situação, podes fazer vários elementos iguais a este tal como no exemplo</p>
            <p>que</p>
            <p>estou aqui</p>
            <p>a mostrar</p>
            <p>Ou separar com esta chamada: <br> este elemento faz um parágrafo.</p>
            <video
                controls
                muted
                autoplay
                class="media"
                src="https://cdn-a.luerzersarchive.com/archive/submissions/tv_commercials/720/2018/317094.mp4?Expires=1609614723&Signature=GHeYQe3YeQ2j~cltAnM4nG17xQXDAz7EyRzXFZfea34bsdpO5R9RoWumey3Ldt1BDiS7ax5FhsLIatBJiLEMp6UyCl1z9fw~efQDP~awWLQ1SgtOaDC3HzHnZX3mqJkuwC1YXss0ri4Nq4IAmvRrJ2QwevR8s9gOgGR4G81IdHPBMNjs5P8vrDcz~QrmzZdOZ5AUulb1JT9yxNt4Bv-dDqMlJbiUTTzN1xlID9nsJUpGuTg7prWwvRmfG-OVOYgRODbDx0ShVpOVGe0iqd~Y5jwzVPBBPwCap76QEQpjcl4dYKjFKLBjOsibawaZ2MzbKRF-NdZ4h8SOqMm6iX7VOA__&Key-Pair-Id=APKAJXKTOLSPBG77KE6Q"
            ></video>
        </div>
        <!-- adicionar SEMPRE este elemento no fim para obter uma paginação concisa. -->
        <Pagination  />
    </div>
</template>

<script>
import Vue from 'vue'
import { mapMutations } from 'vuex'
import Pagination from '../../components/Pagination.vue'

export default Vue.extend({
    components: {
        Pagination
    },
    mounted() {
        this.$store.commit("setSidebar", "open-grid");
    },
    methods: {
        ...mapMutations([ "setSideBar" ])
    }
})
</script>