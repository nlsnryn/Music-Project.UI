import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import RegisterView from "@/views/auth/RegisterView.vue";
import LoginView from "@/views/auth/LoginView.vue";
import AccountView from "@/views/AccountView.vue";
import ProfileSection from "@/views/account/ProfileSection.vue";
import EditProfile from "@/views/account/EditProfile.vue";
import AddSong from "@/views/account/AddSong.vue";
import DeleteSong from "@/views/account/DeleteSong.vue";
import AddYoutubeVideo from "@/views/account/AddYoutubeVideo.vue";
import DeleteYoutubeVideo from "@/views/account/DeleteYoutubeVideo.vue";
import CreatePost from "@/views/account/CreatePost.vue";
import EditPost from "@/views/account/EditPost.vue";
import PostSection from "@/views/account/PostSection.vue";
import PostById from "@/views/account/PostById.vue";
import { authMiddleware } from "./middleware/auth.middleware";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        group: "landing",
      },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      meta: {
        group: "auth",
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        group: "auth",
      },
    },
    {
      path: "/account",
      component: AccountView,
      meta: {
        requiredAuth: true,
      },
      children: [
        {
          path: "profile/:id",
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
        {
          path: "add-youtube-video",
          name: "AddYoutubeVideo",
          component: AddYoutubeVideo,
        },
        {
          path: "delete-youtube-video",
          name: "DeleteYoutubeVideo",
          component: DeleteYoutubeVideo,
        },
        {
          path: "create-post",
          name: "CreatePost",
          component: CreatePost,
        },
        {
          path: "edit-post/:id",
          name: "EditPost",
          component: EditPost,
        },
        {
          path: "posts",
          name: "PostSection",
          component: PostSection,
        },
        {
          path: "posts-by-id/:id",
          name: "PostById",
          component: PostById,
        },
      ],
    },
  ],
});

router.beforeEach(authMiddleware);
export default router;
