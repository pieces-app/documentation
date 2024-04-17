---
title: Embedding | TypeScript SDK
---


# Embedding



## Properties

Name | Type
------------ | -------------
**raw** | **Array&lt;number&gt;**
**model** | [**Model**](Model)
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)

## Example

```typescript
import { Embedding } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Embedding = {
    "raw": null,
    "model": null,
    "created": null,
    "updated": null,
    "deleted": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Embedding
console.log(exampleParsed)
```


