/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: '简介',
    },
    {
      type: 'category',
      label: 'Linux',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'doc',
          id: 'Linux/part1',
          label: '基本情况',
        },
        {
          type: 'doc',
          id: 'Linux/part2',
          label: '命令使用',
        },
      ],
    },
    {
      type: 'category',
      label: 'C/C++',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'doc',
          id: 'C++/part1',
          label: 'part1',
        },
        {
          type: 'doc',
          id: 'C++/part2',
          label: 'part2',
        },
      ],
    },
    {
      type: 'category',
      label: 'Flutter',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'doc',
          id: 'Flutter/fbase',
          label: 'fbase',
        },
      ],
    },

  ],
};

module.exports = sidebars;
