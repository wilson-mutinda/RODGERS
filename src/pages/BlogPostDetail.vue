<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBlogStore } from '@/stores/blog'

const route = useRoute()
const router = useRouter()
const store = useBlogStore()

const slug = route.params.slug as string
const post = ref<any>(null)
const loading = ref(true)
const error = ref('')

// Format date
const formattedDate = computed(() => {
  if (!post.value) return ''
  return new Date(post.value.published_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

// Load post by slug
onMounted(async () => {
  try {
    loading.value = true
    post.value = await store.getBySlug(slug)
  } catch (err: any) {
    if (err.response?.status === 404) {
      error.value = 'Article not found'
    } else {
      error.value = 'Failed to load article. Please try again.'
    }
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="bg-white dark:bg-[#061C2A] text-[#061C2A] dark:text-white min-h-screen transition-colors duration-300">

    <!-- Loading -->
    <div v-if="loading" class="flex justify-center items-center h-64">
      <p class="text-gray-500">Loading article...</p>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="flex justify-center items-center h-64">
      <div class="text-center">
        <p class="text-red-500 text-lg">{{ error }}</p>
        <router-link to="/blog" class="text-[#9A6829] hover:underline mt-4 inline-block">
          ← Back to Blog
        </router-link>
      </div>
    </div>

    <!-- Post content -->
    <article v-else class="max-w-4xl mx-auto px-4 py-16">
      <!-- Back link -->
      <router-link to="/blog" class="text-[#9A6829] hover:underline inline-block mb-6">
        ← Back to Blog
      </router-link>

      <!-- Header -->
      <header class="mb-8">
        <div class="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
          <span v-if="post.category" class="bg-[#9A6829]/10 text-[#9A6829] px-3 py-1 rounded-full">
            {{ post.category }}
          </span>
          <span>{{ formattedDate }}</span>
        </div>

        <h1 class="text-4xl md:text-5xl font-bold leading-tight">
          {{ post.title }}
        </h1>

        <!-- Author -->
        <p class="text-gray-500 dark:text-gray-400 mt-3">
          By {{ post.author || 'Rodgers Abdi & Company Advocates' }}
        </p>
      </header>

      <!-- Featured image -->
      <div v-if="post.image" class="mb-8 rounded-xl overflow-hidden shadow-lg">
        <img :src="post.image" :alt="post.title" class="w-full h-auto object-cover" />
      </div>

      <!-- Excerpt (if any) -->
      <div v-if="post.excerpt" class="text-lg text-gray-600 dark:text-gray-300 border-l-4 border-[#9A6829] pl-4 mb-8 italic">
        {{ post.excerpt }}
      </div>

      <!-- Content -->
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <!-- Render content with line breaks for now (you can later switch to markdown or rich text) -->
        <p v-for="(paragraph, index) in post.content.split('\n')" :key="index" class="mb-4">
          {{ paragraph }}
        </p>
      </div>

      <!-- Share / footer -->
      <div class="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p class="text-sm text-gray-500">Found this helpful? Share it with others.</p>
        <!-- Share buttons could go here -->
      </div>
    </article>
  </div>
</template>

<style scoped>
/* Optional: style the content for readability */
.prose p {
  line-height: 1.8;
}
</style>