<script setup>
import { useUserStore } from "../../../stores/user.store";

const userStore = useUserStore();
</script>

<template>
  <div class="py-2">
    <p class="text-lg text-gray-900">
      <b>About me</b>
    </p>
    <p class="text-md leading-normal text-gray-600 md:text-lg">
      {{ userStore.description }}
    </p>
  </div>
</template>
