---
title: core_openapi.model.QGPTQuestionInput | Dart SDK
---

# core_openapi.model.QGPTQuestionInput

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  | [optional] 
**relevant** | [**RelevantQGPTSeeds**](RelevantQGPTSeeds.md) |  | 
**query** | **String** | This is the user asked question. | 
**application** | **String** | optional application id | [optional] 
**model** | **String** | optional model id | [optional] 
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages.md) |  | [optional] 
**pipeline** | [**QGPTPromptPipeline**](QGPTPromptPipeline.md) |  | [optional] 
**temporal** | [**TemporalRangeGrounding**](TemporalRangeGrounding.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


