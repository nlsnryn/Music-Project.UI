<script setup>
import RouterLinkButton from "@/components/global/RouterLinkButton.vue";
import { onMounted } from "vue";
import { useVideoStore } from "../../../stores/video.store";
import { useUserStore } from "../../../stores/user.store";

const videoStore = useVideoStore();
const userStore = useUserStore();

onMounted(() => {
  videoStore.fetchVideos(userStore.id);
});
</script>

<template>
  <div>
    <div class="mx-auto py-4">
      <div class="flex flex-wrap font-bold text-gray-100">
        <div class="text-xl text-gray-900">Youtube Videos</div>
        <div class="h-1 w-full bg-blue-950"></div>

        <div class="mt-4 w-full">
          <RouterLinkButton
            btnText="Delete Youtube Video"
            url="/account/delete-youtube-video"
            class="ml-2 border-red-950 hover:bg-red-950"
          />
          <RouterLinkButton
            btnText="Add Youtube Video"
            url="/account/add-youtube-video"
            class="border-blue-950 hover:bg-blue-950"
          />
        </div>
      </div>
    </div>

    <div class="mb-4 flex flex-wrap">
      <div
        class="my-1 w-full px-2 py-1 md:w-1/2 lg:w-1/2"
        v-for="video in videoStore.videos"
        :key="video.id"
      >
        <div class="text-xl text-gray-900"></div>
        <iframe class="h-60 w-full" :src="video.url" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>
