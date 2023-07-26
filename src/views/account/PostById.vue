<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { usePostStore } from "../../stores/posts.store";
import { useUserStore } from "../../stores/user.store";

const route = useRoute();
const postStore = usePostStore();
const userStore = useUserStore();

let post = ref(null);

const getPostById = async () => {
  try {
    const res = await axios.get(`api/posts/${route.params.id}`);
    post.value = res.data;
  } catch (err) {
    console.log(err);
  }
};

onMounted(async () => {
  await getPostById();
});
</script>

<template>
  <div v-if="post" class="container mx-auto max-w-4xl px-3 py-6">
    <div class="text-sm font-semibold uppercase tracking-wide text-gray-900">
      Post by ID / <span class="text-red-500">{{ post.id }}</span>
    </div>
    <div class="mb-6 h-1 w-full bg-blue-950"></div>

    <div class="mx-auto">
      <div class="my-4">
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
  </div>
</template>
