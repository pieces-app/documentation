---
title: Analysis | TypeScript SDK
---


# Analysis

This the the MlAnalysis Object, that will go on a format.  this will hold all the different analysis models!  ** keep format just a uuid for now **

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**code** | [**CodeAnalysis**](CodeAnalysis)
**id** | **string**
**format** | **string**
**image** | [**ImageAnalysis**](ImageAnalysis)

## Example

```typescript
import { Analysis } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Analysis = {
    "schema": null,
    "code": null,
    "id": null,
    "format": null,
    "image": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Analysis
console.log(exampleParsed)
```


