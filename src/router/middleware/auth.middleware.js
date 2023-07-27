import { useUserStore } from "../../stores/user.store";

export const authMiddleware = async (to) => {
  const userStore = useUserStore();
  if (!userStore.id) {
    //redirect to login once trying to access route/page that will need authentication but not authenticated
    if (to.meta.requiredAuth) {
      return { name: "login" };
    }
  } else {
    if (to.meta.group === "landing" || to.meta.group === "auth") {
      // redirect to dashboard once authenticated and trying to access page/route that has a group name of auth and landing which is not require authentication and that's not allowed!
      return { name: "PostSection" };
    }
  }
};
