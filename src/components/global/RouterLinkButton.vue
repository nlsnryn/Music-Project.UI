<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  btnText: String,
  url: { type: String, default: "" },
});

const { btnText, url } = toRefs(props);
</script>

<template>
  <router-link
    class="float-right rounded border px-4 py-2 font-semibold text-gray-900 hover:border-transparent hover:text-white"
    :to="url"
    @click="$emit('closeModal')"
  >
    {{ btnText }}
  </router-link>
</template>
