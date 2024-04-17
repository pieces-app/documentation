---
title: FlattenedShare | Kotlin SDK
---


# FlattenedShare

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** | This references the share it self. | 
**link** | **kotlin.String** | this is the prebuilt link. | 
**access** | [**AccessEnum**](AccessEnum) |  | 
**accessors** | [**Accessors**](Accessors) |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**short** | **kotlin.String** | This is a shortened version of our uuid. | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**asset** | **kotlin.String** | this is the asset id on the flattened share. |  [optional]
**user** | **kotlin.String** | this is the uuid of the user that the share is created for. |  [optional]
**name** | **kotlin.String** |  |  [optional]
**assets** | [**FlattenedAssets**](FlattenedAssets) |  |  [optional]
**distributions** | [**FlattenedDistributions**](FlattenedDistributions) |  |  [optional]
**score** | [**Score**](Score) |  |  [optional]



