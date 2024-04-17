---
title: Application | Kotlin SDK
---


# Application

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** | The ID of the application at the device level | 
**name** | [**ApplicationNameEnum**](ApplicationNameEnum) |  | 
**version** | **kotlin.String** | This is the specific version number 0.0.0 | 
**platform** | [**PlatformEnum**](PlatformEnum) |  | 
**onboarded** | **kotlin.Boolean** |  | 
**privacy** | [**PrivacyEnum**](PrivacyEnum) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**capabilities** | [**CapabilitiesEnum**](CapabilitiesEnum) |  |  [optional]
**mechanism** | [**MechanismEnum**](MechanismEnum) |  |  [optional]
**automaticUnload** | **kotlin.Boolean** | This is a proper that will let us know if we will proactivity unload all of your machine learning models.by default this is false. |  [optional]



