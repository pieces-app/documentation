---
title: FlattenedFormat | Kotlin SDK
---


# FlattenedFormat

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** |  | 
**creator** | **kotlin.String** |  | 
**classification** | [**Classification**](Classification) |  | 
**role** | [**Role**](Role) |  | 
**application** | [**Application**](Application) |  | 
**asset** | **java.util.UUID** | A uuid model. 36 Characters (4 Dashes, 32 Numbers/Letters)  | 
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
**analysis** | [**FlattenedAnalysis**](FlattenedAnalysis) |  |  [optional]
**relationship** | [**Relationship**](Relationship) |  |  [optional]
**activities** | [**FlattenedActivities**](FlattenedActivities) |  |  [optional]



