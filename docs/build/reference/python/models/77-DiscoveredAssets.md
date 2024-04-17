---
title: DiscoveredAssets | Python SDK
---

# DiscoveredAssets

This is a plural Model that is used within the bulk upload flow in both cases of a file(&& needing snippitization) as well as if the fragments are passed in and they only need to be clustered.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**application** | **str** | application id. | 
**iterable** | [**List[DiscoveredAsset]**](DiscoveredAsset) | This is an iterable of already snippitized snippets that have been clustered.(These are assets that are going to be uploaded or at minimum the assets that we reccommend to upload) | 


