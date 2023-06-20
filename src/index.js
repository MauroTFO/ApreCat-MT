import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/Welcome.vue"),
    },
    {
      path: "/enviar",
      name: "SingUp",
      component: () => import("@/routers/SingUpPage.vue")
    },
  ],
});

export default router;
