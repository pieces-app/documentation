---
title: Reaction | TypeScript SDK
---


# Reaction

This will the the Request body of the Request Endpoint.  Reuse will not be required here because we do NOT know if the user will choose to reuse what we have suggested.  save will however be required because this will let us know if we should save the coppied asset that was first sent over or not.  seed is required, because we will want to know 100% sure what the original suggestion was made against.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**save** | **boolean**
**reuse** | [**ReuseReaction**](ReuseReaction)
**seed** | [**SeededConnectorCreation**](SeededConnectorCreation)

## Example

```typescript
import { Reaction } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Reaction = {
    "schema": null,
    "save": null,
    "reuse": null,
    "seed": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Reaction
console.log(exampleParsed)
```


