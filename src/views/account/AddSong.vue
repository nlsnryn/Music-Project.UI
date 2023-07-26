<script setup>
import { ref } from "vue";
import TextInput from "@/components/global/TextInput.vue";
import SubmitForm from "@/components/global/SubmitForm.vue";
import Swal from "../../sweetalert.js";
import { useUserStore } from "../../stores/user.store";
import { useSongStore } from "../../stores/song.store";
import axios from "axios";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const songStore = useSongStore();

const router = useRouter();

const title = ref(null);
const song = ref(null);
const file = ref(null);
const errors = ref([]);

const handleFileUpload = () => {
  song.value = file.value.files[0];
};

const addSong = async () => {
  if (!song.value) {
    Swal.fire(
      "Something went wrong",
      "You forgot to upload the mp3 file!",
      "warning",
    );

    return null;
  }

  errors.value = [];
  let formData = new FormData();

  formData.append("user_id", userStore.id);
  formData.append("title", title.value || "");
  formData.append("file", song.value);

  let formDataArray = Array.from(formData.entries());

  // console.log(song.value);
  // console.log(formDataArray);
  try {
    await axios.post("api/songs", formData);
    await songStore.fetchSongs(userStore.id);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your song has been saved",
      showConfirmButton: false,
      timer: 1500,
    });

    router.push({ name: "ProfileSection" });
  } catch (err) {
    errors.value = err.response.data.errors;
  }
};
</script>

<template>
  <div id="Add Song" class="container mx-auto max-w-4xl px-6 pt-20">
    <div class="text-xl font-semibold text-gray-900">Add Song</div>
    <div class="mb-6 h-1 w-full bg-blue-950"></div>

    <TextInput
      label="Add Song"
      placeholder="Yeah Let's Listen to Music"
      v-model:input="title"
      inputType="text"
      :error="errors.title ? errors.title[0] : ''"
      class="mb-6"
    />

    <div class="w-full">
      <label
        class="tex-gray-700 mb-2 block text-xs font-bold uppercase tracking-wide"
        >Select Song</label
      >

      <div class="mb-3 w-full">
        <input
          type="file"
          class="form-control m-0 block w-full rounded border border-solid border-gray-400 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-700 focus:bg-white focus:text-gray-700 focus:outline-none"
          id="image"
          ref="file"
          @change="handleFileUpload"
        />
      </div>
    </div>

    <SubmitForm btnText="Add Song" @submit="addSong" />
  </div>
</template>
