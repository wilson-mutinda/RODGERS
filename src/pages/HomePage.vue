<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import { onMounted, ref, type Ref } from 'vue';

const years = ref(0)
const cases = ref(0)
const trust = ref(0)

const animateValue = (refvar: Ref<number | string>, end: number, duration: number = 1500) => {
  let start = 0
  const increment = end / (duration / 16)

  const counter = setInterval(() => {
    start += increment
    if (start >= end) {
      refvar.value = end + (end === 10 ? '+' : '+')
      clearInterval(counter)
    } else {
      refvar.value = Math.floor(start)
    }
  }, 16);
}

onMounted(() => {
  animateValue(years, 10)
  animateValue(cases, 500)
  animateValue(trust, 100)
})

</script>

<template>
  <div class="bg-white pt-10">

    <!-- NAVBAR -->
    <!-- <section>
      <Navbar />
    </section> -->

    <!-- HERO (NOW WHITE FOR PREMIUM FEEL) -->
    <section class="bg-white text-[#061C2A]">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">

        <!-- LEFT -->
        <div>
          <h1 class="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Facing a Legal Issue? <br />
            <span class="text-[#9A6829]">Get Expert Legal Help Today.</span>
          </h1>

          <p class="text-gray-600 mb-6 text-lg">
            Trusted advocates in criminal, civil, corporate, and family law.
          </p>

          <div class="flex flex-wrap gap-4">
            <router-link to="/consultation"
              class="bg-[#9A6829] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7c531f] transition">
              Get Legal Help Now
            </router-link>

            <router-link to="/practice-areas"
              class="border border-[#9A6829] text-[#9A6829] px-6 py-3 rounded-full font-semibold hover:bg-[#9A6829] hover:text-white transition">
              Our Services
            </router-link>
          </div>
        </div>

        <!-- RIGHT IMAGE -->
        <div class="hidden md:block">
          <img src="/rodgers-abdi-blue-bg.jpg"
            class="rounded-xl shadow-lg" />
        </div>

      </div>
    </section>

    <!-- trust stats section -->
     <section class="bg-white py-14 border-t border-gray-100">
      <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

        <!-- years of experience -->
         <div class="">
          <h3 class="text-4xl font-bold text-[#061c2a]">{{ years }}</h3>
          <p class="text-gray-500 mt-2">Years Experience</p>
         </div>

         <!-- cases handled -->
          <div class="">
            <h3 class="text-4xl font-bold text-[#061c2a]">{{ cases }}</h3>
            <p class="text-gray-500 mt-2">Cases Handled</p>
          </div>

          <!-- Trusted -->
           <div class="">
            <h3 class="text-4xl font-bold text-[#061c2a]">{{ trust }}</h3>
            <p class="text-gray-500 mt-2">Trusted Across Kenya</p>
           </div>

      </div>
     </section>


    <!-- PRACTICE AREAS (SOFT GRAY BACKGROUND) -->
    <section class="bg-[#F5F7FA] py-16">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 text-center">

        <h2 class="text-3xl font-bold text-[#061C2A] mb-4">
          Practice Areas
        </h2>

        <p class="text-gray-600 mb-10">
          We offer a wide range of legal services tailored to meet your needs.
        </p>

        <div class="grid md:grid-cols-4 gap-6">

          <router-link to="/practice-areas/criminal" class="practice-card">
            Criminal Law
          </router-link>
          <router-link to="/practice-areas/civil" class="practice-card">
            Civil Law
          </router-link>
          <router-link to="/practice-areas/corporate" class="practice-card">
            Corporate Law
          </router-link>
          <router-link to="/practice-areas/family" class="practice-card">
            Family Law
          </router-link>

        </div>

      </div>
    </section>


    <!-- ABOUT (WHITE AGAIN FOR CLEAN FLOW) -->
    <section class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-10 items-center">

        <img src="/rodgers-abdi-blue-bg.jpg"
          class="rounded-xl shadow-md" />

        <div>
          <h2 class="text-3xl font-bold text-[#061C2A] mb-4">
            About Our Firm
          </h2>

          <p class="text-gray-600 mb-6">
            With years of legal expertise, Rodgers Abdi & Company Advocates
            is committed to delivering reliable, ethical, and client-focused
            legal solutions.
          </p>

          <router-link to="/about" class="text-[#9A6829] font-semibold">
            Learn More →
          </router-link>
        </div>

      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="bg-[#F5F7FA] py-16">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 text-center">

        <h2 class="text-3xl font-bold text-[#061C2A] mb-4">
          What Our Clients Say
        </h2>

        <p class="text-gray-600 mb-10">
          Trusted by clients across Kenya for reliable legal services.
        </p>

        <div class="grid md:grid-cols-3 gap-6 text-left">

          <div class="bg-white p-6 rounded-xl shadow-sm">
            <p class="text-gray-600 mb-4">
              "Professional and highly responsive. They handled my case with great care and expertise."
            </p>
            <span class="text-sm font-semibold text-[#061C2A]">— Client A</span>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-sm">
            <p class="text-gray-600 mb-4">
              "I felt supported throughout the entire legal process. Highly recommended."
            </p>
            <span class="text-sm font-semibold text-[#061C2A]">— Client B</span>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-sm">
            <p class="text-gray-600 mb-4">
              "Reliable, transparent, and effective legal representation."
            </p>
            <span class="text-sm font-semibold text-[#061C2A]">— Client C</span>
          </div>

        </div>

      </div>
    </section>


    <!-- CTA (REFRESHED - NO NAVY CONFLICT) -->
    <section class="relative py-20 bg-gradient-to-r from-[#F5F7FA] to-white text-[#061C2A] text-center overflow-hidden">

      <!-- subtle decorative glow -->
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#9A6829,_transparent_60%)]"></div>

      <div class="relative max-w-3xl mx-auto px-4">

        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Need Legal Assistance?
        </h2>

        <p class="text-gray-600 mb-8 text-lg">
          Get professional legal support from a trusted advocate today.
        </p>

        <div class="flex justify-center gap-4 flex-wrap">

          <router-link to="/consultation"
            class="bg-[#9A6829] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7c531f] transition">
            Book a Consultation
          </router-link>

          <router-link to="/contact"
            class="border border-[#9A6829] text-[#9A6829] px-6 py-3 rounded-full font-semibold hover:bg-[#9A6829] hover:text-white transition">
            Contact Us
          </router-link>

        </div>

      </div>
    </section>

    <!-- FOOTER -->
    <!-- <section>
      <Footer />
    </section> -->

  </div>
</template>


<style scoped>
.practice-card {
  background: white;
  border: 1px solid #e5e7eb;
  padding: 28px;
  border-radius: 14px;
  font-weight: 600;
  color: #061C2A;
  transition: 0.3s ease;
}

.practice-card:hover {
  transform: translateY(-6px);
  background: #061C2A;
  color: white;
}
</style>