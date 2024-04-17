---
title: AnchorPoints | TypeScript SDK
---


# AnchorPoints

This is the plural of AnchorPoint.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;AnchorPoint&gt;**](AnchorPoint)
**indices** | **\{ [key: string]: number; \}**
**score** | [**Score**](Score)

## Example

```typescript
import { AnchorPoints } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: AnchorPoints = {
    "schema": null,
    "iterable": null,
    "indices": null,
    "score": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnchorPoints
console.log(exampleParsed)
```


