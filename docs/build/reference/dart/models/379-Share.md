---
title: Share | Dart SDK
---

# Share

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **String** | This is the uuid that represents this share model. | 
**user** | **String** | this is the uuid of the user that the share is created for. | [optional] 
**asset** | [**FlattenedAsset**](FlattenedAsset) |  | [optional] 
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] 
**link** | **String** | This is the prebuilt link. | 
**access** | [**AccessEnum**](AccessEnum) |  | 
**accessors** | [**Accessors**](Accessors) |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**short** | **String** | This is a shortened version of our uuid. | 
**name** | **String** | this is an optional name we can give to the link, ie ?p=JAVASCRIPT or what ever the user wants as long as it is available. | [optional] 
**distributions** | [**Distributions**](Distributions) |  | [optional] 
**score** | [**Score**](Score) |  | [optional] 




