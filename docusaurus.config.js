// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MyBlog',
  tagline: '没有未来的未来，不是我想要的未来',
  favicon: 'img/favicon.ico',
  url: 'https://alanhy78.github.io',
  baseUrl: '/',
  organizationName: 'alanhy78', // Usually your GitHub org/user name.
  projectName: 'alanhy78.github.io', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      //右边小目录 显示级别
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      navbar: {
        title: 'MyBlog', // 标题
        hideOnScroll: false,		// 下拉界面时不隐藏导航栏
        items: [
          // {
          //   type: 'search',			// 搜索框 现在还没做好...
          //   position: 'right', 	// 搜索框位置 在右边
          // },

          {
            type: 'doc',				// 把这个项目的类型设置为文档链接。
            docId: 'index',			// 这个项目链接到的文档的 ID。
            position: 'right',	// 显示位置 在右边
            label: '正文',			// 项目显示的名称
          },
          // {
          //   href: 'https://github.com/alanhy78',	// 点击图标时跳转到的链接
          //   label: 'GitHub',		// 项目显示的名称
          //   position: 'right',	// 显示位置 在右边
          // },
        ],

      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },

    }),
};

module.exports = config;
