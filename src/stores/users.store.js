import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useUserStore = defineStore(
  "user",
  () => {
    const id = ref(null);
    const token = ref(null);
    const firstName = ref(null);
    const lastName = ref(null);
    const email = ref(null);
    const location = ref(null);
    const image = ref(null);
    const description = ref(null);

    async function setUserDetails(res) {
      id.value = res.data.user.id;
      token.value = res.data.token;
      firstName.value = res.data.user.first_name;
      lastName.value = res.data.user.last_name;
      email.value = res.data.user.email;
      location.value = res.data.user.location;
      image.value = res.data.user.image;
      description.value = res.data.user.description;
    }

    async function fetchUser() {
      const res = await axios.get(
        "api/users/" + id.value,
      );

      id.value = res.data.user.id;
      firstName.value = res.data.user.first_name;
      lastName.value = res.data.user.last_name;
      location.value = res.data.user.location;
      description.value = res.data.user.description;
    }

    async function clearUser() {
      id.value = null;
      token.value = null;
      firstName.value = null;
      lastName.value = null;
      email.value = null;
      location.value = null;
      image.value = null;
      description.value = null;
    }

    return {
      setUserDetails,
      id,
      firstName,
      lastName,
      email,
      description,
    };
  },
  { persist: true },
);
