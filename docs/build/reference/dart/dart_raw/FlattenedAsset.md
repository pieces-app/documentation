---
title: core_openapi.model.FlattenedAsset | Dart SDK
---

# core_openapi.model.FlattenedAsset

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  | [optional] 
**id** | **String** | The globally available UID representing the asset in the Database, both locally and in the cloud. | 
**name** | **String** |  | [optional] 
**creator** | **String** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**synced** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | [optional] 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | [optional] 
**formats** | [**FlattenedFormats**](FlattenedFormats.md) |  | 
**preview** | [**FlattenedPreview**](FlattenedPreview.md) |  | 
**original** | **String** | An identifier of the format that is a reference to the original. | 
**shares** | [**FlattenedShares**](FlattenedShares.md) |  | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum.md) |  | 
**websites** | [**FlattenedWebsites**](FlattenedWebsites.md) |  | [optional] 
**interacted** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | [optional] 
**tags** | [**FlattenedTags**](FlattenedTags.md) |  | [optional] 
**sensitives** | [**FlattenedSensitives**](FlattenedSensitives.md) |  | [optional] 
**persons** | [**FlattenedPersons**](FlattenedPersons.md) |  | [optional] 
**curated** | **bool** | This is an optional boolean that will flag that this asset came from a currated collection. | [optional] 
**discovered** | **bool** |  | [optional] 
**activities** | [**FlattenedActivities**](FlattenedActivities.md) |  | [optional] 
**score** | [**Score**](Score.md) |  | [optional] 
**favorited** | **bool** |  | [optional] 
**pseudo** | **bool** |  | [optional] 
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations.md) |  | [optional] 
**hints** | [**FlattenedHints**](FlattenedHints.md) |  | [optional] 
**anchors** | [**FlattenedAnchors**](FlattenedAnchors.md) |  | [optional] 
**conversations** | [**FlattenedConversations**](FlattenedConversations.md) |  | [optional] 
**demo** | **bool** | This will let us know if this asset was generated as a 'demo' snippet | [optional] 
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


