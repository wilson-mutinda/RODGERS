<script setup lang="ts">
</script>

<template>
  <div class="bg-white">

    <!-- HERO -->
    <section class="py-20 text-center bg-white">
      <h1 class="text-4xl font-bold text-[#061C2A] mb-4">
        Reliable Legal Support for Your Business
      </h1>
      <p class="text-gray-600 max-w-2xl mx-auto">
        From company formation to contracts and compliance,
        we help businesses navigate legal challenges with confidence.
      </p>
    </section>

    <!-- SERVICES -->
    <section class="bg-[#F5F7FA] py-16">
      <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div class="card">Company Registration</div>
        <div class="card">Contract Drafting & Review</div>
        <div class="card">Business Compliance</div>
        <div class="card">Partnership Agreements</div>
        <div class="card">Corporate Disputes</div>
        <div class="card">Legal Advisory</div>

      </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="py-16 text-center">
      <h2 class="text-3xl font-bold text-[#061C2A] mb-10">
        Why Businesses Choose Us
      </h2>

      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">

        <div class="info-card">
          <h3>Business-Focused Advice</h3>
          <p>We understand the legal needs of modern businesses.</p>
        </div>

        <div class="info-card">
          <h3>Reliable Support</h3>
          <p>Consistent and dependable legal guidance.</p>
        </div>

        <div class="info-card">
          <h3>Confidential & Professional</h3>
          <p>Your business matters are handled with discretion.</p>
        </div>

      </div>
    </section>

    <!-- PROCESS -->
    <section class="bg-[#F5F7FA] py-16 text-center">
      <h2 class="text-3xl font-bold text-[#061C2A] mb-10">
        Our Process
      </h2>

      <div class="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">

        <div class="step">Consultation</div>
        <div class="step">Assessment</div>
        <div class="step">Strategy</div>
        <div class="step">Execution</div>

      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-[#061C2A] mb-8 text-center">
        Frequently Asked Questions
      </h2>

      <div class="space-y-4">

        <div class="faq">
          <h4>How long does company registration take?</h4>
          <p>It typically takes a few days depending on documentation.</p>
        </div>

        <div class="faq">
          <h4>Do you handle business contracts?</h4>
          <p>Yes, we draft and review contracts tailored to your needs.</p>
        </div>

        <div class="faq">
          <h4>How do I get started?</h4>
          <p>Simply book a consultation and we&apos;ll guide you.</p>
        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 text-center bg-white">
      <h2 class="text-3xl font-bold mb-4">
        Get Legal Support for Your Business Today
      </h2>

      <router-link to="/consultation"
        class="bg-[#9A6829] text-white px-6 py-3 rounded-full font-semibold">
        Speak to an Advocate
      </router-link>
    </section>

  </div>
</template>

<style scoped>
.card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
}

.info-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
}

.step {
  background: white;
  padding: 20px;
  border-radius: 10px;
}

.faq h4 {
  font-weight: 600;
}

.faq p {
  color: gray;
  font-size: 14px;
}
</style>