<script setup>
import TextInput from "@/components/global/TextInput.vue";
import DisplayCropperButton from "@/components/global/DisplayCropperButton.vue";
import TextArea from "@/components/global/TextArea.vue";
import SubmitForm from "@/components/global/SubmitForm.vue";
import CropperModal from "@/components/global/CropperModal.vue";
import CroppedImage from "@/components/global/CroppedImage.vue";
import { ref } from "vue";

const showModal = ref(false);
const title = ref(null);
const location = ref(null);
const description = ref(null);
const image = ref(null);

const setCroppedImageData = (data) => {
  image.value = data.imageUrl;
};
</script>

<template>
  <div id="EditProfile" class="container mx-auto max-w-4xl px-6 pb-20 pt-20">
    <div class="text-xl text-gray-900">Edit Post</div>
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
          error="This is test error"
        />
      </div>

      <div class="w-full px-3 md:w-1/2">
        <TextInput
          label="Location"
          placeholder="Binangonan, Rizal, Philippines"
          v-model:input="location"
          inputType="text"
          error="This is test error"
        />
      </div>
    </div>

    <div class="mb-6 mt-4 flex flex-wrap">
      <div class="w-full px-3 md:w-1/2">
        <DisplayCropperButton
          btnText="Post Image"
          label="Update Post Image"
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
          error="This is test error"
          placeholder="Please enter some information here!"
          label="Description"
        />
      </div>
    </div>

    <div class="mb-6 mt-8 flex flex-wrap">
      <div class="w-full px-3">
        <SubmitForm btnText="Update Post" />
      </div>
    </div>
  </div>
</template>
