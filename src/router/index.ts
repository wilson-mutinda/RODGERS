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
    { path: '/consultation', name: 'consultation', component: ConsultationPage }
  ],

  // scroll behavior
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
