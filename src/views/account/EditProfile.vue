<script setup>
import TextInput from "@/components/global/TextInput.vue";
import DisplayCropperButton from "@/components/global/DisplayCropperButton.vue";
import TextArea from "@/components/global/TextArea.vue";
import SubmitForm from "@/components/global/SubmitForm.vue";
import CropperModal from "@/components/global/CropperModal.vue";
import CroppedImage from "@/components/global/CroppedImage.vue";
import { onMounted, ref } from "vue";
import { useUserStore } from "../../stores/user.store";
import axios from "axios";
import { useRouter } from "vue-router";
import Swal from "../../sweetalert.js";

const router = useRouter();
const userStore = useUserStore();

const showModal = ref(false);
const firstName = ref(null);
const lastName = ref(null);
const location = ref(null);
const description = ref(null);
const image = ref(null);
let imageData = null;
const errors = ref([]);

onMounted(() => {
  firstName.value = userStore.firstName || null;
  lastName.value = userStore.lastName || null;
  location.value = userStore.location || null;
  description.value = userStore.description || null;
  image.value = userStore.image || null;
});

const setCroppedImageData = (data) => {
  imageData = data;
  image.value = data.imageUrl;
};

const updateUser = async () => {
  errors.value = [];

  let formData = new FormData();

  formData.append("first_name", firstName.value || "");
  formData.append("last_name", lastName.value || "");
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
    await axios.post("api/users/" + userStore.id + "?_method=PUT", formData);
    await userStore.fetchUser();

    Swal.fire("Profile Saved!", "Your profile has been updated.", "success");

    router.push({ name: "ProfileSection" });
  } catch (err) {
    errors.value = err.response.data.errors;
  }
};
</script>

<template>
  <div id="EditProfile" class="container mx-auto max-w-4xl px-6 pb-20 pt-20">
    <div class="text-xl text-gray-900">Edit Profile</div>
    <div class="h-1 w-full bg-blue-950"></div>

    <CropperModal
      v-if="showModal"
      :minAspectRatioProp="{ width: 8, height: 8 }"
      :maxAspectRatioProp="{ width: 8, height: 8 }"
      @showModal="showModal = false"
      @croppedImageData="setCroppedImageData"
    />

    <div class="mb-6 mt-4 flex flex-wrap">
      <div class="w-full px-3 md:w-1/2">
        <TextInput
          label="First Name"
          :labelColor="true"
          placeholder="Nelson Ryan"
          v-model:input="firstName"
          inputType="text"
          :error="errors.first_name ? errors.first_name[0] : ''"
        />
      </div>

      <div class="w-full px-3 md:w-1/2">
        <TextInput
          label="Last Name"
          :labelColor="true"
          placeholder="Arabit"
          v-model:input="lastName"
          inputType="text"
          :error="errors.lastName ? errors.last_name[0] : ''"
        />
      </div>
    </div>

    <div class="mb-6 mt-4 flex flex-wrap">
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
          btnText="Update Profile Image"
          label="Profile Image"
          @showModal="showModal = true"
        />
      </div>
    </div>

    <div class="mb-6 mt-4 flex flex-wrap">
      <div class="w-full px-3 md:w-1/2">
        <CroppedImage label="Cropped Image" :image="image" />
      </div>
    </div>

    <div class="mb-6 mt-4 flex flex-wrap">
      <div class="w-full px-3">
        <TextArea
          :error="errors.description ? errors.description[0] : ''"
          placeholder="Please enter some information here!"
          label="Description"
          :description="description"
          @update:description="(newValue) => (description = newValue)"
        />
      </div>
    </div>

    <div class="mb-6 mt-8 flex flex-wrap">
      <div class="w-full px-3">
        <SubmitForm btnText="Update Profile" @click="updateUser" />
      </div>
    </div>
  </div>
</template>
