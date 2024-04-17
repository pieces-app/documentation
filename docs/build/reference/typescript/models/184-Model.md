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

## Example

```typescript
import { Model } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Model = {
    "schema": null,
    "id": null,
    "version": null,
    "created": null,
    "name": null,
    "description": null,
    "cloud": null,
    "type": null,
    "usage": null,
    "bytes": null,
    "ram": null,
    "quantization": null,
    "foundation": null,
    "downloaded": null,
    "loaded": null,
    "unique": null,
    "parameters": null,
    "provider": null,
    "cpu": null,
    "downloading": null,
    "maxTokens": null,
    "custom": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Model
console.log(exampleParsed)
```


