const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),

    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },

      {
        path: "aboutPage",
        component: () => import("src/pages/About pages/aboutPage.vue"),
      },
      {
        path: "homePage",
        component: () => import("src/pages/Home pages/homePage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
