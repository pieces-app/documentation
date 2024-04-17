---
title: TLPCodeFragmentSuggestedSave | TypeScript SDK
---


# TLPCodeFragmentSuggestedSave

Model for monitoring and evaluating the suggested save feature

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**asset** | **string**
**user** | **string**
**model** | **string**
**created** | **string**
**os** | **string**
**context** | **string**
**score** | **number**
**candidates** | **number**

## Example

```typescript
import { TLPCodeFragmentSuggestedSave } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TLPCodeFragmentSuggestedSave = {
    "schema": null,
    "asset": null,
    "user": null,
    "model": null,
    "created": null,
    "os": null,
    "context": null,
    "score": null,
    "candidates": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TLPCodeFragmentSuggestedSave
console.log(exampleParsed)
```


