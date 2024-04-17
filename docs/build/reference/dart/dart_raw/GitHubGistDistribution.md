---
title: core_openapi.model.GitHubGistDistribution | Dart SDK
---

# core_openapi.model.GitHubGistDistribution

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  | [optional] 
**recipients** | [**Recipients**](Recipients.md) |  | 
**public** | **bool** | This will let us know if the gist is public or private. | 
**description** | **String** | This is the description of the Gist Distribution | [optional] 
**name** | **String** | This is the name of the gist you will add. | 
**created** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | [optional] 
**githubId** | **String** | This is the id that github uses to represent the gist. | 
**url** | **String** | This is the url where the gist is. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


