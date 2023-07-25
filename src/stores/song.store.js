import { defineStore } from "pinia";
import axios from "axios";
import { songs } from "./song.js";

export const useSongStore = defineStore("songs", {
  state: () => ({
    artistId: null,
    artistName: null,
    songs: null,
  }),
  actions: {
    async fetchSongs(userId) {
      let res = await axios.get(`api/users/${userId}/songs`);
      this.$state.artistId = res.data.artist_id;
      this.$state.artistName = res.data.artist_name;
      this.$state.songs = res.data.songs;
      // songs.value = res.data.songs;
    },

    async clearUser() {
      this.$state.songs = null;
    },
  },
  persist: true,
});
