<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  btnText: String,
  label: String,
});

const { btnText } = toRefs(props);
</script>

<template>
  <button
    class="float-right mt-2 inline-block bg-blue-950 px-4 py-3 font-bold text-white no-underline hover:bg-blue-900"
    @click="$emit('submit', true)"
  >
    {{ btnText }}
  </button>
</template>
