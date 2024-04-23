---
title: Assets | Python SDK
---

# Assets

A base class for a collection of assets and some additional meta properties. Fully Populated with Formats internally (not just uuid's).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[Asset]**](Asset) |  | 
**indices** | **Dict[str, int]** | This is a Map&lt;String, int&gt; where the the key is an asset id. | [optional] 
**score** | [**Score**](Score) |  | [optional] 


