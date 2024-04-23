---
title: Share | Python SDK
---

# Share

This represents what information that is relavent to anything and every sharing related. v1 will look very bare and will add more and more data as we go!  if user is undefined && access is public then we have an asset that is publicly available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** | This is the uuid that represents this share model. | 
**user** | **str** | this is the uuid of the user that the share is created for. | [optional] 
**asset** | [**FlattenedAsset**](FlattenedAsset) |  | [optional] 
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] 
**link** | **str** | This is the prebuilt link. | 
**access** | [**AccessEnum**](AccessEnum) |  | 
**accessors** | [**Accessors**](Accessors) |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**short** | **str** | This is a shortened version of our uuid. | 
**name** | **str** | this is an optional name we can give to the link, ie ?p&#x3D;JAVASCRIPT or what ever the user wants as long as it is available. | [optional] 
**distributions** | [**Distributions**](Distributions) |  | [optional] 
**score** | [**Score**](Score) |  | [optional] 


