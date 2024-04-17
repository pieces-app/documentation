---
title: core_openapi.model.Model | Dart SDK
---

# core_openapi.model.Model

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  | [optional] 
**id** | **String** | uuid  | 
**version** | **String** | this is a version of the model. | 
**created** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**name** | **String** | This is an Optional Name of the Model. | 
**description** | **String** | An Optional Description of the model itself. | [optional] 
**cloud** | **bool** | This will inform the user if this was a model that is hosted in the cloud | 
**type** | [**ModelTypeEnum**](ModelTypeEnum.md) |  | 
**usage** | [**ModelUsageEnum**](ModelUsageEnum.md) |  | 
**bytes** | [**ByteDescriptor**](ByteDescriptor.md) |  | [optional] 
**ram** | [**ByteDescriptor**](ByteDescriptor.md) |  | [optional] 
**quantization** | **String** | quantization is a string like: q8f16_0,  q4f16_1, etc... | [optional] 
**foundation** | [**ModelFoundationEnum**](ModelFoundationEnum.md) |  | [optional] 
**downloaded** | **bool** | This is an optional bool to let us know if this model has been downloaded locally. | [optional] 
**loaded** | **bool** | This is a boolean that represents if the model is loaded into memory.(this is not persisted, and is calculated on the fly.) | [optional] 
**unique** | **String** | This is the unique model name used to load the model. | [optional] 
**parameters** | **num** | This is the number of parameters in terms of billions. | [optional] 
**provider** | [**ExternalMLProviderEnum**](ExternalMLProviderEnum.md) |  | [optional] 
**cpu** | **bool** | This is an optional bool that is optimized for CPU usage. | [optional] 
**downloading** | **bool** | This is a calculated property, that will say if this is currently downloading. | [optional] 
**maxTokens** | [**ModelMaxTokens**](ModelMaxTokens.md) |  | [optional] 
**custom** | **bool** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


