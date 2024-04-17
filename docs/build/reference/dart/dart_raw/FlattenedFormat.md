---
title: core_openapi.model.FlattenedFormat | Dart SDK
---

# core_openapi.model.FlattenedFormat

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  | [optional] 
**id** | **String** |  | 
**creator** | **String** |  | 
**classification** | [**Classification**](Classification.md) |  | 
**icon** | **String** |  | [optional] 
**role** | [**Role**](Role.md) |  | 
**application** | [**Application**](Application.md) |  | 
**asset** | **String** | A uuid model. 36 Characters (4 Dashes, 32 Numbers/Letters)  | 
**bytes** | [**ByteDescriptor**](ByteDescriptor.md) |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | [optional] 
**synced** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | [optional] 
**cloud** | **String** | This is a path used to determine what path this format lives at within the cloud. | [optional] 
**fragment** | [**FragmentFormat**](FragmentFormat.md) |  | [optional] 
**file** | [**FileFormat**](FileFormat.md) |  | [optional] 
**analysis** | [**FlattenedAnalysis**](FlattenedAnalysis.md) |  | [optional] 
**relationship** | [**Relationship**](Relationship.md) |  | [optional] 
**activities** | [**FlattenedActivities**](FlattenedActivities.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


