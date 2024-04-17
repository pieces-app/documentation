---
title: FlattenedShares | TypeScript SDK
---


# FlattenedShares

This is just an iterable of our individual share models.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;FlattenedShare&gt;**](FlattenedShare)
**score** | [**Score**](Score)

## Example

```typescript
import { FlattenedShares } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FlattenedShares = {
    "schema": null,
    "iterable": null,
    "score": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedShares
console.log(exampleParsed)
```


