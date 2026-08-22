import AboutPage from '@/pages/AboutPage.vue'
import CorporateLaw from '@/pages/CorporateLaw.vue'
import HomePage from '@/pages/HomePage.vue'
import PracticeAreas from '@/pages/PracticeAreas.vue'
import { createRouter, createWebHistory } from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import CriminalLaw from '@/pages/CriminalLaw.vue'
import CivilLaw from '@/pages/CivilLaw.vue'
import FamilyLaw from '@/pages/FamilyLaw.vue'
import ContactPage from '@/pages/ContactPage.vue'
import BlogPage from '@/pages/BlogPage.vue'
import ConsultationPage from '@/pages/ConsultationPage.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import Dashboard from '@/pages/admin/Dashboard.vue'
import Consultations from '@/pages/admin/Consultations.vue'
import Messages from '@/pages/admin/Messages.vue'
import Blog from '@/pages/admin/Blog.vue'
import Login from '@/pages/auth/Login.vue'
import Register from '@/pages/auth/Register.vue'
import { useAuthStore } from '@/stores/auth'
import BlogPostDetail from '@/pages/BlogPostDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/about', name: 'about', component: AboutPage },
    { path: '/practice-areas', name: 'practice-areas', component: PracticeAreas },

    { path: '/practice-areas/corporate', name: 'corporate-law', component: CorporateLaw },
    { path: '/practice-areas/criminal', name: 'criminal-law', component: CriminalLaw },
    { path: '/practice-areas/civil', name: 'civil-law', component: CivilLaw },
    { path: '/practice-areas/family', name: 'family-law', component: FamilyLaw },

    { path: '/contact', name: 'contact', component: ContactPage },
    { path: '/blog', name: 'blog', component: BlogPage },

    { path: '/blog/:slug', name: 'blog-detail', component: BlogPostDetail },

    { path: '/consultation', name: 'consultation', component: ConsultationPage },

    { path: '/login', name: 'login', component: Login, meta: { guest: true } },
    { path: '/register', name: 'register', component: Register, meta: { guest: true } },

    { path: '/admin', component: AdminLayout, redirect: '/admin/dashboard', children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'consultations', component: Consultations },
      { path: 'messages', component: Messages },
      { path: 'blog', component: Blog }
    ]}
  ],

  // scroll behavior
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return '/login'
  }
  if ((to.path === '/login' || to.path === '/register') && auth.isAuthenticated) {
    return '/admin/dashboard'
  }
  // no redirect
  return true
})

router.afterEach(() => {
  NProgress.done()
})

export default router
