
# SeededModel Model

This is Precursor to a Model.  bytes: here is the size of the model in a file local on your computer. ram: is the amount of ram usage when the model is loaded into memory.

## Properties Model

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

## Example Model

```typescript
import { SeededModel } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededModel = {
    "schema": null,
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
    "unique": null,
    "parameters": null,
    "provider": null,
    "cpu": null,
    "maxTokens": null,
    "custom": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededModel
console.log(exampleParsed)
```


