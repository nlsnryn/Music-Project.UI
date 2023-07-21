<script setup>
import TextInput from "@/components/global/TextInput.vue";
import SubmitForm from "@/components/global/SubmitForm.vue";
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
      error="This is test error"
      class="mb-6"
    />

    <TextInput
      label="Video URL"
      placeholder="wAZqEJWLLBQ"
      v-model:input="videoCode"
      inputType="text"
      error="This is test error"
      class="mb-6"
    />

    <SubmitForm btnText="Add Video" />
  </div>
</template>
