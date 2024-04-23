---
title: FlattenedSensitive | TypeScript SDK
---


# FlattenedSensitive

This is a dereferenced representation of a sensitive pieces of data.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**asset** | [**ReferencedAsset**](ReferencedAsset)
**text** | **string**
**mechanism** | [**MechanismEnum**](MechanismEnum)
**category** | [**SensitiveCategoryEnum**](SensitiveCategoryEnum)
**severity** | [**SensitiveSeverityEnum**](SensitiveSeverityEnum)
**name** | **string**
**description** | **string**
**metadata** | [**SensitiveMetadata**](SensitiveMetadata)
**interactions** | **number**
**score** | [**Score**](Score)


