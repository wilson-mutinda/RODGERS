<script setup lang="ts">
</script>

<template>
  <div class="transition-colors duration-300 bg-white dark:bg-[#061C2A] text-[#061C2A] dark:text-white">

    <!-- HERO -->
    <section class="py-24 text-center bg-white dark:bg-[#061C2A]">
      <div class="max-w-4xl mx-auto px-4">

        <h1 data-aos="fade-up" class="text-4xl md:text-5xl font-bold mb-6">
          Reliable Legal Support for Your Business
        </h1>

        <p data-aos="fade-up" class="text-gray-600 dark:text-gray-300 text-lg">
          From company formation to contracts and compliance,
          we help businesses navigate legal challenges with confidence.
        </p>

      </div>
    </section>

    <!-- SERVICES -->
    <section class="py-20 bg-[#F5F7FA] dark:bg-[#0b2f45] transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 text-center">

        <h2 data-aos="fade-up" class="text-3xl font-bold mb-10">
          Corporate Legal Services
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div data-aos="fade-up" class="card">Company Registration</div>
          <div data-aos="fade-up" class="card">Contract Drafting & Review</div>
          <div data-aos="fade-up" class="card">Business Compliance</div>
          <div data-aos="fade-up" class="card">Partnership Agreements</div>
          <div data-aos="fade-up" class="card">Corporate Disputes</div>
          <div data-aos="fade-up" class="card">Legal Advisory</div>

        </div>

      </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="py-20 text-center">
      <div class="max-w-6xl mx-auto px-4">

        <h2 data-aos="fade-up" class="text-3xl font-bold mb-12">
          Why Businesses Choose Us
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <div data-aos="zoom-in" class="info-card">
            <h3 class="font-semibold mb-2">Business-Focused Advice</h3>
            <p class="text-gray-600 dark:text-gray-300">
              We understand the legal needs of modern businesses.
            </p>
          </div>

          <div data-aos="zoom-in" class="info-card">
            <h3 class="font-semibold mb-2">Reliable Support</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Consistent and dependable legal guidance.
            </p>
          </div>

          <div data-aos="zoom-in" class="info-card">
            <h3 class="font-semibold mb-2">Confidential & Professional</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Your business matters are handled with discretion.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- PROCESS -->
    <section class="py-20 bg-[#F5F7FA] dark:bg-[#0b2f45] text-center">
      <div class="max-w-6xl mx-auto px-4">

        <h2 data-aos="fade-up" class="text-3xl font-bold mb-10">
          Our Corporate Process
        </h2>

        <div class="grid md:grid-cols-4 gap-6">

          <div data-aos="zoom-in" class="step">Consultation</div>
          <div data-aos="zoom-in" class="step">Assessment</div>
          <div data-aos="zoom-in" class="step">Strategy</div>
          <div data-aos="zoom-in" class="step">Execution</div>

        </div>

      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 max-w-4xl mx-auto px-4">
      <h2 data-aos="fade-up" class="text-3xl font-bold mb-10 text-center">
        Frequently Asked Questions
      </h2>

      <div class="space-y-6">

        <div data-aos="fade-up" class="faq">
          <h4>How long does company registration take?</h4>
          <p>It typically takes a few days depending on documentation.</p>
        </div>

        <div data-aos="fade-up" class="faq">
          <h4>Do you handle business contracts?</h4>
          <p>Yes, we draft and review contracts tailored to your needs.</p>
        </div>

        <div data-aos="fade-up" class="faq">
          <h4>How do I get started?</h4>
          <p>Simply book a consultation and we&apos;ll guide you.</p>
        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 text-center bg-white dark:bg-[#061C2A]">
      <div class="max-w-3xl mx-auto px-4">

        <h2 data-aos="fade-up" class="text-3xl md:text-4xl font-bold mb-6">
          Get Legal Support for Your Business Today
        </h2>

        <router-link
          data-aos="fade-up"
          to="/consultation"
          class="bg-[#9A6829] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7c531f] transition"
        >
          Speak to an Advocate
        </router-link>

      </div>
    </section>

  </div>
</template>

<style scoped>
.card {
  background: white;
  padding: 26px;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  font-weight: 600;
  transition: 0.3s;
}

.dark .card {
  background: #0f2a3a;
  border-color: #1f3a4a;
}

.card:hover {
  transform: translateY(-6px);
  background: #061C2A;
  color: white;
}

.info-card {
  background: white;
  padding: 26px;
  border-radius: 14px;
  transition: 0.3s;
}

.dark .info-card {
  background: #0f2a3a;
}

.step {
  background: white;
  padding: 20px;
  border-radius: 12px;
  font-weight: 600;
}

.dark .step {
  background: #0f2a3a;
}

.faq h4 {
  font-weight: 600;
}

.faq p {
  color: gray;
  font-size: 14px;
}
</style>