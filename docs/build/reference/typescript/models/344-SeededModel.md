---
title: SeededModel | TypeScript SDK
---


# SeededModel

This is Precursor to a Model.  bytes: here is the size of the model in a file local on your computer. ram: is the amount of ram usage when the model is loaded into memory.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
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
**unique** | **string**
**parameters** | **number**
**provider** | [**ExternalMLProviderEnum**](ExternalMLProviderEnum)
**cpu** | **boolean**
**maxTokens** | [**ModelMaxTokens**](ModelMaxTokens)
**custom** | **boolean**


