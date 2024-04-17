---
title: core_openapi.model.FlattenedShare | Dart SDK
---

# core_openapi.model.FlattenedShare

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  | [optional] 
**id** | **String** | This references the share it self. | 
**asset** | **String** | this is the asset id on the flattened share. | [optional] 
**user** | **String** | this is the uuid of the user that the share is created for. | [optional] 
**link** | **String** | this is the prebuilt link. | 
**access** | [**AccessEnum**](AccessEnum.md) |  | 
**accessors** | [**Accessors**](Accessors.md) |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**short** | **String** | This is a shortened version of our uuid. | 
**name** | **String** |  | [optional] 
**assets** | [**FlattenedAssets**](FlattenedAssets.md) |  | [optional] 
**distributions** | [**FlattenedDistributions**](FlattenedDistributions.md) |  | [optional] 
**score** | [**Score**](Score.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


