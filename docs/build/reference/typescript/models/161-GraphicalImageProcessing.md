---
title: GraphicalImageProcessing | TypeScript SDK
---


# GraphicalImageProcessing


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**statistics** | [**GraphicalImageStatistics**](GraphicalImageStatistics)

## Example

```typescript
import { GraphicalImageProcessing } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: GraphicalImageProcessing = {
    "schema": null,
    "statistics": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GraphicalImageProcessing
console.log(exampleParsed)
```


