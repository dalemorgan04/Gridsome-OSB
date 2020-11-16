// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  port: '44301',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
    config.resolve.alias.set('@uploads', 'static/uploads/images')
    config.mode('production')
  },
  plugins: [
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/projects/*.md',
        typeName: 'Projects',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/testimonials/*.md',
        typeName: 'Testimonials',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/pages/home.yml',
        typeName: 'HomeContent',
      }
    },
    { use: 'gridsome-plugin-netlify-cms' },
    {
      use: 'gridsome-plugin-netlify-cms-paths',
      options: {
        contentTypes: ['HomeContent'] // Same as declared above
      }
    }
  ]
}