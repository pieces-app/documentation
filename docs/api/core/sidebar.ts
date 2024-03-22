import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/core/pieces-isomorphic-openapi",
    },
    {
      type: "category",
      label: "Backup",
      items: [
        {
          type: "doc",
          id: "api/core/backup-restore-specific-backup",
          label: "/backup/{backup}/restore [POST]",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/core/backup-restore-specific-backup-streamed",
          label: "/backup/{backup}/restore/streamed [POST]",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/core/backup-specific-backup-snapshot",
          label: "/backup/{backup} [GET]",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Backups",
      items: [
        {
          type: "doc",
          id: "api/core/backups-snapshot",
          label: "/backups [GET]",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/core/backups-create-new-backup",
          label: "/backups/create [POST]",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/core/backups-delete-specific-backup",
          label: "/backups/{backup}/delete [POST]",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/core/backups-create-new-backup-streamed",
          label: "/backups/create/streamed [POST]",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "WellKnown",
      items: [
        {
          type: "doc",
          id: "api/core/get-well-known-health",
          label: "/.well-known/health [GET]",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/core/get-well-known-version",
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
          id: "api/core/html-share",
          label: "/ [GET]",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
