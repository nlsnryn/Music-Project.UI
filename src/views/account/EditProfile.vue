<script setup>
import TextInput from "@/components/global/TextInput.vue";
import DisplayCropperButton from "@/components/global/DisplayCropperButton.vue";
import TextArea from "@/components/global/TextArea.vue";
import SubmitForm from "@/components/global/SubmitForm.vue";
import { ref } from "vue";

const firstName = ref(null);
const lastName = ref(null);
const location = ref(null);
const description = ref(null);
</script>

<template>
  <div id="EditProfile" class="container mx-auto max-w-4xl px-6 pb-20 pt-20">
    <div class="text-xl text-gray-900">Edit Profile</div>
    <div class="h-1 w-full bg-blue-950"></div>

    <div class="mb-6 mt-4 flex flex-wrap">
      <div class="w-full px-3 md:w-1/2">
        <TextInput
          label="First Name"
          :labelColor="true"
          placeholder="Nelson Ryan"
          v-model:input="firstName"
          inputType="text"
          error="This is test error"
        />
      </div>

      <div class="w-full px-3 md:w-1/2">
        <TextInput
          label="Last Name"
          :labelColor="true"
          placeholder="Arabit"
          v-model:input="lastName"
          inputType="text"
          error="This is test error"
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
          error="This is test error"
        />
      </div>
    </div>

    <div class="mb-6 mt-4 flex flex-wrap">
      <div class="w-full px-3 md:w-1/2">
        <DisplayCropperButton
          btnText="Update Profile Image"
          label="Profile Image"
        />
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
        <SubmitForm btnText="Update Profile" />
      </div>
    </div>
  </div>
</template>
