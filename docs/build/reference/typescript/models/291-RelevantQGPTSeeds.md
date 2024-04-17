---
title: RelevantQGPTSeeds | TypeScript SDK
---


# RelevantQGPTSeeds

This is a plural of RelevantQGPTSeed.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;RelevantQGPTSeed&gt;**](RelevantQGPTSeed)

## Example

```typescript
import { RelevantQGPTSeeds } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: RelevantQGPTSeeds = {
    "schema": null,
    "iterable": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RelevantQGPTSeeds
console.log(exampleParsed)
```


