import { API_BASE_URI } from "@/config/api";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useAuthStore } from "./auth";

export interface InquiryNotification {
    id: number;
    name: string;
    email: string;
    phone: string;
    message: string;
    created_at: string;
    is_read: boolean;
}

export const useInquiryStore = defineStore('inquiry', () => {
    const inquiries = ref<InquiryNotification[]>([])
    const loading = ref(false)

    const adminApi = axios.create({
        baseURL: API_BASE_URI
    })

    adminApi.interceptors.request.use((config) => {
        const auth = useAuthStore()
        if (auth.accessToken) {
            config.headers.Authorization = `Bearer ${auth.accessToken}`
        }
        return config
    })

    const load = async () => {
        loading.value = true
        try {
            const res = await adminApi.get('/inquiries/')
            inquiries.value = res.data
        } finally {
            loading.value = false
        }
    }

    // form submission (public)
    const submitInquiry = async (data: {
        name: string;
        email: string;
        phone: string;
        message: string;
    }) => {
        try {
            const res = await adminApi.post('/inquiries/', data);
            return {
                success: true,
                data: res.data
            };
        } catch (error: any) {
            console.error('Submit error:', error);
            const message = error.response?.data?.detail || 'Failed to send inquiry';
            return {
                success: false,
                message
            }
        }
    }

    return {
        inquiries,
        loading,
        load,
        submitInquiry
    }
})
