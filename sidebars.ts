import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import {generatedSDKSidebars, allSDKs} from './src/lib/activeSDK';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: '🚀 Getting Started',
      items: [
        {
          type: 'doc',
          id: 'installation-getting-started/what-am-i-installing',
          label: ' Desktop App',
        },
        {
          type: 'doc',
          id: 'extensions-plugins/vscode',
          label: ' VS Code Extension',
        },
        {
          type: 'doc',
          id: 'extensions-plugins/web-extension',
          label: ' Web Extension',
        },
        {
          type: 'doc',
          id: 'extensions-plugins/jetbrains',
          label: ' JetBrains Plugin',
        },
        {
          type: 'doc',
          id: 'extensions-plugins/obsidian',
          label: ' Obsidian Plugin',
        },
        {
          type: 'doc',
          id: 'extensions-plugins/visual-studio',
          label: ' Visual Studio Extension',
        },
        {
          type: 'doc',
          id: 'extensions-plugins/azure-data-studio',
          label: ' Azure Data Studio',
        },
        {
          type: 'doc',
          id: 'extensions-plugins/jupyterlab',
          label: ' JupyterLab Extension',
        },
        {
          type: 'doc',
          id: 'extensions-plugins/teams',
          label: ' Microsoft Teams App',
        },
      ]
    },
    {
      type: 'category',
      label: '💾 Pieces OS',
      items: [
        {
          type: 'doc',
          id: 'installation-getting-started/pieces-os',
          label: 'What is Pieces OS?',
        }
      ]
    },
    {
      type: 'category',
      label: '✨ Features',
      items: [
        {
          type: 'category',
          label: '🧩 Saved Materials',
          items: [
            {
              type: 'category',
              label: 'Saving',
              items: [
                {
                  type: 'doc',
                  id: 'product-highlights-and-benefits/saving-useful-developer-materials',
                  label: 'Save Developer Materials',
                },
                {
                  type: 'doc',
                  id: 'product-highlights-and-benefits/saving-screenshots',
                  label: 'Save Screenshots & Extract Code',
                }
              ]
            },
            {
              type: 'doc',
              id: 'features/auto-enrichment',
              label: 'Enrichment',
            },
            {
              type: 'doc',
              id: 'features/managing-saved-materials',
              label: 'Management (Editing, Renaming, Classification)',
            },
            {
              type: 'doc',
              id: 'features/one-click-snippet-sharing',
              label: 'Sharing',
            },
            {
              type: 'doc',
              id: 'features/transforming-snippets',
              label: 'Transformations',
            },
            {
              type: 'doc',
              id: 'features/code-completion',
              label: 'Code Completion',
            },
            {
              type: 'doc',
              id: 'features/creation-and-generation',
              label: 'Creating & Generating Code',
            },
          ]
        },
        {
          type: 'category',
          label: '🤖 Copilot',
          items: [
            {
              type: 'doc',
              id: 'features/pieces-copilot',
              label: 'Overview',
            },
            {
              type: 'doc',
              id: 'product-highlights-and-benefits/live-context',
              label: 'Live Context',
            },
          ]
        },
        {
          type: 'category',
          label: '🔍 Search',
          items: [
            {
              type: 'doc',
              id: 'features/global-search',
              label: 'Global Search',
            },
            {
              type: 'doc',
              id: 'features/search-modes',
              label: 'Search Modes',
            },
          ]
        },
        {
          type: 'category',
          label: '👤 Account & Identity',
          items: [
            {
              type: 'doc',
              id: 'features/user-settings',
              label: 'User Settings',
            },
          ]
        },
        {
          type: 'category',
          label: '🔧 Settings',
          items: [
            {
              type: 'doc',
              id: 'features/user-settings',
              label: 'User Settings',
            },
          ]
        }
      ]
    },
    {
      type: 'category',
      label: '🌱 Resources',
      items: [
        {
          type: 'category',
          label: '📚 Use Cases',
          items: [
            {
              type: 'doc',
              id: 'use-cases/countless-google-searches',
              label: 'Reduce Endless Google Searching',
            },
            {
              type: 'doc',
              id: 'use-cases/onboard-new-developers',
              label: 'Onboard New Developers',
            },
            {
              type: 'doc',
              id: 'use-cases/resurfacing-additional-context',
              label: 'Resurface Additional Context',
            },
          ]
        },
        {
          type: 'doc',
          id: 'community/index',
          label: 'Community',
        },
        {
          type: 'doc',
          id: 'community/events/index',
          label: 'Events',
        },
        {
          type: 'doc',
          id: 'early-access-program',
          label: 'Early Access Program',
        },
        {
          type: 'doc',
          id: 'features/keyboard-shortcuts',
          label: 'Keyboard Shortcuts',
        },
      ]
    }
    // {
    //   type: 'doc',
    //   id: 'changelog/index',
    //   label: '📜 Changelog',
    // }
  ],

  // docsSidebar: [
  //   {
  //     type: 'category',
  //     label: '🛠️️ Installation',
  //     items: [
  //       {
  //         type: 'doc',
  //         id: 'installation-getting-started/what-am-i-installing',
  //         label: 'Getting Started',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'installation-getting-started/macos',
  //         label: 'macOS',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'installation-getting-started/windows',
  //         label: 'Windows',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'installation-getting-started/linux',
  //         label: 'Linux',
  //       },
  //     ]
  //   },
  //   {
  //     type: 'category',
  //     label: '🔌 Apps & Plugins',
  //     items: [
  //       {
  //         type: 'doc',
  //         id: 'extensions-plugins/web-extension',
  //         label: 'Web Extension',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'extensions-plugins/vscode',
  //         label: 'VS Code Extension',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'extensions-plugins/jetbrains',
  //         label: 'JetBrains Plugin',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'extensions-plugins/obsidian',
  //         label: 'Obsidian Plugin',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'extensions-plugins/visual-studio',
  //         label: 'Visual Studio Extension',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'extensions-plugins/azure-data-studio',
  //         label: 'Azure Data Studio',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'extensions-plugins/jupyterlab',
  //         label: 'JupyterLab Extension',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'extensions-plugins/teams',
  //         label: 'Microsoft Teams App',
  //       },
  //     ]
  //   },
  //   {
  //     type: 'category',
  //     label: '⚙️ Product Features',
  //     items: [
  //       {
  //         type: 'doc',
  //         id: 'features/auto-enrichment',
  //         label: 'Auto Enrichment',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'features/back-up-and-restore',
  //         label: 'Back Up & Restore',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'features/code-completion',
  //         label: 'Code Completion',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'features/creation-and-generation',
  //         label: 'Creating & Generating Code',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'features/global-search',
  //         label: 'Global Search',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'features/keyboard-shortcuts',
  //         label: 'Keyboard Shortcuts',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'features/managing-saved-materials',
  //         label: 'Material Storage & Management',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'features/one-click-snippet-sharing',
  //         label: 'One Click Sharing',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'features/pieces-copilot',
  //         label: 'Pieces Copilot',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'features/search-modes',
  //         label: 'Search Modes',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'features/transforming-snippets',
  //         label: 'Snippet Transformations',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'features/user-settings',
  //         label: 'User Settings',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'features/workflow-activity',
  //         label: 'Workflow Activity',
  //       },
  //     ]
  //   },
  //   {
  //     type: 'category',
  //     label: '✨ Highlights & Benefits',
  //     items: [
  //       {
  //         type: 'doc',
  //         id: 'product-highlights-and-benefits/connecting-to-a-remote-pieces-os-instance',
  //         label: 'Connecting to a Remote Pieces OS Instance',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'product-highlights-and-benefits/in-project-snippet-discovery',
  //         label: 'In-Project Snippet Discovery',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'product-highlights-and-benefits/live-context',
  //         label: 'Live Context',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'product-highlights-and-benefits/privacy-security-data',
  //         label: 'Privacy & Security',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'product-highlights-and-benefits/sync-across-multiple-devices-using-github',
  //         label: 'Sync Across Devices with GitHub',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'product-highlights-and-benefits/saving-useful-developer-materials',
  //         label: 'Save Developer Materials',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'product-highlights-and-benefits/saving-screenshots',
  //         label: 'Save Screenshots & Extract Code',
  //       }
  //     ]
  //   },
  //   {
  //     type: 'category',
  //     label: '📚 Use Cases',
  //     items: [
  //       {
  //         type: 'doc',
  //         id: 'use-cases/countless-google-searches',
  //         label: 'Reduce Endless Google Searching',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'use-cases/onboard-new-developers',
  //         label: 'Onboard New Developers',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'use-cases/resurfacing-additional-context',
  //         label: 'Resurface Additional Context',
  //       },
  //     ]
  //   },
  //   {
  //     type: 'category',
  //     label: '🌱 Resources',
  //     items: [
  //       {
  //         type: 'doc',
  //         id: 'community/index',
  //         label: 'Community',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'community/events/index',
  //         label: 'Events',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'early-access-program',
  //         label: 'Early Access Program',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'support',
  //         label: 'Support',
  //       },
  //       {
  //         type: 'doc',
  //         id: 'faq',
  //         label: 'FAQs',
  //       },
  //       // {
  //       //   type: 'doc',
  //       //   id: 'ama/building-a-more-extensible-development-environment',
  //       //   label: 'Livestream AMA',
  //       // }
  //     ]
  //   }
  // ],

  sdksOverviewSidebar: [
    {
      type: 'doc',
      id: 'build/index',
      label: 'Overview',
    },
    {
      type: 'doc',
      id: 'build/examples/index',
      label: '📚 Examples',
    },
    // {
    //   type: 'doc',
    //   id: 'build/tutorials/index',
    //   label: '📚 Tutorials',
    // },
    {
      type: 'category',
      label: '🔍 API Reference',
      items: allSDKs.map(sdk => ({
          type: 'doc' as const,
          id: `build/reference/${sdk.toLowerCase()}/index`,
          label: `${sdk} SDK`
        }))
    },
    // {
    //   type: 'doc',
    //   id: 'build/concepts/index',
    //   label: '🧠 Concepts',
    // },
    {
      type: 'category',
      label: '📖 Glossary',
      items:[
        {
          type: 'doc',
          id: 'build/glossary/index',
          label: 'Overview',
        },
        {
          type: 'category',
          label: 'Terms',
          items: [
            {
              type: 'autogenerated',
              dirName: 'build/glossary/terms',
            }
          ]
        }
      ]
    },
  ],
  // Generates sidebar for each active SDK
  ...generatedSDKSidebars,
};

export default sidebars;
