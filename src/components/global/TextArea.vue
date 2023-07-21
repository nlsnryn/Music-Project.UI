<script setup>
import { computed, defineProps, defineEmits, toRefs } from "vue";

const emit = defineEmits("update:description");

const props = defineProps({
  description: String,
  label: String,
  placeholder: { type: String, default: "" },
  error: String,
});

const { label, placeholder, error, description } = toRefs(props);

const descriptionComputed = computed({
  get: () => description.value,
  set: (val) => emit("update:description", val),
});
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
    v-model="descriptionComputed"
    cols="30"
    rows="10"
  ></textarea>
  <span v-if="error" class="text-red-500">
    {{ error }}
  </span>
</template>
