import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: "/",
    name: "inicio",
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
  {
    path: "/verificacion",
    name: "verificacion",
    component: () => import("../views/Verificacion.vue")
  },
  {
    path: "/task",
    name: "task",
    component: () => import("../views/TaskHome.vue")
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router;
