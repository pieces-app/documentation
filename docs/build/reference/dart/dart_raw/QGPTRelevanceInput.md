---
title: core_openapi.model.QGPTRelevanceInput | Dart SDK
---

# core_openapi.model.QGPTRelevanceInput

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  | [optional] 
**query** | **String** | This is the question that the user is asking. | 
**paths** | **List<String>** | This is an optional list of file || folder paths. | [optional] [default to const []]
**seeds** | [**Seeds**](Seeds.md) |  | [optional] 
**assets** | [**FlattenedAssets**](FlattenedAssets.md) |  | [optional] 
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages.md) |  | [optional] 
**options** | [**QGPTRelevanceInputOptions**](QGPTRelevanceInputOptions.md) |  | [optional] 
**application** | **String** | optional application id | [optional] 
**model** | **String** | optional model id | [optional] 
**temporal** | [**TemporalRangeGrounding**](TemporalRangeGrounding.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


