---
title: FlattenedAnchorPoint | TypeScript SDK
---


# FlattenedAnchorPoint


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**verified** | **boolean**
**fullpath** | **string**
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**platform** | [**PlatformEnum**](PlatformEnum)
**anchor** | [**ReferencedAnchor**](ReferencedAnchor)
**score** | [**Score**](Score)

## Example

```typescript
import { FlattenedAnchorPoint } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FlattenedAnchorPoint = {
    "schema": null,
    "id": null,
    "verified": null,
    "fullpath": null,
    "created": null,
    "updated": null,
    "deleted": null,
    "platform": null,
    "anchor": null,
    "score": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedAnchorPoint
console.log(exampleParsed)
```


