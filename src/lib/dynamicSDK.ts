// This script generates the sidebar items for each SDK based on the activeSDKs array.

// List of SDKs to display on the docs
export const activeSDKs = [
  'python',
  'dart',
  'kotlin'
];

// Base list of sidebar items to be used as a template for each SDK
const baseSidebarItems = [
  {
    type: 'doc',
    id: 'guides/getting-started',
    label: 'Getting Started',
  },
  {
    type: 'category',
    label: 'APIs',
    items: [
      // { type: 'doc', id: 'docs/ActivitiesApi', label: 'Activities API' },
      { type: 'doc', id: 'docs/ApplicationsApi', label: 'Applications API' },
      { type: 'doc', id: 'docs/AssetsApi', label: 'Assets API' },
      { type: 'doc', id: 'docs/ConnectorApi', label: 'Connector API' },
      { type: 'doc', id: 'docs/ConversationsApi', label: 'Conversations API' },
      // { type: 'doc', id: 'docs/ModelsApi', label: 'Models API' },
      // { type: 'doc', id: 'docs/OSApi', label: 'OS API' },
      // { type: 'doc', id: 'docs/SearchApi', label: 'Search API' },
      { type: 'doc', id: 'docs/WellKnownApi', label: 'WellKnown API' },
    ]
  },
  {
    type: 'category',
    label: 'Models',
    items: [
      // { type: 'doc', id: 'docs/Activity', label: 'Activity' },
      { type: 'doc', id: 'docs/Application', label: 'Application' },
      { type: 'doc', id: 'docs/Asset', label: 'Asset' },
      { type: 'doc', id: 'docs/Conversation', label: 'Conversation' },
      // { type: 'doc', id: 'docs/Model', label: 'Model' },
      // { type: 'doc', id: 'docs/SearchedAssets', label: 'Searched Assets' },
    ]
  }
];

// Generate sidebar items for each active SDK
export const sdkSidebars = activeSDKs.reduce((acc, sdkName) => {
  const itemsWithPrefixedId = baseSidebarItems.map(item => {
    // For top-level doc items, simply prefix the id
    if (item.type === 'doc') {
      return {
        ...item,
        id: `sdks/${sdkName}/${item.id}`,
      };
    }

    // For categories, map over the items and prefix their ids
    if (item.type === 'category' && item.items) {
      return {
        ...item,
        items: item.items.map(subItem => ({
          ...subItem,
          id: `sdks/${sdkName}/${subItem.id}`,
        })),
      };
    }
  });

  acc[`${sdkName}SDKSidebar`] = itemsWithPrefixedId;
  return acc;
}, {});
