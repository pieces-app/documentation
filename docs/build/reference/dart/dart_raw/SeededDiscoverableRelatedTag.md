---
title: core_openapi.model.SeededDiscoverableRelatedTag | Dart SDK
---

# core_openapi.model.SeededDiscoverableRelatedTag

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  | [optional] 
**text** | **String** | This is the description of the tag. | 
**asset** | **String** | this is a uuid that references an asset. | 
**mechanism** | [**MechanismEnum**](MechanismEnum.md) |  | [optional] 
**format** | **String** | (optionally) you can attach a tag to a format. so when you delete a format this tag will get removed from the asset as well. | [optional] 
**category** | [**TagCategoryEnum**](TagCategoryEnum.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


