---
title: FlattenedAnalysis | TypeScript SDK
---


# FlattenedAnalysis


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**code** | [**CodeAnalysis**](CodeAnalysis)
**id** | **string**
**format** | **string**
**image** | [**FlattenedImageAnalysis**](FlattenedImageAnalysis)

## Example

```typescript
import { FlattenedAnalysis } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FlattenedAnalysis = {
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
const exampleParsed = JSON.parse(exampleJSON) as FlattenedAnalysis
console.log(exampleParsed)
```


