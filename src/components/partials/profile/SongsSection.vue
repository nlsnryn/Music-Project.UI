<script setup>
import RouterLinkButton from "@/components/global/RouterLinkButton.vue";
import SongsPlayer from "./SongsPlayer.vue";
import { useUserStore } from "../../../stores/user.store";
import { useSongStore } from "../../../stores/song.store";
import { useRoute } from "vue-router";
import { onMounted } from "vue";

const route = useRoute();
const userStore = useUserStore();
const songStore = useSongStore();

onMounted(async () => {
  await songStore.fetchSongs(route.params.id);
});
</script>

<template>
  <div>
    <div class="mx-auto py-4">
      <div class="flex flex-wrap font-bold text-gray-100">
        <div class="text-xl text-gray-900">Songs</div>
        <div class="h-1 w-full bg-blue-950"></div>

        <div class="mt-4 w-full" v-if="userStore.id == route.params.id">
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
