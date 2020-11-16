import plugin_gridsome_plugin_netlify_cms_5 from "D:\\Repos\\Personal\\Gridsome-OSB\\node_modules\\gridsome-plugin-netlify-cms\\gridsome.client.js"
import plugin_gridsome_plugin_netlify_cms_9 from "D:\\Repos\\Personal\\Gridsome-OSB\\node_modules\\gridsome-plugin-netlify-cms\\gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_netlify_cms_5,
    options: {"publicPath":"/admin","htmlTitle":"Content Editor","configPath":"src/admin/config.yml","modulePath":"D:\\Repos\\Personal\\Gridsome-OSB\\node_modules\\gridsome-plugin-netlify-cms/lib/cms.js","htmlPath":"D:\\Repos\\Personal\\Gridsome-OSB\\node_modules\\gridsome-plugin-netlify-cms/templates/index.html","injectScript":true,"enableIdentityWidget":true,"debug":false}
  },
  {
    run: plugin_gridsome_plugin_netlify_cms_9,
    options: {"htmlTitle":"Content Editor","configPath":"src/admin/config.yml","modulePath":"D:\\Repos\\Personal\\Gridsome-OSB\\node_modules\\gridsome-plugin-netlify-cms/lib/cms.js","htmlPath":"D:\\Repos\\Personal\\Gridsome-OSB\\node_modules\\gridsome-plugin-netlify-cms/templates/index.html","publicPath":"/admin","injectScript":true,"enableIdentityWidget":true,"debug":false}
  }
]
