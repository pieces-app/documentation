---
title: Hint | TypeScript SDK
---


# Hint

This is a hint that is attached to an asset, used for suggested_queries, and hints given via the qgpt flow.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**mechanism** | [**MechanismEnum**](MechanismEnum)
**asset** | [**ReferencedAsset**](ReferencedAsset)
**type** | [**HintTypeEnum**](HintTypeEnum)
**text** | **string**
**model** | [**ReferencedModel**](ReferencedModel)
**score** | [**Score**](Score)


