<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useInquiryStore, type InquiryNotification } from '@/stores/inquiry'
import { useNotificationStore } from '@/stores/notification'
import { useAppStore } from '@/stores/app'

const inquiryStore = useInquiryStore()
const notificationStore = useNotificationStore()
const appStore = useAppStore()

// ---------- State ----------
const selected = ref<InquiryNotification | null>(null)

// ---------- Computed ----------
const unreadCount = computed(() => notificationStore.unreadCount)

// Messages are all inquiries, sorted by date (already sorted in store)
const messages = computed(() => inquiryStore.inquiries)

// ---------- Actions ----------
const openMessage = (msg: InquiryNotification) => {
  selected.value = msg
  if (!msg.is_read) {
    notificationStore.markAsRead(msg.id).then(() => {
      inquiryStore.load()
    })
  }
}

const markAsUnread = (msg: InquiryNotification) => {
  // requires backend PATCH
  alert('Unread functionality not yet implemented on backend')
}

// ---------- Lifecycle ----------
onMounted(async () => {
  await inquiryStore.load()
})

watch(
  () => appStore.refreshTrigger,
  async () => {
    await inquiryStore.load()
  }
)
</script>

<template>
  <div class="min-h-screen bg-[#F5F7FA] dark:bg-[#061C2A] text-[#061C2A] dark:text-white p-6">

    <!-- HEADER -->
    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-3xl font-bold">Messages Inbox</h1>
        <p class="text-gray-500 dark:text-gray-300">Manage client inquiries and communications</p>
      </div>
      <div class="relative">
        <button class="bg-white dark:bg-[#0f2a3a] px-4 py-2 rounded-full shadow">📩 Messages</button>
        <span v-if="unreadCount" class="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {{ unreadCount }}
        </span>
      </div>
    </div>

    <!-- GRID -->
    <div class="grid md:grid-cols-3 gap-6">

      <!-- LEFT: MESSAGE LIST -->
      <div class="md:col-span-1 bg-white dark:bg-[#0f2a3a] p-4 rounded-xl shadow">
        <h2 class="font-semibold mb-4">Inbox</h2>
        <div
          v-for="msg in messages"
          :key="msg.id"
          @click="openMessage(msg)"
          class="p-3 mb-2 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-[#1a3b4f] transition"
        >
          <div class="flex justify-between items-center">
            <p class="font-medium">{{ msg.name }}</p>
            <span v-if="!msg.is_read" class="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">New</span>
          </div>
          <p class="text-sm text-gray-500 truncate">{{ msg.message.substring(0, 50) }}</p>
          <span class="text-xs text-gray-400">{{ new Date(msg.created_at).toLocaleDateString() }}</span>
        </div>
      </div>

      <!-- RIGHT: MESSAGE VIEW -->
      <div class="md:col-span-2 bg-white dark:bg-[#0f2a3a] p-6 rounded-xl shadow">
        <div v-if="selected">
          <div class="flex justify-between items-start">
            <h2 class="text-xl font-bold">{{ selected.name }}</h2>
            <button @click="markAsUnread(selected)" class="text-sm text-blue-500">Mark Unread</button>
          </div>
          <div class="mt-4 space-y-1 text-sm">
            <p><strong>Email:</strong> {{ selected.email }}</p>
            <p><strong>Phone:</strong> {{ selected.phone || 'N/A' }}</p>
            <p><strong>Date:</strong> {{ new Date(selected.created_at).toLocaleString() }}</p>
          </div>
          <div class="mt-6">
            <h3 class="font-semibold mb-2">Message</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ selected.message }}</p>
          </div>
          <div class="mt-6 flex gap-3">
            <button class="px-4 py-2 bg-[#9A6829] text-white rounded-full">Reply (Coming Soon)</button>
            <button class="px-4 py-2 bg-gray-200 dark:bg-[#1a3b4f] rounded-full">Archive</button>
          </div>
        </div>
        <div v-else class="text-gray-500">Select a message to view details</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* keep your existing styles */
</style>