import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "sdk/api/pieces-isomorphic-openapi",
    },
    {
      type: "category",
      label: "WellKnown",
      items: [
        {
          type: "doc",
          id: "sdk/api/get-well-known-health",
          label: "/.well-known/health [GET]",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sdk/api/get-well-known-version",
          label: "/.well-known/version [Get]",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Piece",
      items: [
        {
          type: "doc",
          id: "sdk/api/html-share",
          label: "/ [GET]",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Activities",
      items: [
        {
          type: "doc",
          id: "sdk/api/activities-delete-specific-activity",
          label: "/activities/activity_id/delete [POST]",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
