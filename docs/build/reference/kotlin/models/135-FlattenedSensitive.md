---
title: FlattenedSensitive | Kotlin SDK
---


# FlattenedSensitive

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**asset** | [**ReferencedAsset**](ReferencedAsset) |  | 
**text** | **kotlin.String** |  | 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | 
**category** | [**SensitiveCategoryEnum**](SensitiveCategoryEnum) |  | 
**severity** | [**SensitiveSeverityEnum**](SensitiveSeverityEnum) |  | 
**name** | **kotlin.String** |  | 
**description** | **kotlin.String** |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  |  [optional]
**metadata** | [**SensitiveMetadata**](SensitiveMetadata) |  |  [optional]
**interactions** | **kotlin.Int** | This is an optional value that will keep track of the number of times this has been interacted with. |  [optional]
**score** | [**Score**](Score) |  |  [optional]



