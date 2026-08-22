<script setup lang="ts">
import { ref, computed, onMounted, onBeforeMount, watch } from 'vue'
import { useBlogStore } from '@/stores/blog'
import { useAppStore } from '@/stores/app'

const store = useBlogStore()
const loading = ref(false)
const error = ref('')
const success = ref('')

// Form state
const form = ref({
    id: null as number | null,
    title: '',
    excerpt: '',
    content: '',
    status: 'draft' as 'draft' | 'published',
    category: '',
    image: null as File | null,
})

const previewImage = ref('')
const showModal = ref(false)
const editMode = ref(false)

// Filters
const search = ref('')
const filter = ref<'all' | 'draft' | 'published'>('all')

// ckear success message after a while
let successTimeout: number | null = null

// Helper to set success message and auto-clear after 2 seconds
const setSuccess = (msg: string) => {
  success.value = msg
  if (successTimeout) {
    clearTimeout(successTimeout)
    successTimeout = null
  }
  successTimeout = setTimeout(() => {
    success.value = ''
    successTimeout = null
  }, 4000);
}

const filteredPosts = computed(() => {
    return store.posts.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(search.value.toLowerCase())
        const matchesFilter = filter.value === 'all' || p.status === filter.value
        return matchesSearch && matchesFilter
    })
})

// Open create modal
const openCreate = () => {
    editMode.value = false
    form.value = { id: null, title: '', excerpt: '', content: '', status: 'draft', category: '', image: null }
    previewImage.value = ''
    showModal.value = true
}

// Open edit modal
const editPost = (post: any) => {
    editMode.value = true
    form.value = {
        id: post.id,
        title: post.title,
        excerpt: post.excerpt || '',
        content: post.content || '',
        status: post.status || 'draft',
        category: '',
        image: null,
    }
    previewImage.value = post.image || ''
    showModal.value = true
}

// Save (create or update)
const savePost = async () => {
    if (!form.value.title) return
    loading.value = true
    error.value = ''
    success.value = ''

    const formData = new FormData()
    for (const key in form.value) {
        if (key === 'id' || key === 'image') continue
        const val = form.value[key as keyof typeof form.value]
        if (val !== null && val !== undefined) {
            formData.append(key, String(val))
        }
    }
    if (form.value.image) {
        formData.append('image', form.value.image)
    }

    try {
        if (form.value.id) {
            await store.update(form.value.id, formData)
            setSuccess('Post updated!')
        } else {
            await store.create(formData)
            setSuccess('Post created!')
        }
        showModal.value = false
        await store.load() // Refresh list
    } catch (err) {
        error.value = 'Failed to save post.'
        console.error(err)
    } finally {
        loading.value = false
    }
}

// Delete
const deletePost = async (id: number) => {
    if (!confirm('Delete this post?')) return
    try {
        await store.remove(id)
        setSuccess('Post deleted!')
        await store.load()
    } catch (err) {
        error.value = 'Failed to delete post.'
        console.error(err)
    }
}

// Image upload preview
const handleImageUpload = (e: Event) => {
    const target = e.target as HTMLInputElement
    const file = target.files?.[0]
    if (file) {
        form.value.image = file
        previewImage.value = URL.createObjectURL(file)
    }
}

// Load posts on mount
onMounted(() => store.load())

onBeforeMount(() => {
  if (successTimeout) {
    clearTimeout(successTimeout)
    successTimeout = null
  }
})

const appStore = useAppStore()

watch(
    () => appStore.refreshTrigger,

    async () => {
        // Reload al data
        await Promise.all([
            store.load(),
        ])
    }
)

</script>

<template>
    <div class="p-6 space-y-6">

        <!-- Header -->
        <div class="flex justify-between items-center">
            <h1 class="text-2xl font-bold">Blog CMS</h1>
            <button @click="openCreate" class="bg-[#9A6829] text-white px-4 py-2 rounded-full hover:bg-[#7c531f] transition">
                + New Post
            </button>
        </div>

        <!-- Success/Error messages -->
        <div v-if="success" class="bg-green-100 text-green-700 p-3 rounded">{{ success }}</div>
        <div v-if="error" class="bg-red-100 text-red-700 p-3 rounded">{{ error }}</div>

        <!-- Search & Filter -->
        <div class="flex flex-wrap gap-3">
            <input v-model="search" placeholder="Search..." class="input" />
            <select v-model="filter" class="input">
                <option value="all">All</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
            </select>
        </div>

        <!-- Loading indicator -->
        <div v-if="store.loading" class="text-center py-8">Loading posts...</div>

        <!-- Posts list -->
        <div v-else class="bg-white dark:bg-gray-800 rounded-2xl shadow overflow-hidden">
            <div v-if="filteredPosts.length === 0" class="p-4 text-gray-400">No posts found.</div>
            <div v-for="post in filteredPosts" :key="post.id" class="flex flex-wrap items-center justify-between p-4 border-b dark:border-gray-700">
                <div class="flex-1">
                    <h3 class="font-semibold">{{ post.title }}</h3>
                    <p class="text-sm text-gray-500">{{ post.excerpt }}</p>
                </div>
                <span class="badge" :class="post.status === 'published' ? 'green' : 'yellow'">
                    {{ post.status }}
                </span>
                <div class="flex gap-2 ml-4">
                    <button @click="editPost(post)" class="text-blue-600 hover:underline">Edit</button>
                    <button @click="deletePost(post.id)" class="text-red-500 hover:underline">Delete</button>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div v-if="showModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md shadow-lg">
                <h2 class="text-xl font-bold mb-4">{{ editMode ? 'Edit Post' : 'New Post' }}</h2>
                <div class="space-y-3">
                    <input v-model="form.title" placeholder="Title" class="input" />
                    <textarea v-model="form.excerpt" placeholder="Excerpt" rows="2" class="input"></textarea>
                    <textarea v-model="form.content" placeholder="Full Content" rows="5" class="input"></textarea>
                    <select v-model="form.status" class="input">
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                    </select>
                    <input v-model="form.category" placeholder="Category (e.g., Corporate Law)" class="input" />
                    <div>
                        <label class="block text-sm font-medium mb-1">Image</label>
                        <input type="file" accept="image/*" @change="handleImageUpload" />
                        <img v-if="previewImage" :src="previewImage" class="mt-2 h-32 w-auto object-cover rounded" />
                    </div>
                </div>
                <div class="flex justify-end gap-3 mt-6">
                    <button @click="showModal = false" class="px-4 py-2 border rounded">Cancel</button>
                    <button @click="savePost" :disabled="loading" class="bg-[#9A6829] text-white px-4 py-2 rounded">
                        {{ loading ? 'Saving...' : 'Save' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.input {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: white;
}
.dark .input {
    background: #1f2937;
    border-color: #374151;
    color: white;
}
.badge {
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 500;
}
.green {
    background: #dcfce7;
    color: #15803d;
}
.yellow {
    background: #fef9c3;
    color: #a16207;
}
</style>