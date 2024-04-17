---
title: core_openapi.model.Share | Dart SDK
---

# core_openapi.model.Share

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  | [optional] 
**id** | **String** | This is the uuid that represents this share model. | 
**user** | **String** | this is the uuid of the user that the share is created for. | [optional] 
**asset** | [**FlattenedAsset**](FlattenedAsset.md) |  | [optional] 
**assets** | [**FlattenedAssets**](FlattenedAssets.md) |  | [optional] 
**link** | **String** | This is the prebuilt link. | 
**access** | [**AccessEnum**](AccessEnum.md) |  | 
**accessors** | [**Accessors**](Accessors.md) |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**short** | **String** | This is a shortened version of our uuid. | 
**name** | **String** | this is an optional name we can give to the link, ie ?p=JAVASCRIPT or what ever the user wants as long as it is available. | [optional] 
**distributions** | [**Distributions**](Distributions.md) |  | [optional] 
**score** | [**Score**](Score.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


