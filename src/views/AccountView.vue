<script setup>
import TopNavigation from "../components/structure/TopNavigation.vue";
import FooterSection from "../components/structure/FooterSection.vue";
</script>

<template>
  <TopNavigation />
  <div class="max-height mx-auto max-w-4xl">
    <router-view></router-view>
  </div>
  <FooterSection />
</template>

<style scoped>
.max-height {
  min-height: 75vh;
}
</style>
