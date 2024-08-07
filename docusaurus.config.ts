import {themes as prismThemes} from'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {EnumChangefreq} from "sitemap";
import {ScalarOptions} from "@scalar/docusaurus";

const config: Config = {
  title: 'Pieces for Developers',
  tagline: 'Learn how to best use and optimize your workflow with Pieces for Developers!',
  favicon: 'assets/pieces_logos/white_circle.png',

  url: 'https://docs.pieces.app',
  baseUrl: '/',

  organizationName: 'pieces-app',
  projectName: 'documentation',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/pieces-app/documentation/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        googleTagManager: {
          containerId: 'GTM-K8C6QWB',
        },
        sitemap: {
          changefreq: EnumChangefreq.WEEKLY,
          priority: 0.8,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@scalar/docusaurus',
      {
        id: 'scalar-apis',
        label: 'APIs',
        route: '/build/reference/apis',
        showNavLink: false,
        configuration: {
          spec: {
            url: 'https://raw.githubusercontent.com/pieces-app/pieces-os-client-openapi-spec/main/spec/modules/core/isomorphic.openapi.yaml',
          },
          hideDownloadButton: true,
        },
      } as ScalarOptions,
    ],
    [
      '@scalar/docusaurus',
      {
        id: 'scalar-models',
        label: 'Models',
        route: '/build/reference/models',
        showNavLink: false,
        configuration: {
          spec: {
            url: 'https://raw.githubusercontent.com/pieces-app/pieces-os-client-openapi-spec/main/spec/common/runtime_common_library.yaml',
          },
          hideDownloadButton: true,
        },
      } as ScalarOptions,
    ]
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
      // id: 'build-with-pieces',
      // content: '🔨 Build with Pieces! <a href="/build">Learn more</a>',
    },

    algolia: {
      appId: 'KTOXFODR65',
      apiKey: 'ea4804560699e4b727715163b74bea83',
      indexName: 'pieces_docusaurus',
    },

    navbar: {
      logo: {
        alt: 'Pieces for Developers',
        src: 'assets/pieces_logos/wordmark.svg',
        srcDark: 'assets/pieces_logos/white_wordmark.svg',
        href: 'https://pieces.app',
      },
      items: [
        {
          to: '/',
          label: 'Home',
          position: 'right',
        },
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          label: 'Learn',
          position: 'right',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sdksOverviewSidebar',
          label: 'Build',
          position: 'right',
        },
        {
          type: 'dropdown',
          label: 'Community',
          position: 'right',
          items: [
            {
              to: '/community',
              label: 'Overview',
            },
            {
              to: '/community/events',
              label: 'Events',
            },
          ],
        },
        {
          to: '/support',
          label: 'Support',
          position: 'right',
        },
        {
          to: '/faq',
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
        {
          title: 'Socials',
          items: [
            {
              label: 'Discord',
              href: 'https://pieces.app/discord',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/getpieces',
            },
            {
              label: 'YouTube',
              href: 'https://youtube.com/@getpieces',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/getpieces',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/orgs/pieces-app',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/company/getpieces',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/getpieces',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Blog',
              href: 'https://code.pieces.app/blog',
            },
            {
              label: 'Product Updates',
              href: 'https://code.pieces.app/updates',
            },
            {
              label: 'Press',
              href: 'https://pieces.app/news',
            },
            {
              label: 'Newsletter',
              href: 'https://thepiecespost.beehiiv.com',
            }
          ],
        },
        {
          title: 'Terms & Policies',
          items: [
            {
              label: 'Privacy Policy',
              href: 'https://pieces.app/legal/privacy-policy',
            },
            {
              label: 'Terms of Service',
              href: 'https://pieces.app/legal/terms',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mesh Intelligent Technologies, Inc. All rights reserved.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['dart']
    },

    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
