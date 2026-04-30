<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="bg-white dark:bg-[#061C2A] text-[#061C2A] dark:text-white transition-all duration-300">

    <!-- HERO -->
    <section class="py-20 text-center bg-white dark:bg-[#061C2A]">
      <div class="max-w-4xl mx-auto px-4">

        <h1
          class="text-4xl md:text-5xl font-bold mb-4"
          data-aos="fade-up"
        >
          Family Law Support You Can Trust
        </h1>

        <p
          class="text-gray-600 dark:text-gray-300 text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Compassionate legal guidance for divorce, custody, inheritance,
          and sensitive family matters.
        </p>

      </div>
    </section>

    <!-- INTRO -->
    <section class="py-16 bg-[#F5F7FA] dark:bg-[#0b2f45]">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-10 items-center">

        <div data-aos="fade-right">

          <h2 class="text-3xl font-bold mb-4">
            We Put Your Family First
          </h2>

          <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            Family disputes require more than legal knowledge — they require empathy,
            patience, and confidentiality.
          </p>

          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            We guide you through every stage with dignity, ensuring your rights
            and emotional wellbeing are protected.
          </p>

        </div>

        <div data-aos="fade-left">
          <img
            src="/rodgers-abdi-blue-bg.jpg"
            class="rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>

    <!-- SERVICES -->
    <section class="py-16 bg-white dark:bg-[#061C2A]">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 text-center">

        <h2 class="text-3xl font-bold mb-10" data-aos="fade-up">
          Family Law Services
        </h2>

        <div class="grid md:grid-cols-3 gap-6">

          <div class="service-card" data-aos="fade-up">
            <h3 class="font-bold text-lg mb-2">Divorce & Separation</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Fair legal support during emotional transitions.
            </p>
          </div>

          <div class="service-card" data-aos="fade-up" data-aos-delay="100">
            <h3 class="font-bold text-lg mb-2">Child Custody</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Protecting the best interests of children.
            </p>
          </div>

          <div class="service-card" data-aos="fade-up" data-aos-delay="200">
            <h3 class="font-bold text-lg mb-2">Inheritance Matters</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Guiding fair distribution of family estates.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- APPROACH -->
    <section class="py-16 bg-[#F5F7FA] dark:bg-[#0b2f45] text-center">
      <div class="max-w-6xl mx-auto px-4">

        <h2 class="text-3xl font-bold mb-10" data-aos="fade-up">
          Our Approach
        </h2>

        <div class="grid md:grid-cols-3 gap-6">

          <div class="info-box" data-aos="zoom-in">
            <h3 class="font-semibold mb-2">Confidential</h3>
            <p class="text-gray-600 dark:text-gray-300">Your privacy is fully protected.</p>
          </div>

          <div class="info-box" data-aos="zoom-in" data-aos-delay="100">
            <h3 class="font-semibold mb-2">Compassionate</h3>
            <p class="text-gray-600 dark:text-gray-300">We understand emotional stress.</p>
          </div>

          <div class="info-box" data-aos="zoom-in" data-aos-delay="200">
            <h3 class="font-semibold mb-2">Result-Oriented</h3>
            <p class="text-gray-600 dark:text-gray-300">We focus on fair outcomes.</p>
          </div>

        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 text-center bg-white dark:bg-[#061C2A]">
      <div class="max-w-3xl mx-auto px-4">

        <h2 class="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
          Need Family Legal Support?
        </h2>

        <p class="text-gray-600 dark:text-gray-300 mb-8 text-lg" data-aos="fade-up" data-aos-delay="100">
          Speak with an experienced advocate today and get clarity on your situation.
        </p>

        <div class="flex justify-center gap-4 flex-wrap" data-aos="fade-up" data-aos-delay="200">

          <router-link
            to="/consultation"
            class="bg-[#9A6829] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7c531f] transition"
          >
            Get Help Now
          </router-link>

          <router-link
            to="/contact"
            class="border border-[#9A6829] text-[#9A6829] px-6 py-3 rounded-full font-semibold hover:bg-[#9A6829] hover:text-white transition"
          >
            Contact Us
          </router-link>

        </div>

      </div>
    </section>

  </div>
</template>

<style scoped>
.service-card {
  background: white;
  padding: 24px;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  transition: 0.3s;
}

.dark .service-card {
  background: #0f2a3a;
  border-color: #1f3a4a;
}

.service-card:hover {
  transform: translateY(-6px);
}

.info-box {
  background: white;
  padding: 24px;
  border-radius: 12px;
  transition: 0.3s;
}

.dark .info-box {
  background: #0f2a3a;
}

.info-box:hover {
  transform: translateY(-5px);
}
</style>