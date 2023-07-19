<script setup>
import { defineProps, defineEmits, computed, toRefs } from "vue";

const emit = defineEmits(["update:input"]);

const props = defineProps({
  label: String,
  labelColor: { type: Boolean, default: true },
  input: String,
  placeholder: { type: String, default: "" },
  inputType: String,
  error: String,
});

const { label, labelColor, input, placeholder, inputType, error } =
  toRefs(props);

const inputComputed = computed({
  set: (val) => emit("update:input", val),
  get: () => input.value,
});
</script>

<template>
  <div>
    <label
      for=""
      class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-100"
      :class="[labelColor ? 'text-gray-900' : 'text-gray-100']"
    >
      {{ label }}
    </label>

    <input
      :placeholder="placeholder"
      :type="inputType"
      class="block w-full appearance-none rounded border border-gray-700 bg-white px-4 py-3 leading-tight text-gray-400 focus:border-gray-500 focus:bg-white focus:outline-none"
      v-model="inputComputed"
    />

    <span v-if="error" class="text-red-500">{{ error }}</span>
  </div>
</template>
