<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { computed } from 'vue';

const route = useRoute()
const isAdminRoute = computed(() => route.path.startsWith('/admin'))

</script>

<template>
  <div>
    <Navbar v-if="!isAdminRoute" />
    <div class="h-16"></div>

    <!-- PAGE TRANSITION -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <Footer v-if="!isAdminRoute" />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
