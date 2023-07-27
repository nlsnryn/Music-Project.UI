<script setup>
import TextInput from "@/components/global/TextInput.vue";
import { ref } from "vue";
import { useUserStore } from "../../stores/user.store";
import { useProfileStore } from "../../stores/profile.store";
import { useSongStore } from "../../stores/song.store";
import { useVideoStore } from "../../stores/video.store";
import { usePostStore } from "../../stores/posts.store";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const userStore = useUserStore();
const profileStore = useProfileStore();
const songStore = useSongStore();
const videoStore = useVideoStore();
const postStore = usePostStore();

const errors = ref([]);
const email = ref(null);
const password = ref(null);

const login = async () => {
  errors.value = [];

  try {
    const res = await axios.post("api/login", {
      email: email.value,
      password: password.value,
    });

    console.log(res);
    userStore.setUserDetails(res);
    await profileStore.fetchProfileById(userStore.id);
    await songStore.fetchSongs(userStore.id);
    await videoStore.fetchVideos(userStore.id);
    await postStore.fetchPostsByUser(userStore.id);

    router.push({ name: "ProfileSection", params: { id: userStore.id } });
  } catch (err) {
    errors.value = err.response.data.errors;
    console.error(err);
  }
};
</script>

<template>
  <div>
    <div class="flex h-screen w-full items-center justify-center p-6">
      <div class="w-full max-w-md">
        <div class="mb-6 rounded bg-blue-950 p-8 shadow">
          <h1 class="mb-6 text-lg font-thin text-gray-100">
            Let's get rocking
          </h1>

          <div
            class="mb-4"
            :class="[errors.length == 0 ? 'space-y-4' : 'space-y-2']"
          >
            <TextInput
              label="Email"
              :labelColor="false"
              placeholder="nelsonarabit00@gmail.com"
              v-model:input="email"
              inputType="email"
              :error="errors.email ? errors.email[0] : ''"
            />

            <TextInput
              label="Password"
              :labelColor="false"
              placeholder="********"
              v-model:input="password"
              inputType="password"
              :error="errors.password ? errors.password[0] : ''"
            />
          </div>

          <button
            class="block w-full rounded-sm bg-red-500 py-3 text-sm tracking-wide text-white hover:bg-red-600"
            type="submit"
            @click="login"
          >
            Login
          </button>
        </div>

        <p class="text-md text-center text-gray-900">
          Don't have an account?
          <router-link
            to="register"
            class="text-xs font-semibold uppercase text-blue-950 no-underline hover:underline"
            >Register</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>
