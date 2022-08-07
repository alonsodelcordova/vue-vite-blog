<script lang="ts" setup >

import { ref } from 'vue';
import articles from '../data/articles.json';
import Articulos from '../components/Articulos.vue';
import { Article } from '../models/Articulo';

const listArticulos = ref(<Article[]>articles.data);

</script>
<template>

    <h3 class="text-center">Proyectos</h3>
    <div class="main-cards">
        <Articulos :list-articulos="listArticulos" :id="1"/>
    </div>
     <h3 class="text-center">Listas</h3>
    <div class="main-cards">
        <Articulos :list-articulos="listArticulos" :id="2"/>
    </div>
</template>
<style scoped>
.main-cards {
    margin: 1rem auto;
    max-width: 900px;
}

</style>
