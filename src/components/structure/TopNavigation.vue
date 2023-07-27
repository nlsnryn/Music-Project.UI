<script setup>
import FullscreenModal from "./FullscreenModal.vue";
</script>

<template>
  <nav class="relative z-20 w-full bg-black px-4 text-white">
    <div
      class="container mx-auto flex h-16 max-w-4xl items-center justify-between text-xs md:text-sm"
    >
      <div class="flex h-full items-center">
        <router-link to="/" class="flex items-center justify-center">
          <div class="text-2xl text-white"><b>NMP</b></div></router-link
        >
      </div>

      <div class="flex h-full items-center">
        <FullscreenModal />
      </div>
    </div>
  </nav>
</template>
