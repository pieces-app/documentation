---
title: PrecreatedExternalProvider APIKey | TypeScript SDK
---


# PrecreatedExternalProvider APIKey

This is the input model for /external_provider/api_key/create

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**user** | **string**
**openAI** | [**Auth0OpenAIUserMetadata**](Auth0OpenAIUserMetadata)

## Example

```typescript
import { PrecreatedExternalProvider APIKey } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: PrecreatedExternalProvider APIKey = {
    "schema": null,
    "user": null,
    "openAI": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PrecreatedExternalProvider APIKey
console.log(exampleParsed)
```


