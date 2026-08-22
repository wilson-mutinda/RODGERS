
<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const auth = useAuthStore()
const router = useRouter()

const username = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
    loading.value = true
    error.value = ''
    const result = await auth.login(
        username.value,
        password.value
    )
    if (result.success) {
        router.push('/admin/dashboard')
    } else {
        error.value = result.message || 'Invalid credentials'
    }
    loading.value = false
}

</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div class="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-center mb-6">Admin Login</h2>
            <form @submit.prevent="handleLogin" class="space-y-4">
                <input v-model="username" type="text" placeholder="username" class="input" required />
                <input v-model="password" type="password" placeholder="Password" class="input" required />
                <div v-if="error" class="text-red-600 text-sm">
                    {{ error }}
                </div>
                <button type="submit" :disabled="loading" class="w-full bg-[#9A6829] text-white py-3 rounded-full font-semibold hover:bg-[#7c531f] transition disabled:opacity-50">
                    {{ loading ? 'Logging in...' : 'Login' }}
                </button>
            </form>
            <p class="text-center mt-4 text-sm">
                Don't have an account?
                <router-link to="/register" class="text-[#9A6829] hover:underline">Register</router-link>
            </p>
        </div>
    </div>
</template>

<style scoped>
.input {
    width: 100%;
    padding: 12px 14px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    background: white;
}

.dark .input {
    background: #1f2937;
    border-color: #374151;
    color: white;
}
</style>
