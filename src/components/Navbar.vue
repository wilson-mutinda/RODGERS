<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const toggleMenu = () => menuOpen.value = !menuOpen.value

const isDark = ref(document.documentElement.classList.contains('dark'))

const toggleDark = () => {
  isDark.value = !isDark.value

  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-[#061C2A] text-white shadow-md">

    <div class="h-20 max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between">

      <!-- LOGO -->
      <div class="flex items-center gap-3">
        <img src="/rodgers-abdi-blue-bg.jpg" class="h-12 w-auto object-contain" />
        <span class="hidden md:block text-sm tracking-wide text-[#9A6829] font-semibold">
          Advocates
        </span>
      </div>

      <!-- DESKTOP NAV -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/practice-areas" class="nav-link">Practice Areas</router-link>
        <router-link to="/blog" class="nav-link">Blog</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>

        <!-- CTA -->
        <router-link to="/consultation" class="btn-gold">
          Book Consultation
        </router-link>

        <!-- 🌙 DARK MODE (AFTER CTA) -->
        <button 
          @click="toggleDark"
          class="flex items-center justify-center w-10 h-10 rounded-full 
                 bg-white/10 hover:bg-white/20 transition duration-300"
        >
          <span v-if="isDark">🌙</span>
          <span v-else>☀️</span>
        </button>
      </nav>

      <!-- RIGHT SIDE (MOBILE CONTROLS) -->
      <div class="flex items-center gap-3 md:hidden">

        <!-- 🌙 DARK MODE (VISIBLE ALWAYS) -->
        <button 
          @click="toggleDark"
          class="flex items-center justify-center w-10 h-10 rounded-full 
                 bg-white/10 hover:bg-white/20 transition duration-300"
        >
          <span v-if="isDark">🌙</span>
          <span v-else>☀️</span>
        </button>

        <!-- ☰ HAMBURGER -->
        <button @click="toggleMenu" class="text-2xl">
          ☰
        </button>

      </div>

    </div>

    <!-- MOBILE MENU -->
    <div
      v-if="menuOpen"
      class="md:hidden bg-[#061C2A] border-t border-gray-700 px-4 pb-4"
    >
      <div class="flex flex-col gap-4 mt-4 text-sm">
        <router-link @click="toggleMenu" to="/">Home</router-link>
        <router-link @click="toggleMenu" to="/about">About</router-link>
        <router-link @click="toggleMenu" to="/practice-areas">Practice Areas</router-link>
        <router-link @click="toggleMenu" to="/blog">Blog</router-link>
        <router-link @click="toggleMenu" to="/contact">Contact</router-link>

        <router-link
          @click="toggleMenu"
          to="/consultation"
          class="bg-[#9A6829] text-white text-center py-2 rounded-full font-semibold"
        >
          Book Consultation
        </router-link>
      </div>
    </div>

  </header>
</template>

<style scoped>
.nav-link {
  position: relative;
  transition: 0.3s;
}
.nav-link:hover {
  color: #9A6829;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0%;
  height: 2px;
  background: #9A6829;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.router-link-active {
  color: #9A6829;
}

.router-link-active::after {
  width: 100%;
}

.btn-gold {
  background: #9A6829;
  padding: 8px 18px;
  border-radius: 999px;
  font-weight: 600;
  transition: 0.3s;
}
.btn-gold:hover {
  background: #7c531f;
  transform: translateY(-2px);
}
</style>