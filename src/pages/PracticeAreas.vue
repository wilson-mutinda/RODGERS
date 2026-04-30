<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="bg-white">

    <!-- NAVBAR -->
    <!-- <Navbar /> -->

    <!-- HERO -->
    <section class="bg-white py-20 text-center">
      <h1 class="text-4xl font-bold text-[#061C2A] mb-4">
        Legal Services Tailored to Your Needs
      </h1>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Whether you're facing a legal dispute, managing a business, or navigating family matters,
        our experienced advocates provide practical and effective legal solutions.
      </p>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="bg-[#F5F7FA] py-16">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 text-center">

        <h2 class="text-3xl font-bold text-[#061C2A] mb-10">
          Why Choose Our Firm
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="info-card">
            <h3 class="font-semibold text-lg mb-2">Experienced Advocates</h3>
            <p class="text-gray-600 text-sm">
              Years of hands-on experience across multiple areas of law.
            </p>
          </div>

          <div class="info-card">
            <h3 class="font-semibold text-lg mb-2">Client-Focused Approach</h3>
            <p class="text-gray-600 text-sm">
              Every case is handled with personalized attention and care.
            </p>
          </div>

          <div class="info-card">
            <h3 class="font-semibold text-lg mb-2">Proven Results</h3>
            <p class="text-gray-600 text-sm">
              A strong track record of successful legal outcomes.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- SERVICES -->
    <section class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 text-center">

        <h2 class="text-3xl md:text-4xl font-bold text-[#061C2A] mb-4">
          Our Legal Services
        </h2>

        <p class="text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our core areas of practice and find the legal support that suits your needs.
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <!-- CARD -->
          <router-link to="/practice-areas/criminal" class="service-card group">
            <div class="icon">⚖️</div>
            <h3>Criminal Law</h3>
            <p>Defending your rights with strong representation in criminal cases.</p>
            <span class="link">Learn More →</span>
          </router-link>

          <router-link to="/practice-areas/civil" class="service-card group">
            <div class="icon">📜</div>
            <h3>Civil Law</h3>
            <p>Resolving disputes efficiently through skilled legal advocacy.</p>
            <span class="link">Learn More →</span>
          </router-link>

          <router-link to="/practice-areas/corporate" class="service-card group">
            <div class="icon">🏢</div>
            <h3>Corporate Law</h3>
            <p>Helping businesses navigate legal challenges with confidence.</p>
            <span class="link">Learn More →</span>
          </router-link>

          <router-link to="/practice-areas/family" class="service-card group">
            <div class="icon">👨‍👩‍👧</div>
            <h3>Family Law</h3>
            <p>Supporting you through sensitive family matters with care and discretion.</p>
            <span class="link">Learn More →</span>
          </router-link>

        </div>

        <!-- MINI CTA -->
        <div class="mt-12">
          <router-link to="/consultation"
            class="bg-[#061C2A] text-white px-6 py-3 rounded-full font-semibold hover:bg-black transition">
            Not Sure Where to Start? Speak to an Advocate →
          </router-link>
        </div>

      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="relative py-20 bg-gradient-to-r from-[#F5F7FA] to-white text-[#061C2A] text-center overflow-hidden">

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
            Speak to an Advocate Today
          </router-link>

          <router-link to="/contact"
            class="border border-[#9A6829] text-[#9A6829] px-6 py-3 rounded-full font-semibold hover:bg-[#9A6829] hover:text-white transition">
            Contact Us
          </router-link>

        </div>

      </div>
    </section>

    <!-- FOOTER -->
    <!-- <Footer /> -->

  </div>
</template>

<style scoped>
.info-card {
  background: white;
  padding: 28px;
  border-radius: 14px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.05);
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

.service-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: #061C2A;
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

/* HOVER EFFECT */
.service-card:hover {
  transform: translateY(-8px) scale(1.02);
  background: #061C2A;
  border-color: transparent;
}

.service-card:hover h3,
.service-card:hover p {
  color: white;
}

.service-card:hover .link {
  color: #9A6829;
}
</style>