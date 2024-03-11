import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  learnSidebar: [
    {
      type: 'category',
      label: '🛠️️ Installation',
      items: [
        {
          type: 'doc',
          id: 'learn/installation-getting-started/what-am-i-installing',
          label: 'Getting Started',
        },
        {
          type: 'doc',
          id: 'learn/installation-getting-started/macos',
          label: 'macOS',
        },
        {
          type: 'doc',
          id: 'learn/installation-getting-started/windows',
          label: 'Windows',
        },
        {
          type: 'doc',
          id: 'learn/installation-getting-started/linux',
          label: 'Linux',
        },
      ]
    },
    {
      type: 'category',
      label: '🔌 Apps & Plugins',
      items: [
        {
          type: 'doc',
          id: 'learn/extensions-plugins/chrome',
          label: 'Chrome Extension',
        },
        {
          type: 'doc',
          id: 'learn/extensions-plugins/edge',
          label: 'Edge Addon',
        },
        {
          type: 'doc',
          id: 'learn/extensions-plugins/firefox',
          label: 'Firefox Addon',
        },
        {
          type: 'doc',
          id: 'learn/extensions-plugins/jetbrains',
          label: 'Jetbrains Plugin',
        },
        {
          type: 'doc',
          id: 'learn/extensions-plugins/vscode',
          label: 'VS Code Extension',
        },
        {
          type: 'doc',
          id: 'learn/extensions-plugins/azure-data-studio',
          label: 'Azure Data Studio',
        },
        {
          type: 'doc',
          id: 'learn/extensions-plugins/obsidian',
          label: 'Obsidian Plugin',
        },
        {
          type: 'doc',
          id: 'learn/extensions-plugins/jupyterlab',
          label: 'JupyterLab Extension',
        },
        {
          type: 'doc',
          id: 'learn/extensions-plugins/teams',
          label: 'Microsoft Teams App',
        },
      ]
    },
    {
      type: 'category',
      label: '⚙️ Product Features',
      items: [
        {
          type: 'doc',
          id: 'learn/features/auto-enrichment',
          label: 'Auto Enrichment',
        },
        {
          type: 'doc',
          id: 'learn/features/back-up-and-restore',
          label: 'Back Up & Restore',
        },
        {
          type: 'doc',
          id: 'learn/features/code-completion',
          label: 'Code Completion',
        },
        {
          type: 'doc',
          id: 'learn/features/creation-and-generation',
          label: 'Creating & Generating Code',
        },
        {
          type: 'doc',
          id: 'learn/features/global-search',
          label: 'Global Search',
        },
        {
          type: 'doc',
          id: 'learn/features/keyboard-shortcuts',
          label: 'Keyboard Shortcuts',
        },
        {
          type: 'doc',
          id: 'learn/features/managing-saved-materials',
          label: 'Material Storage & Management',
        },
        {
          type: 'doc',
          id: 'learn/features/one-click-snippet-sharing',
          label: 'One Click Sharing',
        },
        {
          type: 'doc',
          id: 'learn/features/pieces-copilot',
          label: 'Pieces Copilot',
        },
        {
          type: 'doc',
          id: 'learn/features/search-modes',
          label: 'Search Modes',
        },
        {
          type: 'doc',
          id: 'learn/features/transforming-snippets',
          label: 'Snippet Transformations',
        },
        {
          type: 'doc',
          id: 'learn/features/user-settings',
          label: 'User Settings',
        },
        {
          type: 'doc',
          id: 'learn/features/workflow-activity',
          label: 'Workflow Activity',
        },
      ]
    },
    {
      type: 'category',
      label: '✨ Highlights & Benefits',
      items: [
        {
          type: 'doc',
          id: 'learn/product-highlights-and-benefits/connecting-to-a-remote-pieces-os-instance',
          label: 'Connecting to a Remote Pieces OS Instance',
        },
        {
          type: 'doc',
          id: 'learn/product-highlights-and-benefits/in-project-snippet-discovery',
          label: 'In-Project Snippet Discovery',
        },
        {
          type: 'doc',
          id: 'learn/product-highlights-and-benefits/privacy-security-data',
          label: 'Privacy & Security',
        },
        {
          type: 'doc',
          id: 'learn/product-highlights-and-benefits/sync-across-multiple-devices-using-github',
          label: 'Sync Across Devices with GitHub',
        },
        {
          type: 'doc',
          id: 'learn/product-highlights-and-benefits/saving-useful-developer-materials',
          label: 'Save Developer Materials',
        },
        {
          type: 'doc',
          id: 'learn/product-highlights-and-benefits/saving-screenshots',
          label: 'Save Screenshots & Extract Code',
        },
      ]
    },
    {
      type: 'category',
      label: '📚 Use Cases',
      items: [
        {
          type: 'doc',
          id: 'learn/use-cases/countless-google-searches',
          label: 'Reduce Endless Google Searching',
        },
        {
          type: 'doc',
          id: 'learn/use-cases/onboard-new-developers',
          label: 'Onboard New Developers',
        },
        {
          type: 'doc',
          id: 'learn/use-cases/resurfacing-additional-context',
          label: 'Resurface Additional Context',
        },
      ]
    },
  ],
  // buildSidebar: [
  //   {
  //     type: 'autogenerated',
  //     dirName: 'build',
  //   }
  // ]
};

export default sidebars;
