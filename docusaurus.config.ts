import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Pieces for Developers',
  tagline: 'Learn how to best use and optimize your workflow with Pieces for Developers! Read the sections in sequential order or click the links in the navigation on the right to get directly to the topic you need.',
  favicon: 'img/favicon.ico',
  staticDirectories: ['docs/assets'],

  // Set the production url of your site here
  url: 'https://docs.pieces.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pieces-app',
  projectName: 'documentation',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // plugins: [
    // [
    //   "docusaurus-plugin-openapi-docs",
    //   {
    //     id: "openapi",
    //     docsPluginId: "classic", // e.g. "classic" or the plugin-content-docs id
    //     config: {
    //       sdk: { // "petstore" is considered the <id> that you will reference in the CLI
    //         specPath: "openapi/sdk.yaml", // path or URL to the OpenAPI spec
    //         outputDir: "api/sdk", // output directory for generated *.mdx and sidebar.js files
    //         sidebarOptions: {
    //           groupPathsBy: "tag", // generate a sidebar.js slice that groups operations by tag
    //         },
    //       }
    //     }
    //   },
    // ],
    // [
    //   '@docusaurus/plugin-google-tag-manager',
    //   {
    //     containerId: 'GTM-K8C6QWB',
    //   },
    // ]
  // ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pieces-app/documentation/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pieces-app/documentation/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Pieces for Developers',
      logo: {
        alt: 'Pieces for Developers',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/pieces-app/documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      appId: 'KTOXFODR65',
      apiKey: '79c81e52460257d3761ea38438e29637',
      indexName: 'pieces',
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Join our community',
              href: '/community',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/getpieces',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/getpieces',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/pieces-app/documentation',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mesh Intelligent Technologies, Inc. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
