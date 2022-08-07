<script setup lang="ts">
import { ref } from 'vue';

const monto = ref('')
const count = ref(0);
function incrementar(value: number) {
  count.value += value
};
function restar(value: number) {
  count.value -= value
};
</script>

<template>
  <div class="my-3">
    <h1>Vue + Vite</h1>

    <div >
      <input type="number" class="form-control" v-model="monto">
      <div class="my-2">
        <button type="button" class="btn btn-danger mx-2" @click="restar(Number(monto || 0))">
          Restar
        </button>
        <button type="button" class="btn btn-success mx-1" @click="incrementar(Number(monto || 0))">
          Aumentar
        </button>
      </div>
    </div>
    Resultado: {{ count }}
  </div>
</template>

