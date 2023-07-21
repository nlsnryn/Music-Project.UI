<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  label: String,
  image: String,
});

const { label, image } = toRefs(props);
</script>

<template>
  <div>
    <label
      for=""
      class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-900"
    >
      {{ label }}
    </label>

    <img
      class="w-full rounded border-4 border-solid border-blue-950"
      :src="image"
      alt=""
    />
  </div>
</template>
