---
title: Application | Dart SDK
---

# Application

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **String** | The ID of the application at the device level | 
**name** | [**ApplicationNameEnum**](ApplicationNameEnum) |  | 
**version** | **String** | This is the specific version number 0.0.0 | 
**platform** | [**PlatformEnum**](PlatformEnum) |  | 
**onboarded** | **bool** |  | 
**privacy** | [**PrivacyEnum**](PrivacyEnum) |  | 
**capabilities** | [**CapabilitiesEnum**](CapabilitiesEnum) |  | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] 
**automaticUnload** | **bool** | This is a proper that will let us know if we will proactivity unload all of your machine learning models.by default this is false. | [optional] 


