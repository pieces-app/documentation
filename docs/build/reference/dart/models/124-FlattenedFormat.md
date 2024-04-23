---
title: FlattenedFormat | Dart SDK
---

# FlattenedFormat

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **String** |  | 
**creator** | **String** |  | 
**classification** | [**Classification**](Classification) |  | 
**icon** | **String** |  | [optional] 
**role** | [**Role**](Role) |  | 
**application** | [**Application**](Application) |  | 
**asset** | **String** | A uuid model. 36 Characters (4 Dashes, 32 Numbers/Letters)  | 
**bytes** | [**ByteDescriptor**](ByteDescriptor) |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**synced** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**cloud** | **String** | This is a path used to determine what path this format lives at within the cloud. | [optional] 
**fragment** | [**FragmentFormat**](FragmentFormat) |  | [optional] 
**file** | [**FileFormat**](FileFormat) |  | [optional] 
**analysis** | [**FlattenedAnalysis**](FlattenedAnalysis) |  | [optional] 
**relationship** | [**Relationship**](Relationship) |  | [optional] 
**activities** | [**FlattenedActivities**](FlattenedActivities) |  | [optional] 


