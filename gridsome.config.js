// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const fromPath = path.resolve(__dirname,"static/uploads/");
const toPath = path.resolve(__dirname,"src/uploads/");

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
    config.resolve.alias.set('@uploads', '/uploads')
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
        typeName: 'HomeContent'
      }
    },
    { use: 'gridsome-plugin-netlify-cms',
      options: { publicPath: `/admin`}
    },
    {
      use: 'gridsome-plugin-netlify-cms-paths',
      options: {
        contentTypes: ['HomeContent'],
        coverField: 'image'
      }
    }
  ],
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {          
          from: fromPath,
          to: toPath,
          toType: "dir"
        }
      ]),
      new BundleAnalyzerPlugin()
    ]
  }
}