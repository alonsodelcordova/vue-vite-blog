<script setup lang="ts">
import { ref } from 'vue';
import dataEquipo from '../data/equipo.json';
import { Equipo } from '../models/Equipo';
import Trabajador from '../components/Trabajador.vue';

const listEquipo = ref(<Equipo[]>dataEquipo.data);
</script>
<template>
    <div >
        <h5>Nuestro equipo</h5>
        <div class="row">
            <div class="col-md-4" v-for="persona of listEquipo">
                <Trabajador :persona="persona" />
            </div>
        </div>

    </div>
</template>

<style scoped>

</style>