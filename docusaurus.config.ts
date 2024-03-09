import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Pieces for Developers',
  tagline: 'Learn how to best use and optimize your workflow with Pieces for Developers!',
  favicon: 'assets/pieces_logos/white_circle.png',

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
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // plugins: [
  //   [
  //     'vercel-analytics',
  //     {
  //        debug: true,
  //         mode: 'auto',
  //     },
  //   ],
    // [
    //   '@docusaurus/plugin-ideal-image',
    //   {
    //     quality: 70,
    //     max: 1030, // max resized image's size.
    //     min: 640, // min resized image's size. if original is lower, use that size.
    //     steps: 2, // the max number of images generated between min and max (inclusive)
    //     disableInDev: false,
    //   },
    // ],
    // [
    //   "docusaurus-plugin-openapi-docs",
    //   {
    //     id: "openapi",
    //     docsPluginId: "classic", // e.g. "classic" or the plugin-content-docs id
    //     config: {
    //       common: {
    //         // specPath: "openapi/sdk.yaml", // path or URL to the OpenAPI spec
    //         specPath: '/Users/pieces/IdeaProjects/generated_runtime/spec/common/runtime_common_library.yaml',
    //         outputDir: "build/api/common", // output directory for generated *.mdx and sidebar.js files
    //         sidebarOptions: {
    //           groupPathsBy: "tag", // generate a sidebar.js slice that groups operations by tag
    //         },
    //       },
    //       connector: {
    //         // specPath: "openapi/sdk.yaml", // path or URL to the OpenAPI spec
    //         specPath: '/Users/pieces/IdeaProjects/generated_runtime/spec/modules/connector/connector.openapi.yaml',
    //         outputDir: "build/api/connector", // output directory for generated *.mdx and sidebar.js files
    //         sidebarOptions: {
    //           groupPathsBy: "tag", // generate a sidebar.js slice that groups operations by tag
    //         },
    //       },
    //       core: {
    //         // specPath: "openapi/sdk.yaml", // path or URL to the OpenAPI spec
    //         specPath: '/Users/pieces/IdeaProjects/generated_runtime/spec/modules/core/isomorphic.openapi.yaml',
    //         outputDir: "build/api/core", // output directory for generated *.mdx and sidebar.js files
    //         sidebarOptions: {
    //           groupPathsBy: "tag", // generate a sidebar.js slice that groups operations by tag
    //         },
    //       }
    //     }
    //   },
    // ],
  // ],

  // themes: ["docusaurus-theme-openapi-docs"],

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'learn',
          routeBasePath: 'learn',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/pieces-app/documentation/tree/main/',
          // docLayoutComponent: "@theme/DocPage",
          // docItemComponent: "@theme/ApiItem" // derived from docusaurus-theme-openapi-docs

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
    // [
    //   'redocusaurus',
    //   {
    //     // Plugin Options for loading OpenAPI files
    //     specs: [
    //       {
    //         spec: '/Users/pieces/IdeaProjects/generated_runtime/spec/common/runtime_common_library.yaml',
    //         route: '/api/common',
    //         id: 'common',
    //       },
    //       {
    //         spec: '/Users/pieces/IdeaProjects/generated_runtime/spec/modules/connector/connector.openapi.yaml',
    //         route: '/api/connector',
    //         id: 'connector'
    //       },
    //       {
    //         spec: '/Users/pieces/IdeaProjects/generated_runtime/spec/modules/core/isomorphic.openapi.yaml',
    //         route: '/api/core',
    //         id: 'core'
    //       },
    //     ],
    //     theme: {
    //       primaryColor: 'rgb(183,183,183)',
    //     },
    //   },
    // ],
  ],

  themeConfig: {
    image: 'assets/pfd_preview.png',
    metadata: [
      {
        name: 'og:image',
        content: 'assets/pfd_preview.png'
      },
    ],
    announcementBar: {
      id: 'new-docs',
      content: '🚀 Welcome to the new Pieces for Developers Documentation! 🚀',
    },
    navbar: {
      // title: 'Pieces for Developers',
      logo: {
        alt: 'Pieces for Developers',
        src: 'assets/pieces_logos/wordmark.svg',
        srcDark: 'assets/pieces_logos/white_wordmark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'learnSidebar',
          label: 'Learn',
          position: 'right',
        },
        // {
        //   label: 'Build',
        //   position: 'right',
        //   items: [
        //     {
        //       label: 'Common API',
        //       to: '/api/common',
        //     },
        //     {
        //       label: 'Connector API',
        //       to: '/api/connector',
        //     },
        //     {
        //       label: 'Core API',
        //       to: '/api/core',
        //     },
        //   ],
        // },
        {
          to: '/community',
          label: 'Community',
          position: 'right',
        },
        {
          to: '/support',
          label: 'Support',
          position: 'right',
        },
        {
          to: '/learn/faq',
          label: 'FAQ',
          position: 'right',
        },
        {
          href: 'https://github.com/pieces-app/documentation',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      links: [
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Join our community',
        //       href: '/community',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.gg/getpieces',
        //     },
        //   ],
        // },
        // {
        //   title: 'Social Media',
        //   items: [
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/getpieces',
        //     },
        //     {
        //       label: 'YouTube',
        //       href: 'https://youtube.com/@getpieces',
        //     },
        //   ],
        // },
        {
          title: 'Terms & Policies',
          items: [
            {
              label: 'Privacy Policy',
              href: '/learn/privacy-policy',
            },
            {
              label: 'Terms of Service',
              href: '/learn/terms',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mesh Intelligent Technologies, Inc. All rights reserved.`,
    },

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
      respectPrefersColorScheme: true,
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
