<script setup>
import ProfileInfoSection from "@/components/partials/profile/ProfileInfoSection.vue";
import ProfileAboutSection from "@/components/partials/profile/ProfileAboutSection.vue";
import RouterLinkButton from "@/components/global/RouterLinkButton.vue";
import SongsSection from "@/components/partials/profile/SongsSection.vue";
import YoutubeVideoSection from "@/components/partials/profile/YoutubeVideoSection.vue";
import PostSection from "@/components/partials/profile/PostSection.vue";
</script>

<template>
  <div class="container mx-auto mt-10 flex max-w-4xl">
    <div class="w-1/3">
      <img
        class="h-auto w-full rounded-lg shadow-lg"
        src="https://via.placeholder.com/500"
        alt="Profile Picture"
      />
    </div>
    <div class="w-full pl-4">
      <div class="flex">
        <div class="w-1/2">
          <h1 class="text-left text-2xl text-gray-900 md:text-4xl">
            Nelson Ryan
          </h1>
          <span class="text-md text-gray-700">
            <i><b>Rizal, Philippines</b></i>
          </span>
        </div>
        <div class="mt-2 w-1/2">
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
  <PostSection />
</template>
