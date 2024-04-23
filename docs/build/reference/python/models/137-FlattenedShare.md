---
title: FlattenedShare | Python SDK
---

# FlattenedShare

This is a dag safe version of the Share.  if user is undefined && access is public then we have an asset that is publicly available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** | This references the share it self. | 
**asset** | **str** | this is the asset id on the flattened share. | [optional] 
**user** | **str** | this is the uuid of the user that the share is created for. | [optional] 
**link** | **str** | this is the prebuilt link. | 
**access** | [**AccessEnum**](AccessEnum) |  | 
**accessors** | [**Accessors**](Accessors) |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**short** | **str** | This is a shortened version of our uuid. | 
**name** | **str** |  | [optional] 
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] 
**distributions** | [**FlattenedDistributions**](FlattenedDistributions) |  | [optional] 
**score** | [**Score**](Score) |  | [optional] 


