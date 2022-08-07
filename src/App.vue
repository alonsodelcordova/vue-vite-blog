<script setup lang="ts">
import Navbar from './pages/Navbar.vue';
</script>

<template>
  <Navbar />
  <div class="container-fluid container-lg mt-3">
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
