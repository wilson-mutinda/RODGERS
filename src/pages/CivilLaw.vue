<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { onMounted, ref, type Ref } from 'vue'

const cases = ref(0)
const success = ref(0)

const animateValue = (
  refvar: Ref<number | string>,
  end: number,
  duration: number = 1200
) => {
  let start = 0
  const increment = end / (duration / 16)

  const counter = setInterval(() => {
    start += increment
    if (start >= end) {
      refvar.value = end + '+'
      clearInterval(counter)
    } else {
      refvar.value = Math.floor(start)
    }
  }, 16)
}

onMounted(() => {
  animateValue(cases, 420)
  animateValue(success, 95)
})
</script>

<template>
  <div class="bg-white dark:bg-[#061C2A] text-[#061C2A] dark:text-white transition-colors duration-300">

    <!-- HERO -->
    <section class="py-24 bg-white dark:bg-[#061C2A]">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Civil Disputes? <br />
            <span class="text-[#9A6829]">We Help You Get Justice.</span>
          </h1>

          <p class="text-gray-600 dark:text-gray-300 text-lg mb-6">
            Expert legal support in civil disputes, contracts, property, and compensation claims across Kenya.
          </p>

          <div class="flex flex-wrap gap-4">
            <router-link
              to="/consultation"
              class="bg-[#9A6829] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7c531f] transition"
            >
              Resolve Your Case
            </router-link>

            <router-link
              to="/contact"
              class="border border-[#9A6829] text-[#9A6829] hover:bg-[#9A6829] hover:text-white px-6 py-3 rounded-full font-semibold transition"
            >
              Talk to a Lawyer
            </router-link>
          </div>
        </div>

        <div class="hidden md:block">
          <img
            src="/rodgers-abdi-blue-bg.jpg"
            class="rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>

    <!-- PAIN / SITUATIONS -->
    <section class="bg-[#F5F7FA] dark:bg-[#0b2f45] py-16 transition-colors duration-300">
      <div class="max-w-5xl mx-auto px-4 text-center">

        <h2 class="text-3xl font-bold mb-6">
          Common Civil Disputes We Handle
        </h2>

        <div class="grid md:grid-cols-2 gap-6 text-left">

          <div class="bg-white dark:bg-[#0f2a3a] p-6 rounded-xl">
            Contract disputes between individuals or businesses
          </div>

          <div class="bg-white dark:bg-[#0f2a3a] p-6 rounded-xl">
            Property ownership and land conflicts
          </div>

          <div class="bg-white dark:bg-[#0f2a3a] p-6 rounded-xl">
            Debt recovery and compensation claims
          </div>

          <div class="bg-white dark:bg-[#0f2a3a] p-6 rounded-xl">
            Negligence and personal injury cases
          </div>

        </div>

      </div>
    </section>

    <!-- SERVICES -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 text-center">

        <h2 class="text-3xl font-bold mb-10">
          Our Civil Law Services
        </h2>

        <div class="grid md:grid-cols-3 gap-6">

          <div class="service-card">Contract Disputes</div>
          <div class="service-card">Property & Land Cases</div>
          <div class="service-card">Debt Recovery</div>
          <div class="service-card">Compensation Claims</div>
          <div class="service-card">Negligence Cases</div>
          <div class="service-card">Legal Advisory</div>

        </div>

      </div>
    </section>

    <!-- PROCESS -->
    <section class="bg-[#F5F7FA] dark:bg-[#0b2f45] py-16">
      <div class="max-w-6xl mx-auto px-4 text-center">

        <h2 class="text-3xl font-bold mb-10">
          How We Handle Civil Cases
        </h2>

        <div class="grid md:grid-cols-4 gap-6">

          <div class="step-card">1. Case Consultation</div>
          <div class="step-card">2. Evidence Review</div>
          <div class="step-card">3. Legal Strategy</div>
          <div class="step-card">4. Resolution / Court Action</div>

        </div>

      </div>
    </section>

    <!-- STATS -->
    <section class="py-14 border-t border-gray-200 dark:border-gray-700">
      <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 text-center">

        <div>
          <h3 class="text-4xl font-bold">{{ cases }}</h3>
          <p class="text-gray-500 dark:text-gray-400 mt-2">Civil Cases Handled</p>
        </div>

        <div>
          <h3 class="text-4xl font-bold">{{ success }}%</h3>
          <p class="text-gray-500 dark:text-gray-400 mt-2">Favorable Outcomes</p>
        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 text-center bg-gradient-to-r from-[#F5F7FA] to-white dark:from-[#061C2A] dark:to-[#0b2f45]">

      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        Need Help Resolving a Dispute?
      </h2>

      <p class="text-gray-600 dark:text-gray-300 mb-8">
        Get professional legal support for your civil matter today.
      </p>

      <div class="flex justify-center gap-4 flex-wrap">

        <router-link
          to="/consultation"
          class="bg-[#9A6829] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7c531f] transition"
        >
          Start Your Case
        </router-link>

        <router-link
          to="/contact"
          class="border border-[#9A6829] text-[#9A6829] hover:bg-[#9A6829] hover:text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Contact Us
        </router-link>

      </div>

    </section>

  </div>
</template>

<style scoped>
.service-card {
  background: white;
  border: 1px solid #e5e7eb;
  padding: 22px;
  border-radius: 14px;
  font-weight: 600;
  transition: 0.3s;
}

.dark .service-card {
  background: #0f2a3a;
  border-color: #1f3a4a;
}

.service-card:hover {
  transform: translateY(-6px);
  background: #061C2A;
  color: white;
}

.step-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  font-weight: 600;
}

.dark .step-card {
  background: #0f2a3a;
}
</style>