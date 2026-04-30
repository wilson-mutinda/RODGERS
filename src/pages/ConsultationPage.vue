<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  caseType: '',
  urgency: '',
  message: '',
  date: ''
})

const submitForm = () => {
  console.log('Consultation Request:', form.value)

  // TEMP SUCCESS (later connect to backend)
  alert('Your consultation request has been submitted successfully!')
}
</script>

<template>
  <div class="bg-white dark:bg-[#061C2A] text-[#061C2A] dark:text-white transition-colors duration-300">

    <!-- HERO -->
    <section class="py-24 text-center">
      <div data-aos="fade-up" class="max-w-3xl mx-auto px-4">

        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Book a <span class="text-[#9A6829]">Legal Consultation</span>
        </h1>

        <p class="text-gray-600 dark:text-gray-300 text-lg mb-6">
          Speak directly with an experienced advocate. Get clarity, strategy, and legal direction.
        </p>

        <p class="text-sm text-red-500 font-medium">
          ⚠️ Urgent cases are prioritized within 24 hours
        </p>

      </div>
    </section>

    <!-- FORM SECTION -->
    <section class="pb-20">
      <div class="max-w-4xl mx-auto px-4">

        <div data-aos="fade-up" class="bg-white dark:bg-[#0f2a3a] shadow-xl rounded-2xl p-8 md:p-10">

          <h2 class="text-2xl font-bold mb-6">
            Tell Us About Your Case
          </h2>

          <form @submit.prevent="submitForm" class="grid md:grid-cols-2 gap-6">

            <!-- NAME -->
            <div>
              <label class="text-sm font-medium">Full Name</label>
              <input v-model="form.name" type="text" required
                class="input" placeholder="John Doe" />
            </div>

            <!-- EMAIL -->
            <div>
              <label class="text-sm font-medium">Email</label>
              <input v-model="form.email" type="email" required
                class="input" placeholder="you@example.com" />
            </div>

            <!-- PHONE -->
            <div>
              <label class="text-sm font-medium">Phone Number</label>
              <input v-model="form.phone" type="tel" required
                class="input" placeholder="+254..." />
            </div>

            <!-- CASE TYPE -->
            <div>
              <label class="text-sm font-medium">Case Type</label>
              <select v-model="form.caseType" required class="input">
                <option value="">Select case type</option>
                <option>Criminal Law</option>
                <option>Civil Law</option>
                <option>Corporate Law</option>
                <option>Family Law</option>
              </select>
            </div>

            <!-- URGENCY -->
            <div>
              <label class="text-sm font-medium">Urgency</label>
              <select v-model="form.urgency" required class="input">
                <option value="">Select urgency</option>
                <option>Immediate (within 24 hrs)</option>
                <option>Within a few days</option>
                <option>Not urgent</option>
              </select>
            </div>

            <!-- DATE -->
            <div>
              <label class="text-sm font-medium">Preferred Date</label>
              <input v-model="form.date" type="date" class="input" />
            </div>

            <!-- MESSAGE -->
            <div class="md:col-span-2">
              <label class="text-sm font-medium">Case Description</label>
              <textarea v-model="form.message" rows="4"
                class="input" placeholder="Briefly describe your case..."></textarea>
            </div>

            <!-- SUBMIT -->
            <div class="md:col-span-2 text-center mt-4">
              <button type="submit"
                class="bg-[#9A6829] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#7c531f] transition">
                Book Consultation
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>

    <!-- TRUST STRIP -->
    <section class="bg-[#F5F7FA] dark:bg-[#0b2f45] py-12 text-center">
      <div data-aos="fade-up" class="max-w-5xl mx-auto px-4">

        <h3 class="text-xl font-semibold mb-4">
          Why Choose Us?
        </h3>

        <div class="grid md:grid-cols-3 gap-6 text-sm">

          <div>✔ Confidential & Professional</div>
          <div>✔ Experienced Legal Experts</div>
          <div>✔ Fast Response Time</div>

        </div>

      </div>
    </section>

  </div>
</template>

<style scoped>
.input {
  width: 100%;
  margin-top: 6px;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  background: white;
  outline: none;
  transition: 0.3s;
}

.dark .input {
  background: #061C2A;
  border-color: #1f3a4a;
  color: white;
}

.input:focus {
  border-color: #9A6829;
  box-shadow: 0 0 0 2px rgba(154, 104, 41, 0.2);
}
</style>