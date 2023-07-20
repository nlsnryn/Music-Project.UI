<script setup>
import RouterLinkButton from "@/components/global/RouterLinkButton.vue";
import SongsPlayer from "./SongsPlayer.vue";
</script>

<template>
  <div>
    <div class="mx-auto py-4">
      <div class="flex flex-wrap font-bold text-gray-100">
        <div class="text-xl text-gray-900">Songs</div>
        <div class="h-1 w-full bg-blue-950"></div>

        <div class="mt-4 w-full">
          <RouterLinkButton
            btnText="Delete Song"
            url="/account/delete-song"
            class="ml-2 border-red-950 hover:bg-red-950"
          />
          <RouterLinkButton
            btnText="Add Song"
            url="/account/add-song"
            class="border-blue-950 hover:bg-blue-950"
          />
        </div>
      </div>
    </div>

    <div>
      <SongsPlayer />
    </div>
  </div>
</template>
