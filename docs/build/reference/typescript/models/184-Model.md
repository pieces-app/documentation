---
title: Model | TypeScript SDK
---


# Model

This is a Machine Learning Model, that will give readable information about the Machine Learning Model Used.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**version** | **string**
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**name** | **string**
**description** | **string**
**cloud** | **boolean**
**type** | [**ModelTypeEnum**](ModelTypeEnum)
**usage** | [**ModelUsageEnum**](ModelUsageEnum)
**bytes** | [**ByteDescriptor**](ByteDescriptor)
**ram** | [**ByteDescriptor**](ByteDescriptor)
**quantization** | **string**
**foundation** | [**ModelFoundationEnum**](ModelFoundationEnum)
**downloaded** | **boolean**
**loaded** | **boolean**
**unique** | **string**
**parameters** | **number**
**provider** | [**ExternalMLProviderEnum**](ExternalMLProviderEnum)
**cpu** | **boolean**
**downloading** | **boolean**
**maxTokens** | [**ModelMaxTokens**](ModelMaxTokens)
**custom** | **boolean**


