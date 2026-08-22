import { API_BASE_URI } from "@/config/api";
import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useAuthStore } from "./auth";

export interface Notification {
    id: number;
    name: string;
    email: string;
    phone: string;
    message: string;
    created_at: string;
    is_read: boolean;
}

export const useNotificationStore = defineStore('notification', () => {
    const notifications = ref<Notification[]>([]);
    const loading = ref(false);

    const adminApi = axios.create({
        baseURL: API_BASE_URI
    });
    adminApi.interceptors.request.use((config) => {
        const auth = useAuthStore();

        if (auth.accessToken) {
            config.headers.Authorization = `Bearer ${auth.accessToken}`;
        }
        return config;
    });

    const unreadCount = computed(() => notifications.value.filter(n => !n.is_read).length);

    const unreadList = computed(() => notifications.value.filter(n => !n.is_read).slice(0, 5));

    const load = async () => {
        loading.value = true;
        try {
            const res = await adminApi.get('/inquiries/');
            notifications.value = res.data;
        } finally {
            loading.value = false;
        }
    }

    const markAsRead = async (id: number) => {
        await adminApi.post(`/inquiries/${id}/mark_read/`);
        const notification = notifications.value.find(n => n.id === id);
        if (notification) {
            notification.is_read = true;
        }
    };

    return {
        notifications,
        loading,
        unreadCount,
        unreadList,
        load,
        markAsRead
    }
})