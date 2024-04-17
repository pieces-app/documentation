---
title: core_openapi.model.CodeAnalysis | Dart SDK
---

# core_openapi.model.CodeAnalysis

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  | [optional] 
**tokenized** | **List<String>** |  | [optional] [default to const []]
**language** | **String** |  | [optional] 
**type** | [**ClassificationGenericEnum**](ClassificationGenericEnum.md) |  | 
**prediction** | **Map<String, num>** |  | [optional] [default to const {}]
**similarity** | **Map<String, num>** |  | [optional] [default to const {}]
**top5Colors** | **List<int>** |  | [optional] [default to const []]
**top5Sorted** | **List<String>** |  | [optional] [default to const []]
**id** | **String** |  | 
**analysis** | **String** | this is just a reference to the analysis parent object. | 
**model** | [**Model**](Model.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


