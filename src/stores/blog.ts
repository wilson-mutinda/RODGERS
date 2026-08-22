import { API_BASE_URI } from "@/config/api";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useAuthStore } from "./auth";

export const useBlogStore = defineStore('blog', () => {
    const posts = ref<any[]>([])
    const loading = ref(false)

    const publicApi = axios.create({
        baseURL: API_BASE_URI
    })
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
            const res = await adminApi.get('/blog/')
            posts.value = res.data
        } finally {
            loading.value = false
        }
    }

    const create = async (data: any) => {
        const res = await adminApi.post('/blog/', data)
        posts.value.unshift(res.data)
        return res.data
    }

    const update = async (id: number, data: any) => {
        const res = await adminApi.patch(`/blog/${id}/`, data)
        const index = posts.value.findIndex(p => p.id === id)
        if (index !== -1) posts.value[index] = res.data
        return res.data
    }

    const remove = async (id: number) => {
        await adminApi.delete(`/blog/${id}/`)
        posts.value = posts.value.filter(p => p.id !== id)
    }

    const getBySlug = async (slug: string) => {
        const res = await publicApi.get(`/blog/${slug}/`);
        return res.data;
    }

    return {
        posts,
        loading,
        load,
        create,
        update,
        remove,
        getBySlug
    }
})