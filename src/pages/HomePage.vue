<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'

const years = ref(0)
const cases = ref(0)
const trust = ref(0)

const animateValue = (
  refvar: Ref<number | string>,
  end: number,
  duration: number = 1500
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
  animateValue(years, 10)
  animateValue(cases, 500)
  animateValue(trust, 100)
})
</script>

<template>
  <div class="bg-white dark:bg-[#061C2A] text-[#061C2A] dark:text-white transition-colors duration-300">

    <!-- HERO -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-12 items-center">

        <!-- TEXT -->
        <div data-aos="fade-right">

          <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Facing a Legal Problem? <br />
            <span class="text-[#9A6829]">We Defend, Protect & Win for You.</span>
          </h1>

          <p class="text-gray-600 dark:text-gray-300 text-lg mb-6">
            Criminal charges, civil disputes, business conflicts, or family matters —
            get fast, professional legal help from trusted advocates in Kenya.
          </p>

          <div class="flex flex-wrap gap-4">
            <router-link
              to="/consultation"
              class="bg-[#9A6829] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7c531f] transition"
            >
              Get Legal Help Now
            </router-link>

            <router-link
              to="/practice-areas"
              class="border border-[#9A6829] text-[#9A6829] px-6 py-3 rounded-full font-semibold hover:bg-[#9A6829] hover:text-white transition"
            >
              View Services
            </router-link>
          </div>

        </div>

        <!-- IMAGE -->
        <div class="hidden md:block" data-aos="fade-left">
          <img
            src="/rodgers-abdi-blue-bg.jpg"
            class="rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>

    <!-- TRUST STRIP -->
    <section class="py-12 border-t border-gray-100 dark:border-gray-700">
      <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

        <div data-aos="zoom-in">
          <h3 class="text-4xl font-bold">{{ years }}</h3>
          <p class="text-gray-500 dark:text-gray-400 mt-2">Years Experience</p>
        </div>

        <div data-aos="zoom-in" data-aos-delay="100">
          <h3 class="text-4xl font-bold">{{ cases }}</h3>
          <p class="text-gray-500 dark:text-gray-400 mt-2">Cases Handled</p>
        </div>

        <div data-aos="zoom-in" data-aos-delay="200">
          <h3 class="text-4xl font-bold">{{ trust }}</h3>
          <p class="text-gray-500 dark:text-gray-400 mt-2">Clients Trusted Across Kenya</p>
        </div>

      </div>
    </section>

    <!-- LEGAL PROBLEMS WE SOLVE -->
    <section class="bg-[#F5F7FA] dark:bg-[#0b2f45] py-16 transition-colors duration-300">

      <div class="max-w-7xl mx-auto px-4 text-center">

        <h2 class="text-3xl font-bold mb-4" data-aos="fade-up">
          Legal Problems We Solve
        </h2>

        <p class="text-gray-600 dark:text-gray-300 mb-10" data-aos="fade-up">
          We don&apos;t just offer legal services — we solve real-life legal emergencies.
        </p>

        <div class="grid md:grid-cols-4 gap-6">

          <router-link to="/practice-areas/criminal" class="service-card" data-aos="fade-up" data-aos-delay="100">
            <div class="practice-card">
              Criminal Charges & Arrests
            </div>
          </router-link>

          <router-link to="/practice-areas/civil" class="service-card" data-aos="fade-up" data-aos-delay="100">
            <div class="practice-card">
              Civil Disputes & Compensation
            </div>
          </router-link>

          <router-link to="/practice-areas/corporate" class="service-card" data-aos="fade-up" data-aos-delay="100">
            <div class="practice-card">
              Business & Contract Issues
            </div>
          </router-link>

          <router-link to="/practice-areas/family" class="service-card" data-aos="fade-up" data-aos-delay="100">
            <div class="practice-card">
              Family & Inheritance Matters
            </div>
          </router-link>

        </div>

      </div>
    </section>

    <!-- ABOUT SHORT AUTHORITY -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-10 items-center">

        <img src="/rodgers-abdi-blue-bg.jpg" class="rounded-xl shadow-md" data-aos="fade-right" />

        <div data-aos="fade-left">

          <h2 class="text-3xl font-bold mb-4">
            Why Clients Trust Us
          </h2>

          <p class="text-gray-600 dark:text-gray-300 mb-6">
            We combine legal expertise with a client-first approach.
            Every case is handled with urgency, strategy, and confidentiality.
          </p>

          <router-link
            to="/about"
            class="text-[#9A6829] font-semibold"
          >
            Learn More About Us →
          </router-link>

        </div>

      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="bg-[#F5F7FA] dark:bg-[#0b2f45] py-16">

      <div class="max-w-7xl mx-auto px-4 text-center">

        <h2 class="text-3xl font-bold mb-10" data-aos="fade-up">
          What Clients Say
        </h2>

        <div class="grid md:grid-cols-3 gap-6 text-left">

          <div class="bg-white dark:bg-[#0f2a3a] p-6 rounded-xl" data-aos="fade-up">
            "Fast response and excellent legal representation."
          </div>

          <div class="bg-white dark:bg-[#0f2a3a] p-6 rounded-xl" data-aos="fade-up" data-aos-delay="100">
            "They handled my case professionally and won."
          </div>

          <div class="bg-white dark:bg-[#0f2a3a] p-6 rounded-xl" data-aos="fade-up" data-aos-delay="200">
            "Reliable and very trustworthy advocates."
          </div>

        </div>

      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="py-20 text-center bg-gradient-to-r from-[#F5F7FA] to-white dark:from-[#061C2A] dark:to-[#0b2f45]">

      <div data-aos="zoom-in">

        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Need Legal Help Right Now?
        </h2>

        <p class="text-gray-600 dark:text-gray-300 mb-8">
          Don&apos;t wait until it&apos;s too late — speak to an advocate today.
        </p>

        <router-link
          to="/consultation"
          class="bg-[#9A6829] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7c531f] transition"
        >
          Book Consultation
        </router-link>

      </div>

    </section>

  </div>
</template>

<style scoped>
.practice-card {
  background: white;
  border: 1px solid #e5e7eb;
  padding: 26px;
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