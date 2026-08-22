import { API_BASE_URI } from "@/config/api";
import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAuthStore = defineStore('auth', () => {
    const accessToken = ref(localStorage.getItem('access_token') || '')
    const refreshToken = ref(localStorage.getItem('refresh_token') || '')
    const user = ref<any>(null)

    const isAuthenticated = computed(() => !!accessToken.value)

    const logout = () => {
        accessToken.value = ''
        refreshToken.value = ''
        user.value = null
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
    }

    const fetchCurrentUser = async () => {
        if (!accessToken.value) return
        try {
            const res = await axios.get(`${API_BASE_URI}/users/me/`, {
                headers: {
                    Authorization: `Bearer ${accessToken.value}`
                }
            })
            user.value = res.data
        } catch (error) {
            // token expired or invalid
            logout()
        }
    }

    const login = async (username: string, password: string) => {
        try {
            const res = await axios.post(`${API_BASE_URI}/token/`, {
                username,
                password
            })
            accessToken.value = res.data.access
            refreshToken.value = res.data.refresh
            localStorage.setItem('access_token', accessToken.value)
            localStorage.setItem('refresh_token', refreshToken.value)
            await fetchCurrentUser()
            return {
                success: true
            }
        } catch (error: any) {
            return {
                success: false,
                message: error.response?.data?.detail || 'Login failed'
            }
        }
    }

    const register = async (data: any) => {
        try {
            const res = await axios.post(`${API_BASE_URI}/users/`, data)
            return {
                success: true,
                data: res.data
            }
        } catch (error: any) {
            return {
                success: false,
                message: error.response?.data?.detail || 'Registration failed'
            }
        }
    }

    // Fetch user on app if oken exists
    if (accessToken.value) {
        fetchCurrentUser()
    }

    return {
        accessToken,
        refreshToken,
        user,
        isAuthenticated,
        login,
        register,
        logout,
        fetchCurrentUser,
    }
})