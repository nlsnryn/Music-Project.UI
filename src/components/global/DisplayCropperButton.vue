<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  btnText: String,
  label: String,
});

const { btnText, label } = toRefs(props);
</script>

<template>
  <label class="block text-xs font-bold uppercase tracking-wide text-gray-900">
    {{ label }}
  </label>
  <button
    class="mt-2 inline-block bg-blue-950 px-4 py-3 font-bold text-white no-underline hover:bg-blue-900"
    @click="$emit('showModal')"
  >
    {{ btnText }}
  </button>
</template>
