import { defineStore } from "pinia";
import axios from "axios";

export const usePostStore = defineStore("posts", {
  state: () => ({
    posts: null,
  }),
  actions: {
    async fetchPostsByUser(userId) {
      let res = await axios.get(`api/users/${userId}/posts`);
      this.$state.posts = res.data;
    },

    postImage(image) {
      return import.meta.env.VITE_APP_API_URL + "images/posts/" + image;
    },

    clearPost() {
      this.$state.posts = null;
    },
  },
  persist: true,
});
