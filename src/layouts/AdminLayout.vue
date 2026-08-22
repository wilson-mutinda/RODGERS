<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import type { InquiryNotification } from '@/stores/inquiry'
import { useNotificationStore } from '@/stores/notification'
import { ref, onMounted, watch, onBeforeMount, onBeforeUnmount } from 'vue'

const sidebarOpen = ref(true)
const isDark = ref(false)

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
  window.location.href = '/login'
}

const appStore = useAppStore()

const triggerRefresh = appStore.triggerRefresh

const notificationStore = useNotificationStore()

const showNotifications = ref(false)

const handleNotificationClick = async (notification: InquiryNotification) => {
  await notificationStore.markAsRead(notification.id)
  showNotifications.value = false
}

// Close dropdown when clicking outside (optional)
const toggleDropdown = () => {
  showNotifications.value = !showNotifications.value
}

// Load notifications on mount
onMounted(async () => {
  isDark.value = localStorage.getItem('theme') === 'dark'
  if (isDark.value) document.documentElement.classList.add('dark')

  await notificationStore.load()
})

// Watch refresh trigger
watch(() => appStore.refreshTrigger,
async () => {
  await notificationStore.load()
})

// Auto -refresh every 30 seconds
let pollTimer: number | null = null

onMounted(() => {
  pollTimer = window.setInterval(() => {
    notificationStore.load()
  }, 30000)
})

onBeforeUnmount(() => {
  if (pollTimer) clearInterval(pollTimer)
})

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
          <div class="relative">
            <button
             @click="toggleDropdown" 
             class="relative text-xl hover:scale-110 transition"
            >
              🔔
              <span
               v-if="notificationStore.unreadCount > 0" 
               class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
               {{ notificationStore.unreadCount }}
              </span>
            </button>

            <!-- DropDown -->
             <div
              v-if="showNotifications" 
              class="absolute right-0 mt-2 w-80 bg-white dark:bg-[#0f2a3a] rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
            >
              <div class="p-3 border-b border-gray-200 dark:border-gray-700">
                <strong>Notifications</strong>
              </div>

              <div v-if="notificationStore.unreadList.length === 0" class="p-4 text-center text-gray-500">
                No new Notifications
              </div>

              <div v-else class="max-h-60 overflow-y-auto">
                <div v-for="n in notificationStore.unreadList" :key="n.id" @click="handleNotificationClick(n)" class="p-3 hover:bg-gray-100 dark:hover:bg-[#1a3b4f] cursor-pointer border-b border-gray-100 dark:border-gray-700">
                  <p class="font-semibold">{{ n.name }}</p>
                  <p class="text-sm text-gray-500 truncate">{{ n.message }}</p>
                  <p class="text-xs text-gray-400">{{ new Date(n.created_at).toLocaleString() }}</p>
                </div>
              </div>

              <!-- View all link -->
               <div class="p-2 border-t border-gray-200 dark:border-gray-700 text-center">
                <router-link to="/admin/consultations" class="text-sm text-[#9A6829] hover:underline">
                  View All Consultations
                </router-link>
               </div>
             </div>
          </div>

          <!-- DARK MODE -->
          <button
            @click="toggleDark"
            class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:scale-110 transition"
          >
            <span v-if="isDark">🌙</span>
            <span v-else>☀️</span>
          </button>

          <!-- REFRESH BUTTON -->
           <button @click="triggerRefresh" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:scale-110 transition">
            🔄
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