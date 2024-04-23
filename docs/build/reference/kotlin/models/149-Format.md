---
title: Format | Kotlin SDK
---



# Format

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** |  | 
**creator** | **kotlin.String** |  | 
**classification** | [**Classification**](Classification) |  | 
**role** | [**Role**](Role) |  | 
**application** | [**Application**](Application) |  | 
**asset** | [**FlattenedAsset**](FlattenedAsset) |  | 
**bytes** | [**ByteDescriptor**](ByteDescriptor) |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**icon** | **kotlin.String** |  |  [optional]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  |  [optional]
**synced** | [**GroupedTimestamp**](GroupedTimestamp) |  |  [optional]
**cloud** | **kotlin.String** | This is a path used to determine what path this format lives at within the cloud. |  [optional]
**fragment** | [**FragmentFormat**](FragmentFormat) |  |  [optional]
**file** | [**FileFormat**](FileFormat) |  |  [optional]
**analysis** | [**Analysis**](Analysis) |  |  [optional]
**relationship** | [**Relationship**](Relationship) |  |  [optional]
**activities** | [**Activities**](Activities) |  |  [optional]




