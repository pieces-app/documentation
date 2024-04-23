---
title: FlattenedShare | TypeScript SDK
---


# FlattenedShare

This is a dag safe version of the Share.  if user is undefined && access is public then we have an asset that is publicly available.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**asset** | **string**
**user** | **string**
**link** | **string**
**access** | [**AccessEnum**](AccessEnum)
**accessors** | [**Accessors**](Accessors)
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**_short** | **string**
**name** | **string**
**assets** | [**FlattenedAssets**](FlattenedAssets)
**distributions** | [**FlattenedDistributions**](FlattenedDistributions)
**score** | [**Score**](Score)


