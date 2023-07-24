<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  description: String,
  label: String,
  placeholder: { type: String, default: "" },
  error: String,
});

const { label, placeholder, error, description } = toRefs(props);
</script>

<template>
  <label
    for=""
    class="block text-xs font-bold uppercase tracking-wide text-gray-900"
  >
    {{ label }}
  </label>
  <textarea
    class="mt-2 w-full appearance-none rounded border border-gray-400 bg-white px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
    :placeholder="placeholder"
    :value="description"
    @input="$emit('update:description', $event.target.value)"
    cols="30"
    rows="10"
  ></textarea>
  <span v-if="error" class="text-red-500">
    {{ error }}
  </span>
</template>
