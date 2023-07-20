<script setup>
import { onMounted } from "vue";
import "aplayer/dist/APlayer.min.css";
import APlayer from "aplayer";

onMounted(() => {
  thePlayer();
});

const thePlayer = () => {
  new APlayer({
    container: document.getElementById("songs"),
    audio: [
      {
        name: "Rapstar",
        artist: "Flow G",
        url: "/public/music/rapstar.mp3",
        cover: "",
      },
      {
        name: "Days of Dash",
        artist: "Kanojo",
        url: "/public/music/days-of-dash.mp3",
        cover: "",
      },
    ],
  });
};
</script>

<template>
  <div class="rounded-md bg-blue-950">
    <div id="songs"></div>
  </div>
</template>
