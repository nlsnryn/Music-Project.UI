<template>
  <div class="w-full bg-black text-gray-100">
    <div
      class="container mx-auto flex h-full max-w-4xl flex-wrap items-start justify-between p-6 pb-4 pt-8 text-sm"
    >
      <div>
        <div class="mb-2 text-lg underline">
          <b>Quick links</b>
        </div>
        <router-link to="/" class="mb-2 block">Home</router-link>
        <router-link to="/login" class="mb-2 block">Login</router-link>
        <router-link to="/register" class="mb-2 block">Register</router-link>
      </div>
      <div>
        <div class="mb-2 text-lg underline">Our company</div>
        <p class="mb-4 leading-normal">
          Libid <br />
          Binangonan, Rizal <br />
          Philippines
        </p>
        <p class="text-sm">0930 578 2924</p>
      </div>
    </div>

    <div
      class="container mx-auto flex h-full max-w-4xl flex-wrap items-center justify-between py-6 pl-6 pr-4 text-sm"
    >
      <div class="mt-4">&copy;2023 NMP Company. All rights reserved.</div>
      <div class="pt-4 text-end text-xs md:p-0">
        <div class="ml-4 no-underline hover:underline">Privacy Policy</div>
        <div class="ml-4 no-underline hover:underline">Terms & Conditions</div>
        <div class="ml-4 no-underline hover:underline">Contact Us</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
