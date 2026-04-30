<script setup lang="ts">
import { ref } from 'vue'

const posts = ref([
  {
    title: 'What to Do If You Are Arrested in Kenya',
    category: 'Criminal Law',
    excerpt: 'Understanding your rights and immediate steps to take when arrested.',
    date: 'April 2026'
  },
  {
    title: 'How to Resolve a Contract Dispute',
    category: 'Civil Law',
    excerpt: 'Key legal steps to handle disputes and protect your interests.',
    date: 'March 2026'
  },
  {
    title: 'Business Registration in Kenya Explained',
    category: 'Corporate Law',
    excerpt: 'A simple guide to registering and running a compliant business.',
    date: 'March 2026'
  },
  {
    title: 'Child Custody Laws in Kenya',
    category: 'Family Law',
    excerpt: 'What parents should know when dealing with custody matters.',
    date: 'February 2026'
  }
])
</script>

<template>
  <div class="bg-white dark:bg-[#061C2A] text-[#061C2A] dark:text-white transition-colors duration-300">

    <!-- HERO -->
    <section class="py-20 text-center">
      <div class="max-w-3xl mx-auto px-4" data-aos="fade-up">

        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Legal <span class="text-[#9A6829]">Insights & Articles</span>
        </h1>

        <p class="text-gray-600 dark:text-gray-300 text-lg">
          Stay informed with expert legal advice, guides, and updates.
        </p>

      </div>
    </section>

    <!-- FEATURED POST -->
    <section class="py-10">
      <div class="max-w-6xl mx-auto px-4">

        <div
          class="featured-card"
          data-aos="zoom-in"
        >
          <div class="p-6 md:p-10">

            <span class="text-sm text-[#9A6829] font-semibold">
              Featured Article
            </span>

            <h2 class="text-2xl md:text-3xl font-bold mt-2 mb-4">
              What to Do Immediately After an Arrest
            </h2>

            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Learn your rights, how to respond, and when to contact a lawyer.
            </p>

            <router-link
              to="/blog/arrest-guide"
              class="btn-gold"
            >
              Read Full Article →
            </router-link>

          </div>
        </div>

      </div>
    </section>

    <!-- POSTS GRID -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">

        <h2 class="text-2xl font-bold mb-8" data-aos="fade-up">
          Latest Articles
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div
            v-for="(post, i) in posts"
            :key="i"
            class="blog-card"
            data-aos="fade-up"
            :data-aos-delay="i * 100"
          >
            <span class="text-sm text-[#9A6829] font-semibold">
              {{ post.category }}
            </span>

            <h3 class="text-lg font-bold mt-2 mb-2">
              {{ post.title }}
            </h3>

            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {{ post.excerpt }}
            </p>

            <div class="flex justify-between items-center text-sm">
              <span class="text-gray-400">{{ post.date }}</span>

              <router-link
                to="/blog/post"
                class="text-[#9A6829] font-semibold hover:underline"
              >
                Read →
              </router-link>
            </div>

          </div>

        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 text-center bg-gradient-to-r from-[#F5F7FA] to-white dark:from-[#061C2A] dark:to-[#0b2f45]">

      <div data-aos="zoom-in">

        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Need Legal Advice?
        </h2>

        <p class="text-gray-600 dark:text-gray-300 mb-8">
          Get professional legal guidance tailored to your situation.
        </p>

        <router-link
          to="/consultation"
          class="btn-gold"
        >
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