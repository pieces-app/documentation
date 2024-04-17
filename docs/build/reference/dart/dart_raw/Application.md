---
title: core_openapi.model.Application | Dart SDK
---

# core_openapi.model.Application

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  | [optional] 
**id** | **String** | The ID of the application at the device level | 
**name** | [**ApplicationNameEnum**](ApplicationNameEnum.md) |  | 
**version** | **String** | This is the specific version number 0.0.0 | 
**platform** | [**PlatformEnum**](PlatformEnum.md) |  | 
**onboarded** | **bool** |  | 
**privacy** | [**PrivacyEnum**](PrivacyEnum.md) |  | 
**capabilities** | [**CapabilitiesEnum**](CapabilitiesEnum.md) |  | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum.md) |  | [optional] 
**automaticUnload** | **bool** | This is a proper that will let us know if we will proactivity unload all of your machine learning models.by default this is false. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


