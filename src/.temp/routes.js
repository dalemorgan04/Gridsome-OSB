const c1 = () => import(/* webpackChunkName: "page--src-pages-project-vue" */ "D:\\Repos\\Personal\\Gridsome-OSB\\src\\pages\\Project.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "D:\\Repos\\Personal\\Gridsome-OSB\\src\\pages\\Contact.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "D:\\Repos\\Personal\\Gridsome-OSB\\src\\pages\\About.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\Repos\\Personal\\Gridsome-OSB\\node_modules\\gridsome\\app\\pages\\404.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\Repos\\Personal\\Gridsome-OSB\\src\\pages\\Index.vue")

export default [
  {
    path: "/project/",
    component: c1
  },
  {
    path: "/contact/",
    component: c2
  },
  {
    path: "/about/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
