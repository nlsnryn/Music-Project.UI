import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import RegisterView from "@/views/auth/RegisterView.vue";
import LoginView from "@/views/auth/LoginView.vue";
import AccountView from "@/views/AccountView.vue";
import ProfileSection from "@/views/account/ProfileSection.vue";
import EditProfile from "@/views/account/EditProfile.vue";
import AddSong from "@/views/account/AddSong.vue";
import DeleteSong from "@/views/account/DeleteSong.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/account",
      component: AccountView,
      children: [
        {
          path: "profile",
          name: "ProfileSection",
          component: ProfileSection,
        },
        {
          path: "edit-profile",
          name: "EditProfile",
          component: EditProfile,
        },
        {
          path: "add-song",
          name: "AddSong",
          component: AddSong,
        },
        {
          path: "delete-song",
          name: "DeleteSong",
          component: DeleteSong,
        },
      ],
    },
  ],
});

export default router;
