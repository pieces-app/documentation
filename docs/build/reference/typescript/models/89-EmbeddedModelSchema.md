---
title: EmbeddedModelSchema | TypeScript SDK
---


# EmbeddedModelSchema

This is a model that will keep track of all of our version related to our models. ie (1) the database migration and (2) the global semantic version of the api.

## Properties

Name | Type
------------ | -------------
**migration** | **number**
**semantic** | [**EmbeddedModelSchemaSemanticVersionEnum**](EmbeddedModelSchemaSemanticVersionEnum)

## Example

```typescript
import { EmbeddedModelSchema } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: EmbeddedModelSchema = {
    "migration": null,
    "semantic": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmbeddedModelSchema
console.log(exampleParsed)
```


