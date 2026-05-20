<script setup lang="ts">
import { ref, computed } from 'vue'

type BlogStatus = 'draft' | 'published'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  status: BlogStatus
  createdAt: string
}

const posts = ref<BlogPost[]>([
  {
    id: 1,
    title: 'Understanding Criminal Law',
    excerpt: 'Basics of criminal law...',
    content: 'Full content here...',
    status: 'published',
    createdAt: '2026-04-20'
  }
])

/* 🔍 SEARCH + FILTER */
const search = ref('')
const filter = ref<'all' | BlogStatus>('all')

const filteredPosts = computed(() => {
  return posts.value.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(search.value.toLowerCase())
    const matchesFilter = filter.value === 'all' || p.status === filter.value
    return matchesSearch && matchesFilter
  })
})

/* MODAL */
const showModal = ref(false)
const editMode = ref(false)
const form = ref<Partial<BlogPost>>({})

const openCreate = () => {
  editMode.value = false
  form.value = { title: '', excerpt: '', content: '', status: 'draft' }
  showModal.value = true
}

const editPost = (p: BlogPost) => {
  editMode.value = true
  form.value = { ...p }
  showModal.value = true
}

/* SAVE */
const savePost = () => {
  if (!form.value.title) return

  if (editMode.value && form.value.id) {
    const i = posts.value.findIndex(p => p.id === form.value.id)
    posts.value[i] = form.value as BlogPost
  } else {
    posts.value.push({
      ...(form.value as BlogPost),
      id: Date.now(),
      createdAt: new Date().toISOString().split('T')[0]
    })
  }

  showModal.value = false
}

/* DELETE */
const deletePost = (id: number) => {
  if (!confirm('Delete this post?')) return
  posts.value = posts.value.filter(p => p.id !== id)
}
</script>

<template>
  <div class="p-6 space-y-6">

    <!-- HEADER -->
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold">Blog CMS</h1>

      <button @click="openCreate" class="btn-primary">
        + New Post
      </button>
    </div>

    <!-- SEARCH + FILTER -->
    <div class="flex flex-wrap gap-3">

      <input v-model="search"
        placeholder="Search..."
        class="input"
      />

      <select v-model="filter" class="input">
        <option value="all">All</option>
        <option value="published">Published</option>
        <option value="draft">Draft</option>
      </select>

    </div>

    <!-- POSTS -->
    <div class="card">

      <div v-if="filteredPosts.length === 0" class="text-gray-400">
        No posts found
      </div>

      <div v-for="post in filteredPosts"
        :key="post.id"
        class="post-row"
      >
        <div>
          <h3 class="font-semibold">{{ post.title }}</h3>
          <p class="text-sm text-gray-500">{{ post.excerpt }}</p>
        </div>

        <!-- STATUS -->
        <span
          class="badge"
          :class="post.status === 'published' ? 'green' : 'yellow'"
        >
          {{ post.status }}
        </span>

        <!-- ACTIONS -->
        <div class="flex gap-2">
          <button @click="editPost(post)">Edit</button>
          <button @click="deletePost(post.id)" class="text-red-500">Delete</button>
        </div>
      </div>

    </div>

    <!-- MODAL -->
    <div v-if="showModal" class="modal">

      <div class="modal-content">

        <h2 class="font-bold text-lg mb-4">
          {{ editMode ? 'Edit Post' : 'New Post' }}
        </h2>

        <input v-model="form.title" placeholder="Title" class="input" />

        <textarea v-model="form.excerpt" placeholder="Excerpt" class="input"></textarea>

        <textarea v-model="form.content" placeholder="Full Content" class="input h-32"></textarea>

        <select v-model="form.status" class="input">
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>

        <div class="flex justify-end gap-3 mt-4">
          <button @click="showModal=false">Cancel</button>
          <button @click="savePost" class="btn-primary">Save</button>
        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>
.card {
  background: white;
  padding: 16px;
  border-radius: 12px;
}

.post-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #eee;
}

.input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.btn-primary {
  background: #9A6829;
  color: white;
  padding: 8px 16px;
  border-radius: 999px;
}

.badge {
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
}

.green {
  background: #dcfce7;
  color: #15803d;
}

.yellow {
  background: #fef9c3;
  color: #a16207;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 12px;
  width: 400px;
}
</style>