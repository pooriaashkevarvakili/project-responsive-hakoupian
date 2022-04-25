import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/mainLayout",
    component: () => import("layouts/MainLayout.vue"),

    children: [
      {path:'/titles',component:()=>import('pages/Titles.vue')},
      { path: "/dashboard", component: () => import("pages/Dashboard.vue") },
      {
        path: "/applyingRecruitment",
        component: () => import("pages/ApplyingRecruitment.vue"),
      },
      {
        path:"/desk",
        component: () => import("components/Desk/Desk.vue")
      },
    {
      path:'/userManagement',
      component: () => import("pages/UserManagement.vue")
    },
   
      { path: "/mailRoom", component: () => import("pages/Mailroom.vue") },
      {
        path: "/resumearshive",
        component: () => import("pages/ResumeArshive.vue"),
      },

      {
        path: "/",
        component: () => import("layouts/Signup-1.vue"),
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
