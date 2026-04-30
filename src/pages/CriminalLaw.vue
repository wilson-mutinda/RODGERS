<script setup lang="ts">
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
  animateValue(cases, 300)
  animateValue(success, 92)
})
</script>

<template>
  <div class="transition-colors duration-300 bg-white dark:bg-[#061C2A] text-[#061C2A] dark:text-white">

    <!-- HERO -->
    <section class="py-24 bg-white dark:bg-[#061C2A]">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-12 items-center">

        <!-- TEXT -->
        <div data-aos="fade-up">
          <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Facing Criminal Charges? <br />
            <span class="text-[#9A6829]">Get Immediate Legal Defense.</span>
          </h1>

          <p class="text-gray-600 dark:text-gray-300 text-lg mb-8">
            We provide strong legal representation in criminal cases across Kenya,
            ensuring your rights are fully protected.
          </p>

          <div class="flex flex-wrap gap-4">
            <router-link
              to="/consultation"
              class="bg-[#9A6829] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7c531f] transition"
            >
              Get Legal Help Now
            </router-link>

            <router-link
              to="/contact"
              class="border border-[#9A6829] text-[#9A6829] hover:bg-[#9A6829] hover:text-white px-6 py-3 rounded-full font-semibold transition"
            >
              Talk to an Advocate
            </router-link>
          </div>
        </div>

        <!-- IMAGE -->
        <div class="hidden md:block" data-aos="zoom-in">
          <img src="/rodgers-abdi-blue-bg.jpg" class="rounded-xl shadow-lg" />
        </div>

      </div>
    </section>

    <!-- PAIN POINTS -->
    <section class="py-16 bg-[#F5F7FA] dark:bg-[#0b2f45] transition-colors duration-300">
      <div class="max-w-5xl mx-auto px-4 text-center">

        <h2 class="text-3xl font-bold mb-10" data-aos="fade-up">
          Are You Facing Any of These?
        </h2>

        <div class="grid md:grid-cols-2 gap-6 text-left">

          <div data-aos="fade-up" class="bg-white dark:bg-[#0f2a3a] p-6 rounded-xl shadow-sm">
            Arrested or under investigation
          </div>

          <div data-aos="fade-up" class="bg-white dark:bg-[#0f2a3a] p-6 rounded-xl shadow-sm">
            Court summons or charges filed
          </div>

          <div data-aos="fade-up" class="bg-white dark:bg-[#0f2a3a] p-6 rounded-xl shadow-sm">
            Fraud, theft or assault allegations
          </div>

          <div data-aos="fade-up" class="bg-white dark:bg-[#0f2a3a] p-6 rounded-xl shadow-sm">
            Need urgent bail or legal advice
          </div>

        </div>

      </div>
    </section>

    <!-- SERVICES -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 text-center">

        <h2 class="text-3xl font-bold mb-10" data-aos="fade-up">
          Our Criminal Law Services
        </h2>

        <div class="grid md:grid-cols-3 gap-6">

          <div class="service-card" data-aos="fade-up">Bail & Bond Applications</div>
          <div class="service-card" data-aos="fade-up">Court Representation</div>
          <div class="service-card" data-aos="fade-up">Criminal Defense</div>
          <div class="service-card" data-aos="fade-up">Police Investigation Support</div>
          <div class="service-card" data-aos="fade-up">Appeals & Legal Advice</div>
          <div class="service-card" data-aos="fade-up">Emergency Legal Help</div>

        </div>

      </div>
    </section>

    <!-- PROCESS -->
    <section class="py-16 bg-[#F5F7FA] dark:bg-[#0b2f45]">
      <div class="max-w-6xl mx-auto px-4 text-center">

        <h2 class="text-3xl font-bold mb-10" data-aos="fade-up">
          How We Work
        </h2>

        <div class="grid md:grid-cols-4 gap-6">

          <div class="step-card" data-aos="zoom-in">1. Consultation</div>
          <div class="step-card" data-aos="zoom-in">2. Case Review</div>
          <div class="step-card" data-aos="zoom-in">3. Strategy</div>
          <div class="step-card" data-aos="zoom-in">4. Representation</div>

        </div>

      </div>
    </section>

    <!-- STATS -->
    <section class="py-14 border-t border-gray-200 dark:border-gray-700">
      <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 text-center">

        <div data-aos="fade-up">
          <h3 class="text-4xl font-bold">{{ cases }}</h3>
          <p class="text-gray-500 dark:text-gray-400 mt-2">Cases Handled</p>
        </div>

        <div data-aos="fade-up">
          <h3 class="text-4xl font-bold">{{ success }}%</h3>
          <p class="text-gray-500 dark:text-gray-400 mt-2">Success Rate Focus</p>
        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 text-center bg-gradient-to-r from-[#F5F7FA] to-white dark:from-[#061C2A] dark:to-[#0b2f45]">

      <h2 class="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
        Don&apos;t Face Criminal Charges Alone
      </h2>

      <p class="text-gray-600 dark:text-gray-300 mb-8" data-aos="fade-up">
        Get immediate legal support from experienced advocates.
      </p>

      <div class="flex justify-center gap-4 flex-wrap" data-aos="fade-up">

        <router-link
          to="/consultation"
          class="bg-[#9A6829] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7c531f] transition"
        >
          Contact Lawyer Now
        </router-link>

        <router-link
          to="/contact"
          class="border border-[#9A6829] text-[#9A6829] hover:bg-[#9A6829] hover:text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Book Consultation
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
  transition: 0.3s;
}

.dark .step-card {
  background: #0f2a3a;
}
</style>