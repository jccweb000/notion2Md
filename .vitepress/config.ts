import { defineConfig } from 'vitepress';

import sidebarCfg from '../config/index.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "才到云2.0产品文档",
  description: "产品文档",
  lang: 'zh',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: sidebarCfg?.redirectPath || '/' }
    ],

    sidebar: sidebarCfg.config || [],

    docFooter: { prev: '上一篇', next: '下一篇' },

    search: { 
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    outline: {
      label: '当前页面'
    },

    footer: {
      message: '上海云武华科技有限公司',
      // copyright: 'Copyright © 2015-2022 上海云武华科技有限公司 沪ICP备15021922号-2'
    },
  },
  base: '/notion2Md/'
})
