---
title: ModelDeleteCacheInput | TypeScript SDK
---


# ModelDeleteCacheInput

This is the input model for \'/model/\{model\}/delete/cache\'

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)

## Example

```typescript
import { ModelDeleteCacheInput } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ModelDeleteCacheInput = {
    "schema": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelDeleteCacheInput
console.log(exampleParsed)
```


