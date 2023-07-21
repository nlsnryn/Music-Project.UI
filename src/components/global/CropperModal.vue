<script setup>
import { ref, defineEmits, defineProps, toRefs, toRef } from "vue";
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";

const emit = defineEmits(["croppedImageData", "showModal"]);

const props = defineProps({
  minAspectRatioProp: Object,
  maxAspectRatioProp: Object,
});

const { minAspectRatioProp, maxAspectRatioProp } = toRefs(props);

let fileInput = ref(null);
let cropper = ref(null);
let uploadedImage = ref(null);
let croppedImageData = {
  file: null,
  imageUrl: null,
  height: null,
  width: null,
  top: null,
  left: null,
};

const getUploadedImage = (e) => {
  const file = e.target.files[0];
  uploadedImage.value = URL.createObjectURL(file);
};

const crop = () => {
  const { coordinates, canvas } = cropper.value.getResult();

  croppedImageData.file = fileInput.value.files[0];
  croppedImageData.imageUrl = canvas.toDataURL();
  croppedImageData.height = coordinates.height;
  croppedImageData.width = coordinates.width;
  croppedImageData.top = coordinates.top;
  croppedImageData.left = coordinates.left;

  emit("croppedImageData", croppedImageData);
  emit("showModal", false);
};
</script>

<template>
  <div class="relative z-10">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
      <div class="fixed inset-0 z-10 mt-6 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 py-2">
          <div
            class="relative my-8 mt-10 max-w-4xl transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all"
          >
            <div class="bg-white p-6 px-4 pb-4 pt-5">
              <div class="flex items-center">
                <div class="mt-3 text-left">
                  <h3 class="text-2xl font-medium leading-6 text-gray-900">
                    Crop Image
                  </h3>

                  <div class="my-4 flex flex-wrap">
                    <label
                      class="tex-gray-700 mb-2 block text-xs font-bold uppercase tracking-wide"
                      >Select Image</label
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

                  <div class="flex max-w-2xl justify-center">
                    <Cropper
                      ref="cropper"
                      :src="uploadedImage"
                      :stencil-props="{
                        minAspectRatio:
                          minAspectRatioProp.width / minAspectRatioProp.height,
                        maxAspectRatio:
                          maxAspectRatioProp.width / maxAspectRatioProp.height,
                      }"
                      @change="change"
                    />
                  </div>

                  <div class="mt-5 flex flex-row-reverse px-4 pb-3">
                    <button
                      v-if="uploadedImage"
                      @click="crop"
                      type="button"
                      class="ml-3 inline-flex w-auto justify-center rounded-md border border-transparent bg-blue-950 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Crop Image
                    </button>

                    <button
                      type="button"
                      class="ml-3 inline-flex w-auto justify-center rounded-md border border-transparent bg-red-950 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      @click="emit('showModal', false)"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
