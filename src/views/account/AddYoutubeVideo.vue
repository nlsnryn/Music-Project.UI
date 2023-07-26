<script setup>
import TextInput from "@/components/global/TextInput.vue";
import SubmitForm from "@/components/global/SubmitForm.vue";
import { useUserStore } from "../../stores/user.store";
import { useVideoStore } from "../../stores/video.store";
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Swal from "../../sweetalert";

const userStore = useUserStore();
const videoStore = useVideoStore();

const router = useRouter();

const title = ref(null);
const videoCode = ref(null);
const errors = ref([]);

const addVideo = async () => {
  try {
    await axios.post("api/youtube", {
      user_id: userStore.id,
      title: title.value,
      url: videoCode.value,
    });
    // await videoStore.fetchVideos(userStore.id);

    Swal.fire({
      position: "center",
      icon: "success",
      title: 'You added a video "' + title.value + '"',
      showConfirmButton: false,
      timer: 1500,
    });

    router.push({ name: "ProfileSection" });
  } catch (err) {
    errors.value = err.response.data.errors;
    console.log("Add Youtube Error", err);
  }
};
</script>

<template>
  <div id="Add Song" class="container mx-auto max-w-4xl px-6 pt-20">
    <div class="text-xl font-semibold text-gray-900">Add Youtube Video</div>
    <div class="mb-6 h-1 w-full bg-blue-950"></div>

    <TextInput
      label="Add Youtube Video"
      placeholder="Naruto Shippuden Video"
      v-model:input="title"
      inputType="text"
      :error="errors.title ? errors.title[0] : ''"
      class="mb-6"
    />

    <TextInput
      label="Video URL"
      placeholder="wAZqEJWLLBQ"
      v-model:input="videoCode"
      inputType="text"
      :error="errors.url ? errors.url[0] : ''"
      class="mb-6"
    />

    <SubmitForm btnText="Add Video" @submit="addVideo" />
  </div>
</template>
