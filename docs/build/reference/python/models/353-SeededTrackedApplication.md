---
title: SeededTrackedApplication | Python SDK
---

# SeededTrackedApplication

A Model to describe what application a format/analytics event originated - Specifically NOT requiring an ID

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**name** | [**ApplicationNameEnum**](ApplicationNameEnum) |  | 
**version** | **str** | This is the specific version number 0.0.0 | 
**platform** | [**PlatformEnum**](PlatformEnum) |  | 
**capabilities** | [**CapabilitiesEnum**](CapabilitiesEnum) |  | [optional] 
**privacy** | [**PrivacyEnum**](PrivacyEnum) |  | [optional] 
**automatic_unload** | **bool** | This is a proper that will let us know if we will proactivity unload all of your machine learning models.by default this is false. | [optional] 


