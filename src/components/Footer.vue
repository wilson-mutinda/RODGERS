<template>
  <footer class="bg-[#061C2A] text-gray-300 pt-12 pb-6">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">

      <div class="grid md:grid-cols-3 gap-10">

        <!-- LOGO + ABOUT -->
        <div>
          <img src="/rodgers-abdi-blue-bg.jpg" class="h-24 mb-4" />
          <p class="text-sm leading-relaxed">
            Rodgers Abdi & Company Advocates is committed to delivering
            professional, reliable, and client-focused legal services across Kenya.
          </p>
        </div>

        <!-- QUICK LINKS -->
        <div>
          <h3 class="text-[#9A6829] font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2 text-sm">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/practice-areas">Practice Areas</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>

        <!-- CONTACT -->
        <div>
          <h3 class="text-[#9A6829] font-semibold mb-4">Contact</h3>
          <ul class="text-sm space-y-2">
            <li>P.O Box 50536 - 00200</li>
            <li>Nairobi, Kenya</li>
            <li>Email: abdirodgers@gmail.com</li>
            <li>Phone: 0706468026</li>
          </ul>
        </div>

      </div>

      <!-- BOTTOM -->
      <div class="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-500">
        © {{ new Date().getFullYear() }} Rodgers Abdi & Company Advocates. All rights reserved.
      </div>
    </div>
  </footer>
</template>