<script setup>
import TextInput from "@/components/global/TextInput.vue";
</script>

<template>
  <div>
    <div class="flex h-screen w-full items-center justify-center p-6">
      <div class="w-full max-w-md">
        <div class="mb-6 rounded bg-blue-950 p-8 shadow">
          <h1 class="mb-6 text-lg font-thin text-gray-100">
            Let's get rocking
          </h1>

          <div class="mb-4">
            <TextInput
              label="Email"
              :labelColor="false"
              placeholder="nelsonarabit00@gmail.com"
              v-model:input="email"
              inputType="email"
              error="This is test error"
            />

            <TextInput
              label="Password"
              :labelColor="false"
              placeholder="********"
              v-model:input="password"
              inputType="password"
              error="This is test error"
            />
          </div>

          <button
            class="block w-full rounded-sm bg-red-500 py-3 text-sm tracking-wide text-white hover:bg-red-600"
            type="submit"
          >
            Login
          </button>
        </div>

        <p class="text-md text-center text-gray-900">
          Don't have an account?
          <router-link
            to="register"
            class="text-xs font-semibold uppercase text-blue-950 no-underline hover:underline"
            >Register</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>
