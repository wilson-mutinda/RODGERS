<script setup lang="ts">
import { useInquiryStore } from '@/stores/inquiry'
import { ref } from 'vue'

const inquiryStore = useInquiryStore()

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const loading = ref(false)
const success = ref(false)
const errorMessage = ref('')

const submitForm = async () => {
  loading.value = true
  success.value = false
  errorMessage.value = ''

  const result = await inquiryStore.submitInquiry(form.value)

  if (result.success) {
    success.value = true
    form.value = {
      name: '',
      email: '',
      phone: '',
      message: '',
    }
    setTimeout(() => {
      success.value = false
    }, 5000);
  } else {
    errorMessage.value = 'Failed to send message. Please try again later.'
  }

  loading.value = false
}

</script>

<template>
  <div class="bg-white dark:bg-[#061C2A] text-[#061C2A] dark:text-white transition-colors duration-300">

    <!-- HERO -->
    <section class="py-20 text-center">
      <div data-aos="fade-up" class="max-w-3xl mx-auto px-4">

        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Contact <span class="text-[#9A6829]">Our Legal Team</span>
        </h1>

        <p class="text-gray-600 dark:text-gray-300 text-lg">
          Get fast, confidential legal assistance from experienced advocates.
        </p>

      </div>
    </section>

    <!-- CONTACT GRID -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-12">

        <!-- FORM -->
        <div data-aos="fade-right">

          <h2 class="text-2xl font-bold mb-6">
            Send Us a Message
          </h2>

          <form @submit.prevent="submitForm" class="space-y-4">

            <input
              v-model="form.name"
              type="text"
              placeholder="Your Name"
              class="input"
              required
            />

            <input
              v-model="form.email"
              type="email"
              placeholder="Email Address"
              class="input"
              required
            />

            <input
              v-model="form.phone"
              type="tel"
              placeholder="Phone Number"
              class="input"
            />

            <textarea
              v-model="form.message"
              rows="5"
              placeholder="Describe your legal issue..."
              class="input"
              required
            ></textarea>

            <button
              type="submit"
              class="w-full bg-[#9A6829] text-white py-3 rounded-full font-semibold hover:bg-[#7c531f] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ loading ? 'Sending...' : 'Send Message' }}
            </button>

            <div v-if="success" class="bg-green-100 border border-green-200 text-green-700 p-4 rounded-xl mt-4 text-center">
              ✓  Message sent successfully! We'll get back to you within 24 hours.
            </div>
            <div v-if="errorMessage" class="bg-red-100 border border-red-200 text-red-700 p-4 rounded-xl mt-4 text-center">
              {{ errorMessage }}
            </div>

          </form>

        </div>

        <!-- CONTACT INFO -->
        <div data-aos="fade-left" class="space-y-6">

          <div class="info-card">
            <h3 class="font-semibold mb-2">📍 Office Location</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Nairobi
            </p>
          </div>

          <div class="info-card">
            <h3 class="font-semibold mb-2">📞 Phone</h3>
            <p class="text-gray-600 dark:text-gray-300">
              +254 706 468 026
            </p>
          </div>

          <div class="info-card">
            <h3 class="font-semibold mb-2">✉️ Email</h3>
            <p class="text-gray-600 dark:text-gray-300">
              abdirodgers.co.ke
            </p>
          </div>

          <div class="info-card">
            <h3 class="font-semibold mb-2">⏰ Working Hours</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Mon – Fri: 8:00 AM – 5:00 PM<br />
              Sat: 9:00 AM – 1:00 PM
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- MAP SECTION -->
    <section class="py-16 bg-[#F5F7FA] dark:bg-[#0b2f45] transition-colors duration-300">
      <div class="max-w-6xl mx-auto px-4 text-center">

        <h2 class="text-3xl font-bold mb-6" data-aos="fade-up">
          Visit Our Office
        </h2>

        <div class="rounded-xl overflow-hidden shadow-lg" data-aos="zoom-in">
          <iframe
            src="https://maps.google.com/maps?q=Nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            class="w-full h-[350px]"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 text-center bg-gradient-to-r from-[#F5F7FA] to-white dark:from-[#061C2A] dark:to-[#0b2f45]">

      <div data-aos="zoom-in">

        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Need Immediate Legal Help?
        </h2>

        <p class="text-gray-600 dark:text-gray-300 mb-8">
          Speak directly with an advocate and get professional legal guidance.
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
.input {
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  background: white;
}

.dark .input {
  background: #0f2a3a;
  border-color: #1f3a4a;
  color: white;
}

.info-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
}

.dark .info-card {
  background: #0f2a3a;
}
</style>