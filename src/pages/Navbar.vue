<script setup lang="ts">
import { ref } from 'vue';

const collapse = ref(true);
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-success navbar-dark">
        <div class="container-fluid container-lg">
            <router-link class="navbar-brand" to="/">INGRA </router-link>
            <button class="navbar-toggler" type="button" @click="collapse=!collapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse d-lg-flex justify-content-lg-end" :class="{collapse}">
                <ul class="navbar-nav  mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="contact">Contacto</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="about">Nosotros</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="form">Formulario</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>