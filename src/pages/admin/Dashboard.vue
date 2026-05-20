<script setup lang="ts">
import { ref, onMounted } from 'vue'

const consultations = ref(120)
const messages = ref(35)
const blogs = ref(12)
const conversion = ref(87)

const recentConsultations = ref([
  { name: 'John Doe', type: 'Criminal', date: 'Today' },
  { name: 'Mary W.', type: 'Civil', date: 'Yesterday' }
])

const recentMessages = ref([
  { name: 'Client A', subject: 'Legal Advice', date: 'Today' },
  { name: 'Client B', subject: 'Follow-up', date: '2 days ago' }
])

// simulate loading animation
onMounted(() => {
  // later: fetch from API
})
</script>

<template>
  <div class="space-y-8">

    <!-- PAGE TITLE -->
    <div>
      <h1 class="text-2xl font-bold">Dashboard Overview</h1>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Welcome back, here’s what’s happening today.
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
        <h3>{{ conversion }}%</h3>
        <p>Conversion Rate</p>
      </div>

    </div>

    <!-- CHART PLACEHOLDER -->
    <div class="card">
      <h2 class="text-lg font-semibold mb-4">Monthly Consultations</h2>

      <div class="h-48 flex items-center justify-center text-gray-400">
        📊 Chart will go here (Chart.js / ApexCharts)
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

        <router-link to="/admin/blog"
          class="btn-primary">
          ➕ New Blog
        </router-link>

        <router-link to="/admin/consultations"
          class="btn-secondary">
          📅 View Consultations
        </router-link>

        <router-link to="/admin/messages"
          class="btn-secondary">
          📩 View Messages
        </router-link>

      </div>

    </div>

  </div>
</template>

<style scoped>
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