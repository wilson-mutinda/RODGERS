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
    <section class="py-24 bg-white dark:bg-[#061C2A] text-center">
      <div class="max-w-4xl mx-auto px-4" data-aos="fade-up">

        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          About <span class="text-[#9A6829]">Our Firm</span>
        </h1>

        <p class="text-gray-600 dark:text-gray-300 text-lg">
          Rodgers Abdi & Company Advocates is a trusted legal practice delivering
          professional, ethical, and results-driven legal solutions across Kenya.
        </p>

      </div>
    </section>

    <!-- WHO WE ARE -->
    <section class="bg-[#F5F7FA] dark:bg-[#0b2f45] py-16 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-10 items-center">

        <div data-aos="fade-right">
          <h2 class="text-3xl font-bold mb-4">Who We Are</h2>

          <p class="text-gray-600 dark:text-gray-300 mb-4">
            We are a dedicated legal firm offering comprehensive legal services
            in criminal law, civil litigation, corporate law, and family law.
          </p>

          <p class="text-gray-600 dark:text-gray-300">
            Our approach is rooted in professionalism, integrity, and commitment to justice.
          </p>
        </div>

        <div data-aos="fade-left">
          <img src="/rodgers-abdi-blue-bg.jpg" class="rounded-xl shadow-md" />
        </div>

      </div>
    </section>

    <!-- OUR STORY -->
    <section class="bg-white dark:bg-[#061C2A] py-16 text-center">
      <div class="max-w-4xl mx-auto px-4" data-aos="fade-up">

        <h2 class="text-3xl font-bold mb-6">Our Story</h2>

        <p class="text-gray-600 dark:text-gray-300">
          Founded with a commitment to justice and client-focused service,
          Rodgers Abdi & Company Advocates has grown into a trusted legal partner
          for individuals and businesses across Kenya.
        </p>

      </div>
    </section>

    <!-- LEAD ADVOCATE -->
    <section class="bg-[#F5F7FA] dark:bg-[#0b2f45] py-16">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-10 items-center">

        <img src="/rodgers-abdi-blue-bg.jpg" class="rounded-xl shadow-md" data-aos="zoom-in" />

        <div data-aos="fade-left">
          <h2 class="text-3xl font-bold mb-4">Meet Our Lead Advocate</h2>

          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Rodgers Abdi is a dedicated legal professional with experience in multiple areas of law.
          </p>

          <p class="text-gray-600 dark:text-gray-300">
            Known for strong courtroom advocacy and client-first approach.
          </p>
        </div>

      </div>
    </section>

    <!-- MISSION & VISION -->
    <section class="bg-white dark:bg-[#061C2A] py-16">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-8">

        <div class="info-card" data-aos="zoom-in">
          <h3 class="text-xl font-bold mb-3">Our Mission</h3>
          <p class="text-gray-600 dark:text-gray-300">
            To provide accessible, ethical, and high-quality legal services.
          </p>
        </div>

        <div class="info-card" data-aos="zoom-in" data-aos-delay="100">
          <h3 class="text-xl font-bold mb-3">Our Vision</h3>
          <p class="text-gray-600 dark:text-gray-300">
            To be a leading law firm recognized for excellence and trust.
          </p>
        </div>

      </div>
    </section>

    <!-- VALUES -->
    <section class="bg-[#F5F7FA] dark:bg-[#0b2f45] py-16 text-center">
      <div class="max-w-7xl mx-auto px-4 lg:px-8">

        <h2 class="text-3xl font-bold mb-10" data-aos="fade-up">
          Our Core Values
        </h2>

        <div class="grid md:grid-cols-4 gap-6">

          <div class="value-card" data-aos="zoom-in">Integrity</div>
          <div class="value-card" data-aos="zoom-in" data-aos-delay="100">Confidentiality</div>
          <div class="value-card" data-aos="zoom-in" data-aos-delay="200">Professionalism</div>
          <div class="value-card" data-aos="zoom-in" data-aos-delay="300">Client Focus</div>

        </div>

      </div>
    </section>

    <!-- EXPERTISE -->
    <section class="bg-white dark:bg-[#061C2A] py-16 text-center">
      <div class="max-w-7xl mx-auto px-4 lg:px-8">

        <h2 class="text-3xl font-bold mb-4" data-aos="fade-up">
          Our Expertise
        </h2>

        <p class="text-gray-600 dark:text-gray-300 mb-10">
          We specialize in a wide range of legal services.
        </p>

        <div class="grid md:grid-cols-4 gap-6">

          <div class="practice-card" data-aos="fade-up">Criminal Law</div>
          <div class="practice-card" data-aos="fade-up" data-aos-delay="100">Civil Litigation</div>
          <div class="practice-card" data-aos="fade-up" data-aos-delay="200">Corporate Law</div>
          <div class="practice-card" data-aos="fade-up" data-aos-delay="300">Family Law</div>

        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-20 text-center bg-gradient-to-r from-[#F5F7FA] to-white dark:from-[#061C2A] dark:to-[#0b2f45] overflow-hidden">

      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#9A6829,_transparent_60%)]"></div>

      <div class="relative max-w-3xl mx-auto px-4" data-aos="zoom-in">

        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Need Legal Assistance?
        </h2>

        <p class="text-gray-600 dark:text-gray-300 mb-8">
          Get professional legal support today.
        </p>

        <div class="flex justify-center gap-4 flex-wrap">

          <router-link to="/consultation"
            class="bg-[#9A6829] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7c531f] transition">
            Speak to an Advocate
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

.value-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  font-weight: 600;
}

.dark .value-card {
  background: #0f2a3a;
}

.practice-card {
  background: white;
  border: 1px solid #e5e7eb;
  padding: 28px;
  border-radius: 14px;
  font-weight: 600;
  transition: 0.3s;
}

.dark .practice-card {
  background: #0f2a3a;
  border-color: #1f3a4a;
}

.practice-card:hover {
  transform: translateY(-6px);
  background: #061C2A;
  color: white;
}
</style>