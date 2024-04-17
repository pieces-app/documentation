---
title: AssetsSearchWithFiltersOutput | TypeScript SDK
---


# AssetsSearchWithFiltersOutput

output for the /assets/search [POST] 

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**results** | [**SearchedAssets**](SearchedAssets)

## Example

```typescript
import { AssetsSearchWithFiltersOutput } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: AssetsSearchWithFiltersOutput = {
    "schema": null,
    "results": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetsSearchWithFiltersOutput
console.log(exampleParsed)
```


