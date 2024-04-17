---
title: FlattenedAssets | Python SDK
---

# FlattenedAssets

A collection of Assets specific to the authenticated user. [DAG Compatible - Directed Acyclic Graph Data Structure]  FlattenedAssets prevent Cycles in Reference because all outbound references are strings as opposed to crosspollinated objects.  i.e. Asset asset = FlattenedAssets.iterable[0] => Format format = asset.preview => String id = format.asset => String id

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[ReferencedAsset]**](ReferencedAsset) |  | [optional] 
**indices** | **Dict[str, int]** | This is a Map&lt;String, int&gt; where the the key is an asset id. | [optional] 
**score** | [**Score**](Score) |  | [optional] 


