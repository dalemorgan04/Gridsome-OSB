export default [
  {
    path: "/project/",
    component: () => import(/* webpackChunkName: "page--src-pages-project-vue" */ "D:\\Repos\\Personal\\Gridsome-OSB\\src\\pages\\project.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "D:\\Repos\\Personal\\Gridsome-OSB\\src\\pages\\About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\Repos\\Personal\\Gridsome-OSB\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\Repos\\Personal\\Gridsome-OSB\\src\\pages\\index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\Repos\\Personal\\Gridsome-OSB\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

