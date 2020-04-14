export default [
  {
    path: "/tag/:id/",
    component: () => import(/* webpackChunkName: "page--src-templates-tag-vue" */ "D:\\Repos\\Personal\\Gridsome-OSB\\src\\templates\\Tag.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\Repos\\Personal\\Gridsome-OSB\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    path: "/:title/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "D:\\Repos\\Personal\\Gridsome-OSB\\src\\templates\\Post.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\Repos\\Personal\\Gridsome-OSB\\src\\pages\\Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\Repos\\Personal\\Gridsome-OSB\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

