<script setup>
import axios from "axios";
import { useSongStore } from "../../stores/song.store";
import { useUserStore } from "../../stores/user.store";
import Swal from "../../sweetalert";

const songStore = useSongStore();
const userStore = useUserStore();

const deleteSong = async (id) => {
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
      await axios.delete(`api/songs/${id}/${userStore.id}`);
      await songStore.fetchSongs(userStore.id);

      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });
};
</script>

<template>
  <div id="Add Song" class="container mx-auto max-w-4xl px-6 pt-20">
    <div class="text-xl font-semibold text-gray-900">Add Song</div>
    <div class="mb-6 h-1 w-full bg-red-950"></div>

    <div class="rounded bg-white px-8 pb-8 pt-6">
      <div
        class="flex flex-wrap"
        v-for="(song, index) in songStore.songs"
        :key="song.id"
      >
        <div
          class="mr-auto mt-2 w-3/4 p-1 text-lg font-semibold uppercase text-gray-900"
        >
          {{ index + 1 }}.
          <span class="text-sm font-medium uppercase tracking-wide">{{
            song.title
          }}</span>
        </div>

        <div class="1/4 ml-auto p-1">
          <button
            class="float-right rounded border border-red-950 bg-transparent px-4 py-2 font-semibold text-gray-900 hover:border-transparent hover:bg-red-950 hover:text-white"
            @click="deleteSong(song.id)"
          >
            Delete Song
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
