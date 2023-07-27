<template>
  <div
    class="mt-4 w-full rounded bg-blue-950 p-2 py-1 text-center font-bold text-gray-100 sm:w-1/2"
  >
    Number of songs {{ songStore.songs.length }}
  </div>
</template>

<script setup>
import { useSongStore } from "@/stores/song.store";

const songStore = useSongStore();
</script>
