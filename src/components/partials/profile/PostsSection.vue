<script setup>
import RouterLinkButton from "@/components/global/RouterLinkButton.vue";
import axios from "axios";
import { usePostStore } from "../../../stores/posts.store";
import { useUserStore } from "../../../stores/user.store";
import Swal from "../../../sweetalert";
import { useRoute } from "vue-router";
import { onMounted } from "vue";

const route = useRoute();
const postStore = usePostStore();
const userStore = useUserStore();

const deletePost = async (postId) => {
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
      let res = await axios.delete(`api/posts/${postId}`);
      await postStore.fetchPostsByUser(userStore.id);

      Swal.fire("Deleted!", "Your post has been deleted.", "success");
      console.log(res);
    }
  });
};

onMounted(async () => {
  await postStore.fetchPostsByUser(route.params.id);
});
</script>

<template>
  <div>
    <div class="mx-auto py-4">
      <div class="flex flex-wrap font-bold text-gray-100">
        <div class="text-xl text-gray-900">Posts</div>
        <div class="h-1 w-full bg-blue-950"></div>

        <div class="mt-4 w-full" v-if="userStore.id == route.params.id">
          <RouterLinkButton
            btnText="Create Post"
            url="/account/create-post"
            class="border-blue-950 hover:bg-blue-950"
          />
        </div>
      </div>
    </div>

    <div class="mb-4 flex flex-wrap">
      <div
        v-for="post in postStore.posts"
        :key="post.id"
        class="my-1 w-full px-1 py-1 md:w-1/2 lg:w-1/2"
      >
        <div class="rounded-lg border">
          <a href="#">
            <img
              class="rounded-t-lg"
              :src="postStore.postImage(post.image)"
              alt="Image Post"
            />
          </a>
          <div class="p-2 md:p-4">
            <div class="text-lg">
              <router-link
                :to="{ name: 'PostById', params: { id: post.id } }"
                class="text-blue-950 underline hover:text-blue-900"
                >{{ post.title }}</router-link
              >
            </div>
            <p class="py-2">Location: {{ post.location }}</p>
            <p class="text-gray-darker">
              {{ post.description }}
            </p>
            <div
              class="mt-2 flex items-center justify-end gap-2"
              v-if="userStore.id == route.params.id"
            >
              <router-link
                :to="{ name: 'EditPost', params: { id: post.id } }"
                class="rounded-md bg-blue-950 px-2 py-1 text-sm font-bold text-white hover:bg-blue-900"
                >Edit post</router-link
              >
              <button
                class="rounded-md bg-red-950 px-2 py-1 text-sm font-bold text-white hover:bg-red-900"
                @click="deletePost(post.id)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
