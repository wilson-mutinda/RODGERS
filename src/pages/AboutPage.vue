<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="bg-white">

    <!-- NAVBAR
    <Navbar /> -->

    <!-- HERO -->
    <section class="bg-white text-[#061C2A]">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 py-20 text-center">

        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          About <span class="text-[#9A6829]">Our Firm</span>
        </h1>

        <p class="text-gray-600 max-w-3xl mx-auto text-lg">
          Rodgers Abdi & Company Advocates is a trusted legal practice dedicated
          to delivering professional, ethical, and client-focused legal solutions across Kenya.
        </p>

      </div>
    </section>


    <!-- WHO WE ARE -->
    <section class="bg-[#F5F7FA] py-16">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 class="text-3xl font-bold text-[#061C2A] mb-4">
            Who We Are
          </h2>

          <p class="text-gray-600 leading-relaxed mb-4">
            We are a dedicated legal firm offering comprehensive legal services
            in criminal law, civil litigation, corporate law, and family law.
            Our approach is rooted in professionalism, integrity, and commitment to justice.
          </p>

          <p class="text-gray-600 leading-relaxed">
            Over the years, we have built a reputation for delivering reliable
            legal representation tailored to each client&apos;s unique needs.
          </p>
        </div>

        <div>
          <img src="/rodgers-abdi-blue-bg.jpg" class="rounded-xl shadow-md" />
        </div>

      </div>
    </section>


    <!-- MISSION & VISION -->
    <section class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-8">

        <div class="info-card">
          <h3 class="text-xl font-bold mb-3 text-[#061C2A]">Our Mission</h3>
          <p class="text-gray-600">
            To provide accessible, ethical, and high-quality legal services
            that protect and advance the rights and interests of our clients.
          </p>
        </div>

        <div class="info-card">
          <h3 class="text-xl font-bold mb-3 text-[#061C2A]">Our Vision</h3>
          <p class="text-gray-600">
            To be a leading law firm recognized for excellence, trust, and
            impactful legal solutions in Kenya and beyond.
          </p>
        </div>

      </div>
    </section>


    <!-- VALUES -->
    <section class="bg-[#F5F7FA] py-16 text-center">
      <div class="max-w-7xl mx-auto px-4 lg:px-8">

        <h2 class="text-3xl font-bold text-[#061C2A] mb-10">
          Our Core Values
        </h2>

        <div class="grid md:grid-cols-4 gap-6">

          <div class="value-card">Integrity</div>
          <div class="value-card">Confidentiality</div>
          <div class="value-card">Professionalism</div>
          <div class="value-card">Client Focus</div>

        </div>

      </div>
    </section>


    <!-- EXPERTISE -->
    <section class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 text-center">

        <h2 class="text-3xl font-bold text-[#061C2A] mb-4">
          Our Expertise
        </h2>

        <p class="text-gray-600 mb-10">
          We specialize in a wide range of legal services tailored to meet diverse client needs.
        </p>

        <div class="grid md:grid-cols-4 gap-6">

          <div class="practice-card">Criminal Law</div>
          <div class="practice-card">Civil Litigation</div>
          <div class="practice-card">Corporate Law</div>
          <div class="practice-card">Family Law</div>

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

.value-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  font-weight: 600;
  color: #061C2A;
  transition: 0.3s;
}

.value-card:hover {
  background: #061C2A;
  color: white;
  transform: translateY(-5px);
}

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
  background: #061C2A;
  color: white;
  transform: translateY(-6px);
}
</style>