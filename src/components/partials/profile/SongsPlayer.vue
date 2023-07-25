<script setup>
import { onMounted, onUpdated, ref, watch } from "vue";
import "aplayer/dist/APlayer.min.css";
import APlayer from "aplayer";
import { useSongStore } from "../../../stores/song.store";
import { songs } from "@/stores/song.js";

const songStore = useSongStore();

let songList = [];

onMounted(() => {
  if (songStore.songs) {
    mapSongs();
  }
  thePlayer();
});

// watch(songs, (newval) => {
//   console.log(newval);
//   mapSongs();
// });

const mapSongs = () => {
  let newSongs = songStore.songs.map(function (song) {
    return {
      name: song.title,
      artist: songStore.artistName,
      url:
        import.meta.env.VITE_APP_API_URL +
        `songs/${songStore.artistId}/${song.song}`,
    };
  });

  songList = [];
  for (let index = 0; index < newSongs.length; index++) {
    songList.push(newSongs[index]);
  }
};

const thePlayer = () => {
  new APlayer({
    container: document.getElementById("songs"),
    audio: songList,
  });
};
</script>

<template>
  <div class="rounded-md bg-blue-950">
    <div id="songs"></div>
  </div>
</template>
