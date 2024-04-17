---
title: Model | Kotlin SDK
---


# Model

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** | uuid  | 
**version** | **kotlin.String** | this is a version of the model. | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**name** | **kotlin.String** | This is an Optional Name of the Model. | 
**cloud** | **kotlin.Boolean** | This will inform the user if this was a model that is hosted in the cloud | 
**type** | [**ModelTypeEnum**](ModelTypeEnum) |  | 
**usage** | [**ModelUsageEnum**](ModelUsageEnum) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**description** | **kotlin.String** | An Optional Description of the model itself. |  [optional]
**bytes** | [**ByteDescriptor**](ByteDescriptor) |  |  [optional]
**ram** | [**ByteDescriptor**](ByteDescriptor) |  |  [optional]
**quantization** | **kotlin.String** | quantization is a string like: q8f16_0,  q4f16_1, etc... |  [optional]
**foundation** | [**ModelFoundationEnum**](ModelFoundationEnum) |  |  [optional]
**downloaded** | **kotlin.Boolean** | This is an optional bool to let us know if this model has been downloaded locally. |  [optional]
**loaded** | **kotlin.Boolean** | This is a boolean that represents if the model is loaded into memory.(this is not persisted, and is calculated on the fly.) |  [optional]
**unique** | **kotlin.String** | This is the unique model name used to load the model. |  [optional]
**parameters** | **java.math.BigDecimal** | This is the number of parameters in terms of billions. |  [optional]
**provider** | [**ExternalMLProviderEnum**](ExternalMLProviderEnum) |  |  [optional]
**cpu** | **kotlin.Boolean** | This is an optional bool that is optimized for CPU usage. |  [optional]
**downloading** | **kotlin.Boolean** | This is a calculated property, that will say if this is currently downloading. |  [optional]
**maxTokens** | [**ModelMaxTokens**](ModelMaxTokens) |  |  [optional]
**custom** | **kotlin.Boolean** |  |  [optional]



