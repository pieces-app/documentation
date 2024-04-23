---
title: Application | TypeScript SDK
---


# Application

A Model to describe what application a format/analytics event originated.  mechanism: This will let us know where this came from. ie.only 2 enums are used here or else throw and error. default mechanism here is MANUAL- meaning that this came from our user Connecting an application. INTERNAL - means that this came from a shareable link

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**name** | [**ApplicationNameEnum**](ApplicationNameEnum)
**version** | **string**
**platform** | [**PlatformEnum**](PlatformEnum)
**onboarded** | **boolean**
**privacy** | [**PrivacyEnum**](PrivacyEnum)
**capabilities** | [**CapabilitiesEnum**](CapabilitiesEnum)
**mechanism** | [**MechanismEnum**](MechanismEnum)
**automaticUnload** | **boolean**


