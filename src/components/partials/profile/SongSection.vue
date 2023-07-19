<script setup>
import RouterLinkButton from "@/components/global/RouterLinkButton.vue";
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
            color="blue-950"
            url="/account/delete-song"
          />
          <RouterLinkButton
            btnText="Add Song"
            color="blue-950"
            url="/account/add-song"
          />
        </div>
      </div>
    </div>
  </div>
</template>
