<script setup lang="ts">
import { ref, computed } from 'vue'

type ConsultationStatus = 'new' | 'in-progress' | 'resolved'
type Urgency = 'low' | 'medium' | 'high'

interface Consultation {
  id: number
  name: string
  email: string
  phone: string
  caseType: string
  urgency: Urgency
  message: string
  status: ConsultationStatus
  createdAt: string
}

const consultations = ref<Consultation[]>([
  {
    id: 1,
    name: 'John Doe',
    email: 'john@email.com',
    phone: '0712345678',
    caseType: 'Criminal',
    urgency: 'high',
    message: 'I was arrested unfairly and need urgent legal help.',
    status: 'new',
    createdAt: '2026-04-30'
  }
])

const selected = ref<Consultation | null>(null)
const filter = ref<'all' | ConsultationStatus>('all')

/* 🔔 Notifications */
const newCases = computed(() =>
  consultations.value.filter(c => c.status === 'new')
)

/* 🔍 Filter */
const filteredConsultations = computed(() => {
  if (filter.value === 'all') return consultations.value
  return consultations.value.filter(c => c.status === filter.value)
})

/* STATUS UPDATE */
const updateStatus = (c: Consultation, status: ConsultationStatus) => {
  c.status = status
}

/* 🤖 BETTER AI MOCK */
const getAISummary = (c: Consultation) => {
  if (c.urgency === 'high') {
    return 'Urgent case: Immediate legal intervention recommended. Possible rights violation or criminal exposure.'
  }

  if (c.caseType === 'Civil') {
    return 'Civil dispute: Likely requires documentation review and possible negotiation or litigation.'
  }

  return 'Moderate case: Requires legal review and client consultation before action.'
}
</script>

<template>
  <div class="p-6 space-y-6">

    <!-- HEADER -->
    <div class="flex justify-between items-center" data-aos="fade-down">
      <h1 class="text-2xl font-bold">Consultations</h1>

      <!-- 🔔 -->
      <div class="relative">
        <button class="btn-card">🔔</button>
        <span v-if="newCases.length" class="badge">
          {{ newCases.length }}
        </span>
      </div>
    </div>

    <!-- FILTER -->
    <div class="flex gap-3" data-aos="fade-up">
      <button @click="filter='all'" class="filter-btn">All</button>
      <button @click="filter='new'" class="filter-btn">New</button>
      <button @click="filter='in-progress'" class="filter-btn">In Progress</button>
      <button @click="filter='resolved'" class="filter-btn">Resolved</button>
    </div>

    <!-- GRID -->
    <div class="grid md:grid-cols-3 gap-6">

      <!-- LIST -->
      <div class="card" data-aos="fade-right">

        <h2 class="font-semibold mb-4">Cases</h2>

        <div v-if="filteredConsultations.length === 0" class="text-gray-400">
          No consultations found
        </div>

        <div v-for="c in filteredConsultations"
          :key="c.id"
          @click="selected = c"
          class="case-item"
        >
          <div>
            <p class="font-semibold">{{ c.name }}</p>
            <p class="text-xs text-gray-500">{{ c.caseType }}</p>
          </div>

          <!-- URGENCY -->
          <span class="urgency"
            :class="{
              'bg-red-100 text-red-600': c.urgency === 'high',
              'bg-yellow-100 text-yellow-600': c.urgency === 'medium',
              'bg-green-100 text-green-600': c.urgency === 'low'
            }"
          >
            {{ c.urgency }}
          </span>
        </div>

      </div>

      <!-- DETAILS -->
      <div class="md:col-span-2 card" data-aos="fade-left">

        <div v-if="selected">

          <h2 class="text-xl font-bold mb-4">
            {{ selected.name }}
          </h2>

          <div class="grid grid-cols-2 gap-4 text-sm">
            <p><strong>Email:</strong> {{ selected.email }}</p>
            <p><strong>Phone:</strong> {{ selected.phone }}</p>
            <p><strong>Case:</strong> {{ selected.caseType }}</p>
            <p><strong>Urgency:</strong> {{ selected.urgency }}</p>
          </div>

          <!-- MESSAGE -->
          <div class="mt-4">
            <strong>Message</strong>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              {{ selected.message }}
            </p>
          </div>

          <!-- ACTIONS -->
          <div class="mt-6 flex gap-3 flex-wrap">
            <button @click="updateStatus(selected, 'in-progress')" class="btn-yellow">
              In Progress
            </button>

            <button @click="updateStatus(selected, 'resolved')" class="btn-green">
              Resolved
            </button>
          </div>

          <!-- AI -->
          <div class="mt-6 ai-box">
            <h3 class="font-semibold mb-2">AI Case Insight</h3>
            <p class="text-sm">
              {{ getAISummary(selected) }}
            </p>
          </div>

        </div>

        <div v-else class="text-gray-400">
          Select a case to view details
        </div>

      </div>

    </div>

    <!-- CHART -->
    <div class="card text-center" data-aos="fade-up">
      <h2 class="font-semibold mb-4">Monthly Cases</h2>
      <div class="h-40 flex items-center justify-center text-gray-400">
        📊 Chart integration coming (ApexCharts)
      </div>
    </div>

  </div>
</template>

<style scoped>
.card {
  background: white;
  padding: 20px;
  border-radius: 14px;
}

.dark .card {
  background: #0f2a3a;
}

.case-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}

.case-item:hover {
  background: #F5F7FA;
}

.urgency {
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 999px;
}

.btn-yellow {
  background: #facc15;
  padding: 6px 12px;
  border-radius: 8px;
}

.btn-green {
  background: #16a34a;
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
}

.ai-box {
  background: #F5F7FA;
  padding: 14px;
  border-radius: 10px;
}

.dark .ai-box {
  background: #061C2A;
}

.badge {
  position: absolute;
  top: -6px;
  right: -6px;
  background: red;
  color: white;
  font-size: 10px;
  padding: 3px 6px;
  border-radius: 999px;
}

.filter-btn {
  padding: 6px 12px;
  border-radius: 999px;
  background: #e5e7eb;
}

.btn-card {
  background: white;
  padding: 8px 12px;
  border-radius: 999px;
}
</style>