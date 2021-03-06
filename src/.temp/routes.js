const c1 = () => import(/* webpackChunkName: "page--src-pages-success-vue" */ "D:\\Repos\\Personal\\Gridsome-OSB\\src\\pages\\Success.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-project-vue" */ "D:\\Repos\\Personal\\Gridsome-OSB\\src\\pages\\Project.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "D:\\Repos\\Personal\\Gridsome-OSB\\src\\pages\\Contact.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "D:\\Repos\\Personal\\Gridsome-OSB\\src\\pages\\About.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\Repos\\Personal\\Gridsome-OSB\\node_modules\\gridsome\\app\\pages\\404.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\Repos\\Personal\\Gridsome-OSB\\src\\pages\\Index.vue")

export default [
  {
    path: "/success/",
    component: c1
  },
  {
    path: "/project/",
    component: c2
  },
  {
    path: "/contact/",
    component: c3
  },
  {
    path: "/about/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
