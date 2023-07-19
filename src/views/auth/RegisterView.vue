<script setup>
import TextInput from "@/components/global/TextInput.vue";
import { ref } from "vue";

const firstName = ref(null);
const lastName = ref(null);
const email = ref(null);
const password = ref(null);
const confirmPassword = ref(null);
</script>

<template>
  <div>
    <div class="flex w-full items-center justify-center p-6">
      <div class="w-full max-w-xs">
        <div class="mb-6 rounded bg-indigo-700 p-8 shadow">
          <h1 class="mb-6 text-lg font-thin text-gray-100">
            Let's get rocking
          </h1>

          <div class="mb-4">
            <TextInput
              label="First Name"
              :labelColor="false"
              placeholder="Nelson Ryan"
              v-model:input="firstName"
              inputType="text"
              error="This is test error"
            />

            <TextInput
              label="Last Name"
              :labelColor="false"
              placeholder="Arabit"
              v-model:input="lastName"
              inputType="text"
              error="This is test error"
            />

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

            <TextInput
              label="Confirm Password"
              :labelColor="false"
              placeholder="********"
              v-model:input="confirmPassword"
              inputType="password"
              error="This is test error"
            />
          </div>

          <button
            class="block w-full rounded-sm bg-blue-950 py-3 text-sm tracking-wide text-white hover:bg-blue-900"
            type="submit"
          >
            Register
          </button>
        </div>

        <p class="text-md text-center text-gray-900">
          Don't have an account?
          <router-link
            to="login"
            class="text-indigo-800 no-underline hover:underline"
            >Login</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>
