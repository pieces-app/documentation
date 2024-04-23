---
title: SearchedAsset | Python SDK
---

# SearchedAsset

This is a modle that will represent a searched asset!

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**asset** | [**Asset**](Asset) |  | [optional] 
**exact** | **bool** |  | 
**score** | **float** |  | 
**match** | [**SearchedMatchEnum**](SearchedMatchEnum) |  | 
**identifier** | **str** | This is the uuid of the asset. | 
**pseudo** | **bool** | If this is a pseudo asset that was also returned. | [optional] 


