
# Application

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** | The ID of the application at the device level | 
**name** | [**ApplicationNameEnum**](ApplicationNameEnum.md) |  | 
**version** | **kotlin.String** | This is the specific version number 0.0.0 | 
**platform** | [**PlatformEnum**](PlatformEnum.md) |  | 
**onboarded** | **kotlin.Boolean** |  | 
**privacy** | [**PrivacyEnum**](PrivacyEnum.md) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  |  [optional]
**capabilities** | [**CapabilitiesEnum**](CapabilitiesEnum.md) |  |  [optional]
**mechanism** | [**MechanismEnum**](MechanismEnum.md) |  |  [optional]
**automaticUnload** | **kotlin.Boolean** | This is a proper that will let us know if we will proactivity unload all of your machine learning models.by default this is false. |  [optional]



