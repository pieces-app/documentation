---
title: core_openapi.model.FlattenedPerson | Dart SDK
---

# core_openapi.model.FlattenedPerson

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  | [optional] 
**id** | **String** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | [optional] 
**type** | [**PersonType**](PersonType.md) |  | 
**assets** | [**FlattenedAssets**](FlattenedAssets.md) |  | [optional] 
**mechanisms** | [**Map<String, MechanismEnum>**](MechanismEnum.md) | This is a Map<String, MechanismEnum> where the the key is an asset id. | [optional] [default to const {}]
**interactions** | **int** | This is an optional value that will keep track of the number of times this has been interacted with. | [optional] 
**access** | [**Map<String, PersonAccess>**](PersonAccess.md) | This is a Map<String, PersonAccess> where the the key is an asset id. | [optional] [default to const {}]
**tags** | [**FlattenedTags**](FlattenedTags.md) |  | [optional] 
**websites** | [**FlattenedWebsites**](FlattenedWebsites.md) |  | [optional] 
**models** | [**Map<String, PersonModel>**](PersonModel.md) | This is a Map<String, PersonModel>, where the the key is an asset id. | [optional] [default to const {}]
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations.md) |  | [optional] 
**score** | [**Score**](Score.md) |  | [optional] 
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


