---
title: CodeAnalysis | TypeScript SDK
---


# CodeAnalysis

This is the ML Analysis object Specific to code.  prediction and similarity are custom types. ** please dont not modify **

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**tokenized** | **Array&lt;string&gt;**
**language** | **string**
**type** | [**ClassificationGenericEnum**](ClassificationGenericEnum)
**prediction** | **\{ [key: string]: number; \}**
**similarity** | **\{ [key: string]: number; \}**
**top5Colors** | **Array&lt;number&gt;**
**top5Sorted** | **Array&lt;string&gt;**
**id** | **string**
**analysis** | **string**
**model** | [**Model**](Model)

## Example

```typescript
import { CodeAnalysis } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: CodeAnalysis = {
    "schema": null,
    "tokenized": null,
    "language": null,
    "type": null,
    "prediction": null,
    "similarity": null,
    "top5Colors": null,
    "top5Sorted": null,
    "id": null,
    "analysis": null,
    "model": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CodeAnalysis
console.log(exampleParsed)
```


