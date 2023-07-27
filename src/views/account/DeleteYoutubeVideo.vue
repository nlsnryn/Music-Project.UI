<script setup>
import { useVideoStore } from "../../stores/video.store";
import { useUserStore } from "../../stores/user.store";
import { onMounted } from "vue";
import axios from "axios";
import Swal from "../../sweetalert";

const videoStore = useVideoStore();
const userStore = useUserStore();

const deleteVideo = async (videoId) => {
  Swal.fire({
    title: "Are you sure you want to delete this?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes! Delete it!",
    confirmButtonColor: "#172554",
    cancelButtonColor: "#d33",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await axios.delete(`api/youtube/${videoId}`);
      await videoStore.fetchVideos(userStore.id);

      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });
};

onMounted(() => {
  videoStore.fetchVideos(userStore.id);
});
</script>

<template>
  <div id="Add Song" class="container mx-auto max-w-4xl px-6 pt-20">
    <div class="text-xl font-semibold text-gray-900">Delete Youtube Video</div>
    <div class="mb-6 h-1 w-full bg-red-950"></div>

    <div class="rounded bg-white px-8 pb-8 pt-6">
      <div
        class="mb-2 flex flex-wrap items-center"
        v-for="(video, index) in videoStore.videos"
        :key="video.id"
      >
        <div class="mr-auto mt-2 w-1/4 p-1 text-lg text-gray-900">
          <span class="text-sm font-semibold uppercase tracking-wide"
            >{{ index + 1 }}. {{ video.title }}</span
          >
          <iframe :src="video.url" class="h-20 w-full"></iframe>
        </div>

        <div class="1/4 ml-auto p-1">
          <button
            class="float-right rounded border border-red-950 bg-transparent px-4 py-2 font-semibold text-gray-900 hover:border-transparent hover:bg-red-950 hover:text-white"
            @click="deleteVideo(video.id)"
          >
            Delete Song
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
