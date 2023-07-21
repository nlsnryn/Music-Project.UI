<script setup>
import TextInput from "@/components/global/TextInput.vue";
import SubmitForm from "@/components/global/SubmitForm.vue";
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
      error="This is test error"
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
          ref="fileInput"
          @change="getUploadedImage"
        />
      </div>
    </div>

    <SubmitForm btnText="Add Song" />
  </div>
</template>
