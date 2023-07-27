<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { usePostStore } from "../../stores/posts.store";
import { useUserStore } from "../../stores/user.store";
import { RouterLink } from "vue-router";

import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

const postStore = usePostStore();
const userStore = useUserStore();

let posts = ref(null);
let page = ref(null);
let pageCount = ref(null);

const getPosts = async () => {
  try {
    const res = await axios.get(`api/posts?page=${page.value}`);
    pageCount.value = res.data.page_count;
    posts.value = res.data.paginate.data;
  } catch (err) {
    console.log(err);
  }
};

onMounted(async () => {
  await getPosts();
});
</script>

<template>
  <div class="container mx-auto max-w-4xl px-3 py-6">
    <div class="text-sm font-semibold uppercase tracking-wide text-gray-900">
      Posts
    </div>
    <div class="mb-6 h-1 w-full bg-blue-950"></div>

    <div class="mx-auto">
      <div v-for="post in posts" :key="post.id" class="my-4">
        <router-link
          :to="{ name: 'ProfileSection', params: { id: post.user.id } }"
        >
          <div class="flex items-center py-2">
            <img
              :src="userStore.userImage(post.user.image)"
              class="rounded-full"
              width="50"
              alt=""
            />
            <h1 class="ml-2 text-lg font-bold uppercase tracking-wide">
              {{ post.user.first_name }} {{ post.user.last_name }}
            </h1>
          </div>
        </router-link>

        <img :src="postStore.postImage(post.image)" alt="" />
        <div class="p-4">
          <p class="pb-4 text-3xl font-semibold hover:text-gray-700">
            {{ post.title }}
          </p>
          <p class="py-2 text-lg">Event Location: {{ post.location }}</p>
          <p class="pb-6">
            {{ post.description }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center p-2">
      <v-pagination
        v-model="page"
        :pages="pageCount"
        :range-size="1"
        active-color="#60a5fa"
        @update:modelValue="getPosts"
      />
    </div>
  </div>
</template>
