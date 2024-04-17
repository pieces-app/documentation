---
title: SensitiveMetadata | TypeScript SDK
---


# SensitiveMetadata

This is optional metatdata attached to a sensitive piece of data.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**match** | [**TextMatch**](TextMatch)
**entropy** | **number**

## Example

```typescript
import { SensitiveMetadata } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SensitiveMetadata = {
    "schema": null,
    "match": null,
    "entropy": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SensitiveMetadata
console.log(exampleParsed)
```


