<script setup lang="ts">
import { reactive, ref } from 'vue';


const user = reactive({
    nombres: ref(''),
    apellidos: ref('')
})

function guardar() {

}
</script>
<template>
    <div >
        <div class="mt-2">
            <h5>Principales Contactos</h5>
        </div>
        <div class="mt-2">
            <h5>Contactame</h5>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="my-2">
                    <label >Nombres</label>
                    <input type="text" class="form-control" v-model="user.nombres">
                </div>
                <div class="my-2">
                    <label >Apellidos</label>
                    <input type="text" class="form-control" v-model="user.apellidos">
                </div>
                <button class="btn btn-success"
                    @click="guardar"
                    >Guardar</button>
            </div>
        </div>
    </div>
</template>