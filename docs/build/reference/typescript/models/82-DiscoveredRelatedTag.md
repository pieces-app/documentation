---
title: DiscoveredRelatedTag | TypeScript SDK
---


# DiscoveredRelatedTag


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**seed** | [**SeededTag**](SeededTag)

## Example

```typescript
import { DiscoveredRelatedTag } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: DiscoveredRelatedTag = {
    "schema": null,
    "seed": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiscoveredRelatedTag
console.log(exampleParsed)
```


