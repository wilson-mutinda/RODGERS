<script setup lang="ts">
import { useBlogStore } from '@/stores/blog';
import { computed, onMounted, ref } from 'vue';

const store = useBlogStore()
const loading = ref(false)

const publishedPosts = computed(() => {
  return store.posts
    .filter(p => p.status === 'published')
    .sort(((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime()))
})

const featuredPost = computed(() => publishedPosts.value[0] || null)

const otherPosts = computed(() => publishedPosts.value.slice(1))

// Load posts on mount
onMounted(async () => {
  if (store.posts.length === 0) {
    loading.value = true
    await store.load()
    loading.value = false
  }
})
</script>

<template>
  <div class="bg-white dark:bg-[#061C2A] text-[#061C2A] dark:text-white transition-colors duration-300">

    <!-- HERO -->
     <section class="py-20 text-center">
      <div class="max-w-3xl mx-auto px-4" data-aos="fade-up">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Legal <span class="text-[#9A6829]">Insights & Articles</span></h1>
        <p class="text-gray-600 dark:text-gray-300 text-lg">
          Stay informed with expert legal advice, guides, and updates.
        </p>
      </div>
     </section>

     <!-- Loading state -->
      <section v-if="loading" class="py-16 text-center">
        <p class="text-gray-500">Loading articles...</p>
      </section>

      <!-- Empty state -->
      <section v-else-if="publishedPosts.length === 0" class="py-16 text-center">
        <p class="text-gray-500">No articles published yet. Checkback soon.</p>
      </section>

      <!-- Content with posts exist -->
       <template v-else>

        <!-- FEATURED POST -->
         <section class="py-10">
          <div class="max-w-6xl mx-auto px-4">
            <div class="featured-card">
              <div class="p-6 md:p-10">
                <span class="text-sm text-[#9A6829] font-semibold">Featured Article</span>
                <h2 class="text-2xl md:text-3xl font-bold mt-2 mb-4">
                  {{ featuredPost.title }}
                </h2>
                <p class="text-gray-600 dark:text-gray-300 mb-6">
                  {{ featuredPost.excerpt || featuredPost.content.substring(0, 120) + '...' }}
                </p>
                <router-link :to="`/blog/${featuredPost.slug}`" class="btn-gold">
                  Read Full Article →
                </router-link>
              </div>
            </div>
          </div>
         </section>

         <!-- POSTS GRID -->
          <section class="py-16">
            <div class="max-w-7xl mx-auto px-4">
              <h2 class="text-2xl font-bold mb-8">Latest Articles</h2>

              <div v-if="otherPosts.length === 0" class="text-gray-500 text-center">
                No more articles at the moment.
              </div>

              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(post, i) in otherPosts" :key="post.id" class="blog-card" data-aos="fade-up" :data-aos-delay="i * 100">
                  <span class="text-sm text-[#9A6829] font-semibold">
                    {{ post.category || 'General' }}
                  </span>
                  <h3 class="text-lg font-bold mt-2 mb-2">
                    {{ post.title }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {{ post.excerpt || post.content.substring(0, 80) + '...' }}
                  </p>
                  <div class="flex justify-between items-center text-sm">
                    <span class="text-gray-400">
                      {{ new Date(post.published_at).toLocaleDateString('en-US', {
                        month: 'long',
                        year: 'numeric'
                      }) }}
                    </span>
                    <router-link :to="`/blog/${post.slug}`" class="text-[#9A6829] font-semibold hover:underline">
                      Read →
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </section>
       </template>

       <!-- CTA -->
        <section class="py-20 text-center bg-gradient-to-r from-[#F5F7FA] to-white dark:from-[#061C2A] dark:to-[#0B2F45]">
          <div data-aos="zoom-in" class="">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Need Legal Advice?</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-8">Get professional legal guidance tailored to your situation.</p>
            <router-link to="/contact" class="btn-gold">
              Book Consultation
            </router-link>
          </div>
        </section>
  </div>
</template>

<style scoped>
.featured-card {
  background: white;
  border-radius: 18px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
}
.dark .featured-card {
  background: #0f2a3a;
  border-color: #1f3a4a;
}
.blog-card {
  background: white;
  border: 1px solid #e5e7eb;
  padding: 22px;
  border-radius: 14px;
  transition: 0.3s;
}
.dark .blog-card {
  background: #0f2a3a;
  border-color: #1f3a4a;
}
.blog-card:hover {
  transform: translateY(-6px);
  background: #061C2A;
  color: white;
}
.btn-gold {
  background: #9A6829;
  padding: 10px 18px;
  border-radius: 999px;
  color: white;
  font-weight: 600;
}
.btn-gold:hover {
  background: #7c531f;
}
</style>
