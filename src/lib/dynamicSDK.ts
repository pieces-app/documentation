// This script generates the sidebar items for each SDK based on the activeSDKs array.

// List of SDKs to display on the docs
export const activeSDKs = [
  'Python',
  'Dart',
  'Kotlin'
];

// Base list of sidebar items to be used as a template for each SDK
const baseSidebarItems = [
  {
    type: 'ref',
    id: 'build/index',
    label: '← Back to SDKs',
  },
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
  const sdkNameLowerCase = sdkName.toLowerCase();

  const itemsWithPrefixedId = baseSidebarItems.map(item => {
    if (item.id === 'build/index') {
      return {
        ...item,
      };
    }

    // For top-level doc items, simply prefix the id
    if (item.type === 'doc') {
      return {
        ...item,
        id: `build/sdks/${sdkNameLowerCase}/${item.id}`,
      };
    }

    // For categories, map over the items and prefix their ids
    if (item.type === 'category' && item.items) {
      return {
        ...item,
        items: item.items.map(subItem => ({
          ...subItem,
          id: `build/sdks/${sdkNameLowerCase}/${subItem.id}`,
        })),
      };
    }
  });

  acc[`${sdkNameLowerCase}SDKSidebar`] = itemsWithPrefixedId;
  return acc;
}, {});
