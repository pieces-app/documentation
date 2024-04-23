---
title: Node | TypeScript SDK
---


# Node

This describes a node within a relationship graph used to related like types. ie asset to asset, tag to tag, ...etc  created: is here to let us know when the node was attached.  id: this is the the id of the type ie, if the type is Asset the id here points to the asset that this node represents.

## Properties

Name | Type
------------ | -------------
**id** | **string**
**type** | [**NodeTypeEnum**](NodeTypeEnum)
**root** | **boolean**
**created** | [**GroupedTimestamp**](GroupedTimestamp)


