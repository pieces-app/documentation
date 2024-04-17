---
title: Seed | TypeScript SDK
---


# Seed

A seed Model used to wrap a format or asset

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**asset** | [**SeededAsset**](SeededAsset)
**type** | **string**

## Example

```typescript
import { Seed } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Seed = {
    "schema": null,
    "asset": null,
    "type": SEEDED_ASSET,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Seed
console.log(exampleParsed)
```


