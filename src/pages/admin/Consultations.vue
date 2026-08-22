<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useInquiryStore, type InquiryNotification } from '@/stores/inquiry'
import { useNotificationStore } from '@/stores/notification'
import { useAppStore } from '@/stores/app'
import type { ChartData } from 'chart.js'
import LineChart from '@/components/LineChart.vue'

const inquiryStore = useInquiryStore()
const notificationStore = useNotificationStore()
const appStore = useAppStore()

// ---------- State ----------
const selected = ref<InquiryNotification | null>(null)
const filter = ref<'all' | 'new' | 'read'>('all')

// ---------- Computed ----------
const filteredConsultations = computed(() => {
  const list = inquiryStore.inquiries
  if (filter.value === 'all') return list
  const isNew = filter.value === 'new'
  return list.filter(c => c.is_read === !isNew) // if filter=new → is_read=false
})

// Chart data (monthly totals)
const monthlyData = computed(() => {
  const now = new Date()
  const map = new Map<string, number>()
  inquiryStore.inquiries.forEach(inq => {
    const d = new Date(inq.created_at)
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
    map.set(key, (map.get(key) || 0) + 1)
  })
  const labels = []
  const data = []
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

const chartData = computed<ChartData<'line', (number | null)[]>>(() => ({
  labels: monthlyData.value.labels,
  datasets: [
    {
      label: 'Consultations',
      data: monthlyData.value.data as (number | null)[], // explicit cast
      borderColor: '#9A6829',
      backgroundColor: 'rgba(154, 104, 41, 0.2)',
      tension: 0.3,
      fill: true,
      pointBackgroundColor: '#9A6829'
    }
  ]
}))

// For AI summary – we keep it as a mock, but you can later enhance
const getAISummary = (c: InquiryNotification) => {
  if (!c.is_read) {
    return 'New inquiry - requires attention. Review the client details and respond promptly.'
  }
  return 'This inquiry has been reviewed. You may follow up if needed.'
}

// ---------- Actions ----------
const markAsRead = async (id: number) => {
  await notificationStore.markAsRead(id)
  // Refresh the list to reflect changes
  await inquiryStore.load()
}

const updateStatus = async (inquiry: InquiryNotification, status: 'read' | 'unread') => {
  if (status === 'read' && !inquiry.is_read) {
    await markAsRead(inquiry.id)
  } else if (status === 'unread' && inquiry.is_read) {
    alert('Unread functionality not yet implemented on backend')
  }
}

// ---------- Lifecycle ----------
onMounted(async () => {
  await inquiryStore.load()
})

// Watch refresh trigger
watch(
  () => appStore.refreshTrigger,
  async () => {
    await inquiryStore.load()
  }
)
</script>

<template>
  <div class="p-6 space-y-6">

    <!-- HEADER -->
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold">Consultations</h1>
      <div class="relative">
        <button class="btn-card">🔔</button>
        <span v-if="notificationStore.unreadCount" class="badge">
          {{ notificationStore.unreadCount }}
        </span>
      </div>
    </div>

    <!-- FILTER -->
    <div class="flex gap-3">
      <button @click="filter='all'" class="filter-btn">All</button>
      <button @click="filter='new'" class="filter-btn">New</button>
      <button @click="filter='read'" class="filter-btn">Read</button>
    </div>

    <!-- GRID -->
    <div class="grid md:grid-cols-3 gap-6">

      <!-- LIST -->
      <div class="card">
        <h2 class="font-semibold mb-4">Cases</h2>
        <div v-if="filteredConsultations.length === 0" class="text-gray-400">
          No consultations found
        </div>
        <div
          v-for="c in filteredConsultations"
          :key="c.id"
          @click="selected = c"
          class="case-item"
        >
          <div>
            <p class="font-semibold">{{ c.name }}</p>
            <p class="text-xs text-gray-500">{{ c.email }}</p>
          </div>
          <span
            class="urgency"
            :class="c.is_read ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'"
          >
            {{ c.is_read ? 'Read' : 'New' }}
          </span>
        </div>
      </div>

      <!-- DETAILS -->
      <div class="md:col-span-2 card">
        <div v-if="selected">
          <h2 class="text-xl font-bold mb-4">{{ selected.name }}</h2>
          <div class="grid grid-cols-2 gap-4 text-sm">
            <p><strong>Email:</strong> {{ selected.email }}</p>
            <p><strong>Phone:</strong> {{ selected.phone || 'N/A' }}</p>
            <p><strong>Status:</strong> {{ selected.is_read ? 'Read' : 'New' }}</p>
            <p><strong>Received:</strong> {{ new Date(selected.created_at).toLocaleString() }}</p>
          </div>
          <div class="mt-4">
            <strong>Message</strong>
            <p class="mt-2 text-gray-600 dark:text-gray-300">{{ selected.message }}</p>
          </div>
          <div class="mt-6 flex gap-3 flex-wrap">
            <button
              v-if="!selected.is_read"
              @click="updateStatus(selected, 'read')"
              class="btn-green"
            >
              Mark as Read
            </button>
            <button
              v-else
              @click="updateStatus(selected, 'unread')"
              class="btn-yellow"
            >
              Mark as Unread
            </button>
          </div>
          <div class="mt-6 ai-box">
            <h3 class="font-semibold mb-2">AI Case Insight</h3>
            <p class="text-sm">{{ getAISummary(selected) }}</p>
          </div>
        </div>
        <div v-else class="text-gray-400">Select a case to view details</div>
      </div>
    </div>

    <!-- CHART (placeholder) -->
    <div class="card">
      <h2 class="font-semibold mb-4">Monthly Consultations Trend</h2>
      <div class="h-56">
        <LineChart :chart-data="chartData" /> 
      </div>
    </div>
  </div>
</template>

<style scoped>
/* reuse your existing styles – keep them as is */
.card { background: white; padding: 20px; border-radius: 14px; }
.dark .card { background: #0f2a3a; }
.case-item { display: flex; justify-content: space-between; padding: 10px; border-radius: 10px; cursor: pointer; }
.case-item:hover { background: #F5F7FA; }
.urgency { font-size: 11px; padding: 4px 8px; border-radius: 999px; }
.btn-yellow { background: #facc15; padding: 6px 12px; border-radius: 8px; }
.btn-green { background: #16a34a; color: white; padding: 6px 12px; border-radius: 8px; }
.ai-box { background: #F5F7FA; padding: 14px; border-radius: 10px; }
.dark .ai-box { background: #061C2A; }
.badge { position: absolute; top: -6px; right: -6px; background: red; color: white; font-size: 10px; padding: 3px 6px; border-radius: 999px; }
.filter-btn { padding: 6px 12px; border-radius: 999px; background: #e5e7eb; }
.btn-card { background: white; padding: 8px 12px; border-radius: 999px; }
</style>