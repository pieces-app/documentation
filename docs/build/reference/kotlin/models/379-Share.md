---
title: Share | Kotlin SDK
---


# Share

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** | This is the uuid that represents this share model. | 
**link** | **kotlin.String** | This is the prebuilt link. | 
**access** | [**AccessEnum**](AccessEnum) |  | 
**accessors** | [**Accessors**](Accessors) |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**short** | **kotlin.String** | This is a shortened version of our uuid. | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**user** | **kotlin.String** | this is the uuid of the user that the share is created for. |  [optional]
**asset** | [**FlattenedAsset**](FlattenedAsset) |  |  [optional]
**assets** | [**FlattenedAssets**](FlattenedAssets) |  |  [optional]
**name** | **kotlin.String** | this is an optional name we can give to the link, ie ?p&#x3D;JAVASCRIPT or what ever the user wants as long as it is available. |  [optional]
**distributions** | [**Distributions**](Distributions) |  |  [optional]
**score** | [**Score**](Score) |  |  [optional]



