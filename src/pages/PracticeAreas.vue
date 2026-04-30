<script setup lang="ts">
import { onMounted } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 900,
    once: true,
    offset: 80
  })
})
</script>

<template>
  <div class="bg-white dark:bg-[#061C2A] text-[#061C2A] dark:text-white transition-colors duration-300">

    <!-- HERO -->
    <section class="py-24 text-center bg-white dark:bg-[#061C2A]">
      <div class="max-w-4xl mx-auto px-4" data-aos="fade-up">

        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Legal Services Tailored to Your Needs
        </h1>

        <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Whether you're facing a legal dispute, managing a business, or navigating family matters,
          our experienced advocates provide practical and effective legal solutions.
        </p>

      </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="bg-[#F5F7FA] dark:bg-[#0b2f45] py-16 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 text-center">

        <h2 class="text-3xl font-bold mb-10" data-aos="fade-up">
          Why Choose Our Firm
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="info-card" data-aos="zoom-in">
            <h3>Experienced Advocates</h3>
            <p>Years of hands-on experience across multiple areas of law.</p>
          </div>

          <div class="info-card" data-aos="zoom-in" data-aos-delay="100">
            <h3>Client-Focused Approach</h3>
            <p>Every case is handled with personalized attention and care.</p>
          </div>

          <div class="info-card" data-aos="zoom-in" data-aos-delay="200">
            <h3>Proven Results</h3>
            <p>A strong track record of successful legal outcomes.</p>
          </div>

        </div>

      </div>
    </section>

    <!-- SERVICES -->
    <section class="bg-white dark:bg-[#061C2A] py-20 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 text-center">

        <h2 class="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
          Our Legal Services
        </h2>

        <p class="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto" data-aos="fade-up">
          Explore our core areas of practice and find the legal support that suits your needs.
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <router-link to="/practice-areas/criminal" class="service-card" data-aos="fade-up">
            <div class="icon">⚖️</div>
            <h3>Criminal Law</h3>
            <p>Defending your rights with strong representation in criminal cases.</p>
            <span class="link">Learn More →</span>
          </router-link>

          <router-link to="/practice-areas/civil" class="service-card" data-aos="fade-up" data-aos-delay="100">
            <div class="icon">📜</div>
            <h3>Civil Law</h3>
            <p>Resolving disputes efficiently through skilled legal advocacy.</p>
            <span class="link">Learn More →</span>
          </router-link>

          <router-link to="/practice-areas/corporate" class="service-card" data-aos="fade-up" data-aos-delay="200">
            <div class="icon">🏢</div>
            <h3>Corporate Law</h3>
            <p>Helping businesses navigate legal challenges with confidence.</p>
            <span class="link">Learn More →</span>
          </router-link>

          <router-link to="/practice-areas/family" class="service-card" data-aos="fade-up" data-aos-delay="300">
            <div class="icon">👨‍👩‍👧</div>
            <h3>Family Law</h3>
            <p>Supporting you through sensitive family matters with care.</p>
            <span class="link">Learn More →</span>
          </router-link>

        </div>

        <div class="mt-12" data-aos="fade-up">
          <router-link to="/consultation"
            class="bg-[#061C2A] dark:bg-[#0f2a3a] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
            Not Sure Where to Start? Speak to an Advocate →
          </router-link>
        </div>

      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="relative py-20 text-center bg-gradient-to-r from-[#F5F7FA] to-white dark:from-[#061C2A] dark:to-[#0b2f45] overflow-hidden">

      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#9A6829,_transparent_60%)]"></div>

      <div class="relative max-w-3xl mx-auto px-4" data-aos="zoom-in">

        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Need Legal Assistance?
        </h2>

        <p class="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          Get professional legal support from a trusted advocate today.
        </p>

        <div class="flex justify-center gap-4 flex-wrap">

          <router-link to="/consultation"
            class="bg-[#9A6829] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7c531f] transition">
            Speak to an Advocate Today
          </router-link>

          <router-link to="/contact"
            class="border border-[#9A6829] text-[#9A6829] px-6 py-3 rounded-full font-semibold hover:bg-[#9A6829] hover:text-white transition">
            Contact Us
          </router-link>

        </div>

      </div>
    </section>

  </div>
</template>

<style scoped>
.info-card {
  background: white;
  padding: 28px;
  border-radius: 14px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.05);
}

.dark .info-card {
  background: #0f2a3a;
}

.service-card {
  background: white;
  padding: 30px 24px;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  text-align: left;
  transition: all 0.35s ease;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.dark .service-card {
  background: #0f2a3a;
  border-color: #1f3a4a;
}

.service-card:hover {
  transform: translateY(-8px) scale(1.02);
  background: #061C2A;
  color: white;
  border-color: transparent;
}

.service-card h3 {
  font-size: 18px;
  font-weight: 700;
}

.service-card p {
  font-size: 14px;
  color: #6b7280;
}

.service-card .icon {
  font-size: 28px;
  margin-bottom: 6px;
}

.service-card .link {
  margin-top: auto;
  font-size: 14px;
  font-weight: 600;
  color: #9A6829;
  transition: 0.3s;
}
</style>