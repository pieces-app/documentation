---
title: core_openapi.model.Asset | Dart SDK
---

# core_openapi.model.Asset

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
**formats** | [**Formats**](Formats.md) |  | 
**preview** | [**Preview**](Preview.md) |  | 
**original** | [**ReferencedFormat**](ReferencedFormat.md) |  | 
**shares** | [**Shares**](Shares.md) |  | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum.md) |  | 
**websites** | [**Websites**](Websites.md) |  | [optional] 
**interacted** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | [optional] 
**tags** | [**Tags**](Tags.md) |  | [optional] 
**sensitives** | [**Sensitives**](Sensitives.md) |  | [optional] 
**persons** | [**Persons**](Persons.md) |  | [optional] 
**curated** | **bool** | This is an optional boolean that will flag that this asset came from a currated collection. | [optional] 
**discovered** | **bool** |  | [optional] 
**activities** | [**Activities**](Activities.md) |  | [optional] 
**score** | [**Score**](Score.md) |  | [optional] 
**favorited** | **bool** |  | [optional] 
**pseudo** | **bool** | This will determine if this is a asset that the user did not explicitly save. | [optional] 
**annotations** | [**Annotations**](Annotations.md) |  | [optional] 
**hints** | [**Hints**](Hints.md) |  | [optional] 
**anchors** | [**Anchors**](Anchors.md) |  | [optional] 
**conversations** | [**Conversations**](Conversations.md) |  | [optional] 
**summaries** | [**WorkstreamSummaries**](WorkstreamSummaries.md) |  | [optional] 
**demo** | **bool** | This will let us know if this asset was generated as a 'demo' snippet | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


