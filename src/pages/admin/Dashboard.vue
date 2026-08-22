<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useBlogStore } from '@/stores/blog'
import { useInquiryStore } from '@/stores/inquiry'
import { useAppStore } from '@/stores/app'
import { useNotificationStore } from '@/stores/notification'
import type { ChartData } from 'chart.js'
import LineChart from '@/components/LineChart.vue'

const auth = useAuthStore()
const blogStore = useBlogStore()
const inquiryStore = useInquiryStore()
const notificationStore = useNotificationStore()

// ---------- Greeting & live clock ----------
const currentTime = ref(new Date())

let timer: number | null = null

const formattedDate = computed(() => {
  const d = currentTime.value
  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

const formattedTime = computed(() => {
  return currentTime.value.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
})

const username = computed(() => {
  return auth.user?.first_name || auth.user?.username || 'Admin'
})

// ---------- Stats (dynamic) ----------
const consultations = computed(() => inquiryStore.inquiries.length)    // TODO: fetch from API
const messages = computed(() => inquiryStore.inquiries.length)         // TODO: fetch from API
const blogs = computed(() => blogStore.posts.length)
const unreadConsultations = computed(() => notificationStore.unreadCount)

// Example dummy recent data – replace with real API calls later
const recentConsultations = computed(() => {
  return inquiryStore.inquiries.slice(0, 5).map(i => ({
    name: i.name,
    type: 'Inquiry',
    date: new Date(i.created_at).toLocaleDateString()
  }))
})

const recentMessages = computed(() => {
  return inquiryStore.inquiries.slice(0, 5).map(i => ({
    name: i.name,
    subject: i.message.substring(0, 30) + '...',
    date: new Date(i.created_at).toLocaleDateString()
  }))
})

// ---------- Lifecycle ----------
onMounted(async () => {
  // Load blog and inquiry data
  await Promise.all([
    blogStore.load(),
    inquiryStore.load(),
    notificationStore.load()
  ])

  // Start live clock
  timer = window.setInterval(() => {
    currentTime.value = new Date()
  }, 1000)

  // 🔄 Auto-refresh every 30 seconds (optional)
  const refreshTimer = setInterval(async () => {
    await inquiryStore.load()
    await notificationStore.load()
  }, 30000)

  // Store the interval to clear it
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})

const appStore = useAppStore()

watch(
  () => appStore.refreshTrigger,
  async () => {
    // Reload all data
    await Promise.all([
      blogStore.load(),
      inquiryStore.load(),
      notificationStore.load()
    ])
  }
)

const monthlyData = computed(() => {
  const now = new Date()
  const map = new Map<string, number>()
  inquiryStore.inquiries.forEach(inq => {
    const d = new Date(inq.created_at)
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
    map.set(key, (map.get(key) || 0) + 1)
  })
  const labels: string[] = []
  const data: number[] = []
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1)
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
    labels.push(d.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    }))
    data.push(map.get(key) || 0)
  }
  return {
    labels,
    data
  }
})

const chartData = computed(() => ({
  labels: monthlyData.value.labels,
  datasets: [
    {
      label: 'Consultations',
      data: monthlyData.value.data,
      borderColor: '#9A6829',
      backgroundColor: 'rgba(154, 104, 41, 0.2)',
      tension: 0.3,
      fill: true,
      pointBackgroundColor: '#9A6829'
    }
  ]
}))

</script>

<template>
  <div class="space-y-8">

    <!-- PAGE TITLE & GREETING -->
    <div class="bg-gradient-to-r from-[#9A6829] to-[#b8833a] text-white p-6 rounded-2xl shadow-lg">
      <h1 class="text-2xl font-bold">
        Welcome back, {{ username }} 👋
      </h1>
      <p class="text-white/80 text-sm mt-1">
        {{ formattedDate }} · {{ formattedTime }}
      </p>
      <p class="text-white/60 text-xs mt-2">
        Here&apos;s what&apos;s happening with your firm today.
      </p>
    </div>

    <!-- STATS -->
    <div class="grid md:grid-cols-4 gap-6">

      <div class="stat-card">
        <h3>{{ consultations }}</h3>
        <p>Consultations</p>
      </div>

      <div class="stat-card">
        <h3>{{ messages }}</h3>
        <p>Messages</p>
      </div>

      <div class="stat-card">
        <h3>{{ blogs }}</h3>
        <p>Blog Posts</p>
      </div>

      <div class="stat-card">
        <h3>{{ unreadConsultations }}</h3>
        <p>Unread</p>
      </div>

    </div>

    <!-- CHART PLACEHOLDER (future) -->
    <div class="card h-64">
      <h2 class="text-lg font-semibold mb-4">Monthly Consultations</h2>
      <div class="h-48">
        <line-chart :chart-data="chartData" />
      </div>
    </div>

    <!-- RECENT ACTIVITY -->
    <div class="grid md:grid-cols-2 gap-6">

      <!-- CONSULTATIONS -->
      <div class="card">
        <h2 class="font-semibold mb-4">Recent Consultations</h2>
        <div class="space-y-3">
          <div
            v-for="c in recentConsultations"
            :key="c.name"
            class="activity-item"
          >
            <div>
              <p class="font-semibold">{{ c.name }}</p>
              <p class="text-xs text-gray-500">{{ c.type }}</p>
            </div>
            <span class="text-xs text-gray-400">{{ c.date }}</span>
          </div>
        </div>
      </div>

      <!-- MESSAGES -->
      <div class="card">
        <h2 class="font-semibold mb-4">Recent Messages</h2>
        <div class="space-y-3">
          <div
            v-for="m in recentMessages"
            :key="m.name"
            class="activity-item"
          >
            <div>
              <p class="font-semibold">{{ m.name }}</p>
              <p class="text-xs text-gray-500">{{ m.subject }}</p>
            </div>
            <span class="text-xs text-gray-400">{{ m.date }}</span>
          </div>
        </div>
      </div>

    </div>

    <!-- QUICK ACTIONS -->
    <div class="card text-center">
      <h2 class="font-semibold mb-6">Quick Actions</h2>
      <div class="flex flex-wrap justify-center gap-4">
        <router-link to="/admin/blog" class="btn-primary">
          ➕ New Blog
        </router-link>
        <router-link to="/admin/consultations" class="btn-secondary">
          📅 View Consultations
        </router-link>
        <router-link to="/admin/messages" class="btn-secondary">
          📩 View Messages
        </router-link>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* Keep your existing styles */
.stat-card {
  background: white;
  padding: 20px;
  border-radius: 14px;
  text-align: center;
  font-weight: 600;
  box-shadow: 0 6px 20px rgba(0,0,0,0.05);
}
.dark .stat-card {
  background: #0f2a3a;
}
.stat-card h3 {
  font-size: 28px;
  color: #9A6829;
}
.stat-card p {
  font-size: 14px;
  color: gray;
}
.card {
  background: white;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.05);
}
.dark .card {
  background: #0f2a3a;
}
.activity-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #F5F7FA;
  padding: 12px;
  border-radius: 10px;
}
.dark .activity-item {
  background: #061C2A;
}
.btn-primary {
  background: #9A6829;
  color: white;
  padding: 10px 18px;
  border-radius: 999px;
  font-weight: 600;
}
.btn-secondary {
  border: 1px solid #9A6829;
  color: #9A6829;
  padding: 10px 18px;
  border-radius: 999px;
}
</style>