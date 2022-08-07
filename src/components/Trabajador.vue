<script setup lang="ts">
import { Equipo } from '../models/Equipo';

const props = defineProps<{
    persona: Equipo
}>()

</script>
<template>
    <div class="card card-body my-2">
        <h4 class="fw-bold text-uppercase">
            {{ props.persona.name }}
        </h4>
        <h6>{{ props.persona.position }}</h6>
        <span>Email: {{ props.persona.email }}</span>
        <span>Celular: {{ props.persona.phone }}</span>
        <span>Horario de Atencion: {{ props.persona.atention_horary }}</span>

        <b>"{{ props.persona.message }}"</b>
    </div>
</template>

<style scoped>
.card {
    background-color: rgba(74, 228, 81, 0.5);
}
</style>
