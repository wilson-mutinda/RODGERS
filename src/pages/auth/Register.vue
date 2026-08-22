
<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const auth = useAuthStore()
const router = useRouter()

const form = ref({
    username: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
})

const error = ref('')
const loading = ref(false)

const handleRegister = async () => {
    loading.value = true
    error.value = ''
    const result = await auth.register(form.value)
    if (result.success) {
        // Optional: auto-login after registration
        const loginResult = await auth.login(form.value.username, form.value.password)
        if (loginResult.success) {
            router.push('/admin/dashboard')
        } else {
            router.push('/login')
        }
    } else {
        error.value = result.message || 'Registration failed'
    }
    loading.value = false
}

</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div class="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-center mb-6">Register</h2>
            <form @submit.prevent="handleRegister" class="space-y-4">

                <input v-model="form.username" type="text" placeholder="Username" class="input" required />
                <input v-model="form.email" type="email" placeholder="Email" class="input" required />
                <input v-model="form.first_name" type="text" placeholder="First Name" class="input" required />
                <input v-model="form.last_name" type="text" placeholder="Last Name" class="input" required />
                <input v-model="form.password" type="password" placeholder="Password" class="input" required />

                <div v-if="error" class="text-red-600 text-sm">
                    {{ error }}
                </div>
                <button type="submit" :disabled="loading" class="w-full bg-[#9A6829] text-white py-3 rounded-full font-semibold hover:bg-[#7c531f] transition disabled:opacity-50">
                    {{ loading ? 'Registering...' : 'Register' }}
                </button>
            </form>
            <p class="text-center mt-4 text-sm">Already have an account? <router-link to="/login" class="text-[#9A6829]">Login</router-link></p>
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
