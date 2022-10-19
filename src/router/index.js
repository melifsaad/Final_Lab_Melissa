import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Inicio.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LogIn.vue")
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/SignUp.vue")
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router;
