import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Pieces for Developers',
  tagline: 'Learn how to best use and optimize your workflow with Pieces for Developers! Read the sections in sequential order or click the links in the navigation on the right to get directly to the topic you need.',
  favicon: 'img/favicon.ico',
  staticDirectories: ['static', 'docs/assets'],

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

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic", // e.g. "classic" or the plugin-content-docs id
        config: {
          sdk: {
            specPath: "openapi/sdk.yaml", // path or URL to the OpenAPI spec
            outputDir: "docs/api/sdk", // output directory for generated *.mdx and sidebar.js files
            sidebarOptions: {
              groupPathsBy: "tag", // generate a sidebar.js slice that groups operations by tag
            },
          }
        }
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/pieces-app/documentation/tree/main/',
          // docItemComponent: "@theme/ApiItem"
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'GTM-K8C6QWB',
          anonymizeIP: true,
        }
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // TODO: Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    // announcementBar: {
    //   id: 'support_us',
    //   content: 'Support Us!'
    // },
    navbar: {
      title: 'Pieces for Developers',
      logo: {
        alt: 'Pieces for Developers',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/api',
          label: 'API',
          position: 'left'
        },
        {
          href: 'https://github.com/pieces-app/documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
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
          ],
        },
        {
          title: 'Social Media',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/getpieces',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/company/getpieces',
            },
            {
              label: 'YouTube',
              href: 'https://youtube.com/@getpieces',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mesh Intelligent Technologies, Inc. All rights reserved.`,
    },

    themes: ["docusaurus-theme-openapi-docs"],

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: 'KTOXFODR65',
      apiKey: '79c81e52460257d3761ea38438e29637',
      indexName: 'pieces',
    },
    colorMode: {
      defaultMode: 'dark',
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
