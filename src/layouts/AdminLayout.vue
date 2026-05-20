<script setup lang="ts">
import { ref, onMounted } from 'vue'

const sidebarOpen = ref(true)
const isDark = ref(false)

onMounted(() => {
  isDark.value = localStorage.getItem('theme') === 'dark'
  if (isDark.value) document.documentElement.classList.add('dark')
})

const toggleSidebar = () => sidebarOpen.value = !sidebarOpen.value

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

const logout = () => {
  localStorage.removeItem('token')
  window.location.href = '/admin-login'
}
</script>

<template>
  <div class="flex min-h-screen bg-[#F9FAFB] dark:bg-[#061C2A] text-[#061C2A] dark:text-white">

    <!-- SIDEBAR -->
    <aside
      :class="[
        'fixed md:relative z-50 h-full backdrop-blur-lg bg-white/80 dark:bg-[#0f2a3a]/80 border-r border-gray-200 dark:border-gray-700 transition-all duration-300',
        sidebarOpen ? 'w-64' : 'w-20'
      ]"
    >

      <!-- LOGO -->
      <div class="flex items-center justify-between px-4 py-5">
        <span v-if="sidebarOpen" class="text-xl font-bold text-[#9A6829]">
          Admin Panel
        </span>

        <button @click="toggleSidebar" class="text-lg hover:scale-110 transition">
          ☰
        </button>
      </div>

      <!-- NAV -->
      <nav class="mt-6 flex flex-col gap-2 px-2">

        <router-link to="/admin/dashboard" class="nav-item">
          <span>🏠</span>
          <span v-if="sidebarOpen">Dashboard</span>
        </router-link>

        <router-link to="/admin/consultations" class="nav-item">
          <span>📅</span>
          <span v-if="sidebarOpen">Consultations</span>
        </router-link>

        <router-link to="/admin/messages" class="nav-item">
          <span>📩</span>
          <span v-if="sidebarOpen">Messages</span>
        </router-link>

        <router-link to="/admin/blog" class="nav-item">
          <span>📝</span>
          <span v-if="sidebarOpen">Blog CMS</span>
        </router-link>

      </nav>

    </aside>

    <!-- MAIN -->
    <div class="flex-1 flex flex-col">

      <!-- TOPBAR -->
      <header class="flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-[#0f2a3a]/80 backdrop-blur border-b border-gray-200 dark:border-gray-700">

        <!-- LEFT -->
        <div class="flex items-center gap-4">

          <!-- SEARCH -->
          <input
            type="text"
            placeholder="Search..."
            class="hidden md:block px-4 py-2 rounded-full bg-gray-100 dark:bg-[#061C2A] focus:outline-none text-sm"
          />

        </div>

        <!-- RIGHT -->
        <div class="flex items-center gap-4">

          <!-- NOTIFICATIONS -->
          <button class="relative text-xl hover:scale-110 transition">
            🔔
            <span class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <!-- DARK MODE -->
          <button
            @click="toggleDark"
            class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:scale-110 transition"
          >
            <span v-if="isDark">🌙</span>
            <span v-else>☀️</span>
          </button>

          <!-- USER -->
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-[#9A6829] flex items-center justify-center text-white text-sm">
              A
            </div>
            <span class="hidden md:block text-sm">Admin</span>
          </div>

          <!-- LOGOUT -->
          <button
            @click="logout"
            class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm transition"
          >
            Logout
          </button>

        </div>

      </header>

      <!-- CONTENT -->
      <main class="p-6 flex-1 overflow-y-auto">
        <router-view />
      </main>

    </div>

  </div>
</template>

<style scoped>
.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 10px;
  transition: 0.3s;
  font-size: 14px;
}

/* hover */
.nav-item:hover {
  background: rgba(154, 104, 41, 0.15);
}

/* active */
.router-link-active {
  background: #9A6829;
  color: white;
  position: relative;
}

/* LEFT BORDER ACCENT (premium feel) */
.router-link-active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 20%;
  height: 60%;
  width: 4px;
  background: white;
  border-radius: 4px;
}
</style>