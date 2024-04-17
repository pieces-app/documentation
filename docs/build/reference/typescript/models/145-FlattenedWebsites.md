---
title: FlattenedWebsites | TypeScript SDK
---


# FlattenedWebsites

This is a specific model for related websites to an asset.[DAG SAFE]

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;ReferencedWebsite&gt;**](ReferencedWebsite)
**indices** | **\{ [key: string]: number; \}**
**score** | [**Score**](Score)

## Example

```typescript
import { FlattenedWebsites } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FlattenedWebsites = {
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
const exampleParsed = JSON.parse(exampleJSON) as FlattenedWebsites
console.log(exampleParsed)
```


