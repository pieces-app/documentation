---
title: Node | Python SDK
---

# Node

This describes a node within a relationship graph used to related like types. ie asset to asset, tag to tag, ...etc  created: is here to let us know when the node was attached.  id: this is the the id of the type ie, if the type is Asset the id here points to the asset that this node represents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | [**NodeTypeEnum**](NodeTypeEnum) |  | 
**root** | **bool** | This is a boolean to let us know if this node is the root or origin of the relationship graph. | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 


