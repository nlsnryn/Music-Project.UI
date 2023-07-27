<script setup>
import RouterLinkButton from "@/components/global/RouterLinkButton.vue";
import { ref, reactive } from "vue";
import axios from "axios";
import { useUserStore } from "../../stores/user.store";
import { useProfileStore } from "../../stores/profile.store";
import { useSongStore } from "../../stores/song.store";
import { useVideoStore } from "../../stores/video.store";
import { usePostStore } from "../../stores/posts.store";
import { useRoute } from "vue-router";
import Swal from "../../sweetalert";
import router from "../../router";

const route = useRoute();
const userStore = useUserStore();
const profileStore = useProfileStore();
const songStore = useSongStore();
const videoStore = useVideoStore();
const postStore = usePostStore();

let state = reactive({
  activeButton: "Profile",
});
const open = ref(false);

const handleButtonClick = (buttonName) => {
  state.activeButton = buttonName;
  if (buttonName === "Profile") {
    fetchSongFunction();
  }
};

const logout = async () => {
  await axios.post("api/logout", {
    user_id: userStore.id,
  });

  userStore.clearUser();
  profileStore.clearProfile();
  songStore.clearSong();
  videoStore.clearVideo();
  postStore.clearPost();

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Logout successfully",
    showConfirmButton: false,
    timer: 1500,
  });

  await new Promise((res) => setTimeout(res, 1500));
  router.push({ name: "home" });
};

const fetchSongFunction = async () => {
  await profileStore.fetchProfileById(userStore.id);
  await songStore.fetchSongs(userStore.id);
};
</script>

<template>
  <div>
    <button
      @click="open = !open"
      class="rounded-md bg-transparent px-2 py-1 font-semibold text-white hover:border-transparent hover:bg-blue-950"
    >
      <i class="fa-solid fa-bars fa-xl"></i>
    </button>

    <div
      v-show="open"
      class="fixed left-0 top-0 flex h-full w-full justify-center backdrop-blur-sm"
    >
      <div
        @click="open = !open"
        class="absolute h-full w-full bg-black opacity-75"
      ></div>
      <div class="fixed my-auto w-80 border-white pt-16">
        <p class="text-center text-2xl font-bold text-white">Menu</p>
        <RouterLinkButton
          v-if="!userStore.id"
          class="mt-2 w-full border border-blue-950 text-center text-lg text-white hover:bg-blue-950"
          btnText="Login"
          url="/login"
          @closeModal="open = !open"
        />
        <RouterLinkButton
          v-if="!userStore.id"
          class="mt-2 w-full border border-blue-950 text-center text-lg text-white hover:bg-blue-950"
          btnText="Register"
          url="/register"
          @closeModal="open = !open"
        />

        <RouterLinkButton
          v-if="userStore.id"
          @click="handleButtonClick('Profile')"
          class="mt-2 w-full border border-blue-950 text-center text-lg text-white hover:bg-blue-950"
          :class="[
            state.activeButton === 'Profile' ? 'bg-blue-950' : 'bg-transparent',
          ]"
          btnText="Profile"
          :url="{ name: 'ProfileSection', params: { id: userStore.id } }"
          @closeModal="open = !open"
        />
        <RouterLinkButton
          v-if="userStore.id"
          @click="handleButtonClick('Posts')"
          class="mt-2 w-full border border-blue-950 text-center text-lg text-white hover:bg-blue-950"
          :class="[
            state.activeButton === 'Posts' ? 'bg-blue-950' : 'bg-transparent',
          ]"
          btnText="Posts"
          url="/account/posts"
          @closeModal="open = !open"
        />
        <RouterLinkButton
          v-if="userStore.id"
          @click="logout"
          class="mt-2 w-full border border-blue-950 text-center text-lg text-white hover:bg-blue-950"
          btnText="Logout"
          @closeModal="open = !open"
        />

        <RouterLinkButton
          class="mt-2 w-full border border-red-950 text-center text-lg text-white hover:bg-red-950"
          btnText="Close"
          @click="open = !open"
        />
      </div>
    </div>
  </div>
</template>
