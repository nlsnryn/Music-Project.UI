<script setup>
import TextInput from "@/components/global/TextInput.vue";
import DisplayCropperButton from "@/components/global/DisplayCropperButton.vue";
import TextArea from "@/components/global/TextArea.vue";
import SubmitForm from "@/components/global/SubmitForm.vue";
import CropperModal from "@/components/global/CropperModal.vue";
import CroppedImage from "@/components/global/CroppedImage.vue";
import { ref } from "vue";
import { useUserStore } from "../../stores/user.store";
import { usePostStore } from "../../stores/posts.store";
import Swal from "../../sweetalert.js";
import axios from "axios";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const postStore = usePostStore();

const router = useRouter();

const showModal = ref(false);
const title = ref(null);
const location = ref(null);
const description = ref(null);
let imageData = null;
const image = ref(null);
const errors = ref([]);

const setCroppedImageData = (data) => {
  imageData = data;
  image.value = data.imageUrl;
};

const createPost = async () => {
  errors.value = [];

  if (imageData === null) {
    Swal.fire(
      "No image found!",
      "Please crop an image of your choice and complete all other inputs.",
      "warning",
    );
  }

  let formData = new FormData();

  formData.append("user_id", userStore.id);
  formData.append("title", title.value || "");
  formData.append("location", location.value || "");
  formData.append("description", description.value || "");
  if (imageData) {
    formData.append("image", imageData.file || "");
    formData.append("height", imageData.height || "");
    formData.append("width", imageData.width || "");
    formData.append("left", imageData.left || "");
    formData.append("top", imageData.top || "");
  }

  let formDataArray = Array.from(formData.entries());

  // Log the array to the console
  console.log(formDataArray);

  try {
    await axios.post("api/posts", formData);
    await postStore.fetchPostsByUser(userStore.id);

    Swal.fire("Post Saved!", "New post added.", "success");

    router.push({ name: "ProfileSection" });
  } catch (err) {
    errors.value = err.response.data.errors;
    console.error(err);
  }
};
</script>

<template>
  <div id="EditProfile" class="container mx-auto max-w-4xl px-6 pb-20 pt-20">
    <div class="text-xl text-gray-900">Create Post</div>
    <div class="h-1 w-full bg-blue-950"></div>

    <CropperModal
      v-if="showModal"
      :minAspectRatioProp="{ width: 16, height: 9 }"
      :maxAspectRatioProp="{ width: 16, height: 9 }"
      @showModal="showModal = false"
      @croppedImageData="setCroppedImageData"
    />

    <div class="mb-6 mt-4 flex flex-wrap">
      <div class="w-full px-3 md:w-1/2">
        <TextInput
          label="Title"
          :labelColor="true"
          placeholder="Awesome Opening"
          v-model:input="title"
          inputType="text"
          :error="errors.title ? errors.title[0] : ''"
        />
      </div>

      <div class="w-full px-3 md:w-1/2">
        <TextInput
          label="Location"
          placeholder="Binangonan, Rizal, Philippines"
          v-model:input="location"
          inputType="text"
          :error="errors.location ? errors.location[0] : ''"
        />
      </div>
    </div>

    <div class="mb-6 mt-4 flex flex-wrap">
      <div class="w-full px-3 md:w-1/2">
        <DisplayCropperButton
          btnText="Post Image"
          label="Add Post Image"
          @showModal="showModal = true"
        />
      </div>
    </div>

    <div class="mb-6 mt-4 flex flex-wrap">
      <div class="w-full px-3">
        <CroppedImage label="Cropped Image" :image="image" />
      </div>
    </div>

    <div class="mb-6 mt-4 flex flex-wrap">
      <div class="w-full px-3">
        <TextArea
          v-model:description="description"
          :error="errors.description ? errors.description[0] : ''"
          placeholder="Please enter some information here!"
          label="Description"
        />
      </div>
    </div>

    <div class="mb-6 mt-8 flex flex-wrap">
      <div class="w-full px-3">
        <SubmitForm btnText="Create Post" @submit="createPost" />
      </div>
    </div>
  </div>
</template>
