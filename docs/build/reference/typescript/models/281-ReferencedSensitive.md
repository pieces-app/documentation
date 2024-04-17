---
title: ReferencedSensitive | TypeScript SDK
---


# ReferencedSensitive

A reference to a sensitive which at minimum must have the Sensitive id. But in the case of a hydrated client API it may have a populated reference of type Sensitive.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**reference** | [**FlattenedSensitive**](FlattenedSensitive)

## Example

```typescript
import { ReferencedSensitive } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ReferencedSensitive = {
    "schema": null,
    "id": null,
    "reference": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedSensitive
console.log(exampleParsed)
```


