<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  btnText: String,
  color: String,
  url: String,
});

const { btnText, color, url } = toRefs(props);
</script>

<template>
  <div>
    <router-link
      class="float-right rounded border bg-transparent px-4 py-2 font-semibold text-gray-900 hover:border-transparent hover:text-white"
      :class="[color ? `hover:bg-${color} border-${color}` : '']"
      :to="url"
    >
      {{ btnText }}
    </router-link>
  </div>
</template>
