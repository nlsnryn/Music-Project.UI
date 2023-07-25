<script setup>
import RouterLinkButton from "@/components/global/RouterLinkButton.vue";
</script>

<template>
  <div>
    <div class="mx-auto py-4">
      <div class="flex flex-wrap font-bold text-gray-100">
        <div class="text-xl text-gray-900">Posts</div>
        <div class="h-1 w-full bg-blue-950"></div>

        <div class="mt-4 w-full">
          <RouterLinkButton
            btnText="Create Post"
            url="/account/create-post"
            class="border-blue-950 hover:bg-blue-950"
          />
        </div>
      </div>
    </div>

    <div class="mb-4 flex flex-wrap">
      <div class="my-1 w-full px-1 py-1 md:w-1/2 lg:w-1/2">
        <div class="rounded-lg border">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://via.placeholder.com/500x300"
              alt="Image Post"
            />
          </a>
          <div class="p-2 md:p-4">
            <div class="text-lg">
              <router-link
                to=""
                class="text-blue-950 underline hover:text-blue-900"
                >Test Title</router-link
              >
            </div>
            <p class="py-2">Location: Test Location</p>
            <p class="text-gray-darker">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
              vero unde, assumenda totam reprehenderit rem eligendi, aut a
              similique repudiandae adipisci ducimus, earum vel impedit placeat
              iusto harum aliquid nisi.
            </p>
            <div class="mt-2 flex items-center justify-end gap-2">
              <router-link
                to=""
                class="rounded-md bg-blue-950 px-2 py-1 text-sm font-bold text-white hover:bg-blue-900"
                >Edit post</router-link
              >
              <button
                class="rounded-md bg-red-950 px-2 py-1 text-sm font-bold text-white hover:bg-red-900"
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
