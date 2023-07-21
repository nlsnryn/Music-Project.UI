<script setup>
import RouterLinkButton from "../global/RouterLinkButton.vue";
import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <div>
    <button
      @click="open = !open"
      class="rounded-md bg-transparent px-2 py-1 font-semibold text-white hover:border-transparent hover:bg-blue-950"
    >
      <i class="fa-solid fa-bars fa-xl"></i>
    </button>

    <div
      v-show="open"
      class="fixed left-0 top-0 flex h-full w-full justify-center backdrop-blur-sm"
    >
      <div
        @click="open = !open"
        class="absolute h-full w-full bg-black opacity-75"
      ></div>
      <div class="fixed my-auto w-80 border-white pt-16">
        <p class="text-center text-2xl font-bold text-white">Menu</p>
        <RouterLinkButton
          class="border- mt-2 w-full border-blue-950 text-center text-lg text-white hover:bg-blue-950"
          btnText="Profile"
          url="/account/profile"
          @closeModal="open = !open"
        />
        <RouterLinkButton
          class="border- mt-2 w-full border-red-950 text-center text-lg text-white hover:bg-red-950"
          btnText="Close"
          @click="open = !open"
        />
      </div>
    </div>
  </div>
</template>
