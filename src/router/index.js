import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DemoView from "../views/DemoView.vue";
import PropRouteView from "../views/PropRouteView.vue";
import BeforeView from "../views/BeforeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/prop/:id",
    name: "prop",
    component: PropRouteView,
    props: true,
  },
  {
    path: "/demo/:id",
    name: "demo",
    component: DemoView,
  },
  {
    path: "/before/:id",
    name: "before",
    component: BeforeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const isAuthenticated = true;

// GOOD
router.beforeEach((to, from, next) => {
  if (to.name !== "home" && !isAuthenticated) next({ name: "home" });
  else next();
});

export default router;
