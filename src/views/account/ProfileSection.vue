<script setup>
import ProfileInfoSection from "@/components/partials/profile/ProfileInfoSection.vue";
import ProfileAboutSection from "@/components/partials/profile/ProfileAboutSection.vue";
import RouterLinkButton from "@/components/global/RouterLinkButton.vue";
import SongsSection from "@/components/partials/profile/SongsSection.vue";
import YoutubeVideoSection from "@/components/partials/profile/YoutubeVideoSection.vue";
import PostsSection from "@/components/partials/profile/PostsSection.vue";
import { useUserStore } from "../../stores/user.store";
import { useProfileStore } from "../../stores/profile.store";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const userStore = useUserStore();
const profileStore = useProfileStore();

onMounted(() => {
  profileStore.fetchProfileById(route.params.id);
});
</script>

<template>
  <!-- https://via.placeholder.com/500 -->
  <div class="container mx-auto mt-10 flex max-w-4xl">
    <div class="w-1/3">
      <!-- https://via.placeholder.com/500 Sample Picture Default-->
      <img
        class="h-auto w-full rounded-lg shadow-lg"
        :src="
          profileStore.image
            ? profileStore.image
            : 'https://via.placeholder.com/500'
        "
        alt="Profile Picture"
      />
    </div>
    <div class="w-full pl-4">
      <div class="flex">
        <div class="w-1/2">
          <h1 class="text-left text-2xl text-gray-900 md:text-4xl">
            {{ profileStore.firstName }} {{ profileStore.lastName }}
          </h1>
          <span class="text-md text-gray-700">
            <i
              ><b>{{ profileStore.location }}</b></i
            >
          </span>
        </div>
        <div class="mt-2 w-1/2" v-if="userStore.id == route.params.id">
          <RouterLinkButton
            btnText="Edit Profile"
            class="border-blue-950 hover:bg-blue-950"
            url="/account/edit-profile"
          />
        </div>
      </div>
      <ProfileInfoSection />
      <ProfileAboutSection />
    </div>
  </div>
  <SongsSection />
  <YoutubeVideoSection />
  <PostsSection />
</template>
