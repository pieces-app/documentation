---
title: FlattenedOCRAnalysis | TypeScript SDK
---


# FlattenedOCRAnalysis

[DAG Safe] Ocr Analysis that will reference FlattenedFormats.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**raw** | [**ReferencedFormat**](ReferencedFormat)
**hocr** | [**ReferencedFormat**](ReferencedFormat)
**model** | [**Model**](Model)
**image** | **string**

## Example

```typescript
import { FlattenedOCRAnalysis } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FlattenedOCRAnalysis = {
    "schema": null,
    "id": null,
    "raw": null,
    "hocr": null,
    "model": null,
    "image": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedOCRAnalysis
console.log(exampleParsed)
```


