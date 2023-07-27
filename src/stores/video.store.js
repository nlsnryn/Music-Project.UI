import { defineStore } from "pinia";
import axios from "axios";

export const useVideoStore = defineStore("videos", {
  state: () => ({
    videos: null,
  }),
  actions: {
    async fetchVideos(userId) {
      let res = await axios.get(`api/youtube/${userId}`);
      this.$state.videos = res.data.videos_by_user;
    },

    clearVideo() {
      this.$state.videos = null;
    },
  },
  persist: true,
});
