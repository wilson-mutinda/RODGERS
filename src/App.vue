<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <div class="">
    <Navbar />
    <div class="h-16"></div>
    <RouterView/>
    <Footer />
  </div>
</template>