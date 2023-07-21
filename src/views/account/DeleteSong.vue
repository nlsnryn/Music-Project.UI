<script setup></script>

<template>
  <div id="Add Song" class="container mx-auto max-w-4xl px-6 pt-20">
    <div class="text-xl font-semibold text-gray-900">Add Song</div>
    <div class="mb-6 h-1 w-full bg-red-950"></div>

    <div class="rounded bg-white px-8 pb-8 pt-6">
      <div class="flex flex-wrap">
        <div class="mr-auto mt-2 w-3/4 p-1 text-lg text-gray-900">
          1. This is a song
        </div>

        <div class="1/4 ml-auto p-1">
          <button
            class="float-right rounded border border-red-950 bg-transparent px-4 py-2 font-semibold text-gray-900 hover:border-transparent hover:bg-red-950 hover:text-white"
          >
            Delete Song
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
