---
title: OSHealth | TypeScript SDK
---


# OSHealth

This is a specific model for the health of our OS Server.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**version** | **string**

## Example

```typescript
import { OSHealth } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: OSHealth = {
    "schema": null,
    "id": null,
    "version": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OSHealth
console.log(exampleParsed)
```


