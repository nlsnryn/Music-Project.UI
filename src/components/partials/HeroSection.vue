<script setup></script>

<template>
  <div
    class="absolute left-[50%] top-[50%] w-full max-w-5xl -translate-x-[50%] -translate-y-[50%]"
  >
    <div class="mx-auto px-4 text-center md:w-3/4 lg:w-2/3">
      <h1
        class="mb-3 text-center text-4xl leading-tight text-gray-100 sm:text-5xl md:text-5xl"
      >
        Music Social Network
      </h1>
      <p class="pt-2 text-center text-xl text-gray-300">
        Login or Register now and join other like minded people all around the
        world who want to share there music!
      </p>
      <p class="py-4 text-center text-xl text-gray-300">
        Let the music be your guide...
      </p>
    </div>
    <div class="mt-6"></div>
    <div class="flex justify-between gap-1">
      <router-link
        class="ml-1 w-full cursor-pointer rounded-md bg-indigo-900 px-4 py-2 text-center text-2xl font-semibold text-white shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
        to="login"
      >
        Login
      </router-link>
      <router-link
        class="mr-1 w-full cursor-pointer rounded-md bg-blue-900 px-4 py-2 text-center text-2xl font-semibold text-white shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        to="register"
      >
        Register
      </router-link>
    </div>
  </div>

  <div
    class="fixed bottom-0 left-0 right-0 top-0 -z-10 h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.65)] object-cover"
  ></div>

  <video
    autoplay
    loop
    muted
    class="fixed bottom-0 left-0 right-0 top-0 -z-20 h-[100vh] w-[100vw] object-cover"
  >
    <source src="../../../public/video/Concert.mp4" type="video/mp4" />
  </video>
</template>
