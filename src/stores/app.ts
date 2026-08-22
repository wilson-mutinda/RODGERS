import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore('app', () => {
    const refreshTrigger = ref(0)

    const triggerRefresh = () => {
        refreshTrigger.value += 1
    }

    return {
        refreshTrigger,
        triggerRefresh
    }
})
