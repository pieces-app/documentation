---
title: Share | TypeScript SDK
---


# Share

This represents what information that is relavent to anything and every sharing related. v1 will look very bare and will add more and more data as we go!  if user is undefined && access is public then we have an asset that is publicly available.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**user** | **string**
**asset** | [**FlattenedAsset**](FlattenedAsset)
**assets** | [**FlattenedAssets**](FlattenedAssets)
**link** | **string**
**access** | [**AccessEnum**](AccessEnum)
**accessors** | [**Accessors**](Accessors)
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**_short** | **string**
**name** | **string**
**distributions** | [**Distributions**](Distributions)
**score** | [**Score**](Score)


