---
title: SeededDiscoverableAssets | Python SDK
---

# SeededDiscoverableAssets

Assumption: filters imposed in this model can be overwritten by passing them in SeededDiscoverableAsset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**application** | **str** | application id. | 
**iterable** | [**List[SeededDiscoverableAsset]**](SeededDiscoverableAsset) | This is an iterable of already snippitized snippets that we will compare &amp;&amp; cluster. | 
**filters** | [**TLPDirectedDiscoveryFilters**](TLPDirectedDiscoveryFilters) |  | [optional] 


