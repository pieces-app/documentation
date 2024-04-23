---
title: Hint | Python SDK
---

# Hint

This is a hint that is attached to an asset, used for suggested_queries, and hints given via the qgpt flow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] 
**asset** | [**ReferencedAsset**](ReferencedAsset) |  | [optional] 
**type** | [**HintTypeEnum**](HintTypeEnum) |  | 
**text** | **str** | This is the text of the hint. | 
**model** | [**ReferencedModel**](ReferencedModel) |  | [optional] 
**score** | [**Score**](Score) |  | [optional] 


