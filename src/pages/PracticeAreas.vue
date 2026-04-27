<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="bg-white">

    <!-- <Navbar /> -->

    <!-- HERO -->
    <section class="bg-white py-20 text-center">
      <h1 class="text-4xl font-bold text-[#061C2A] mb-4">
        Our Practice Areas
      </h1>
      <p class="text-gray-600 max-w-2xl mx-auto">
        We provide expert legal services across multiple areas of law,
        ensuring tailored solutions for every client.
      </p>
    </section>

    <!-- SERVICES (PREMIUM VERSION) -->
    <section class="bg-[#F5F7FA] py-20">
        <div class="max-w-7xl mx-auto px-4 lg:px-8 text-center">

            <h2 class="text-3xl md:text-4xl font-bold text-[#061C2A] mb-4">
            Our Legal Services
            </h2>

            <p class="text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide comprehensive legal representation across key areas of law,
            ensuring every client receives expert guidance and dedicated support.
            </p>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <!-- CARD -->
            <router-link to="/practice-areas/criminal" class="service-card group">
                <div class="icon">⚖️</div>
                <h3>Criminal Law</h3>
                <p>Strong legal defense and representation in criminal matters.</p>
                <span class="link">Learn More →</span>
            </router-link>

            <router-link to="/practice-areas/civil" class="service-card group">
                <div class="icon">📜</div>
                <h3>Civil Law</h3>
                <p>Resolving disputes with professionalism and legal precision.</p>
                <span class="link">Learn More →</span>
            </router-link>

            <router-link to="/practice-areas/corporate" class="service-card group">
                <div class="icon">🏢</div>
                <h3>Corporate Law</h3>
                <p>Legal solutions tailored for businesses and organizations.</p>
                <span class="link">Learn More →</span>
            </router-link>

            <router-link to="/practice-areas/family" class="service-card group">
                <div class="icon">👨‍👩‍👧</div>
                <h3>Family Law</h3>
                <p>Guidance and representation in sensitive family matters.</p>
                <span class="link">Learn More →</span>
            </router-link>

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

    <!-- <Footer /> -->

  </div>
</template>

<style scoped>
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
  transform: translateY(-8px);
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