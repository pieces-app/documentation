---
title: OCRAnalysis | TypeScript SDK
---


# OCRAnalysis

This is the data collected during the ocr analysis of an image.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**raw** | [**Format**](Format)
**hocr** | [**Format**](Format)
**image** | **string**
**model** | [**Model**](Model)

## Example

```typescript
import { OCRAnalysis } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: OCRAnalysis = {
    "schema": null,
    "id": null,
    "raw": null,
    "hocr": null,
    "image": null,
    "model": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OCRAnalysis
console.log(exampleParsed)
```


