---
title: PreupdatedExternalProvider APIKey | TypeScript SDK
---


# PreupdatedExternalProvider APIKey

This is the endput model for \"/external_provider/api_key/update\". everything but the uder will be optional, anything that is defined will get an update.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**user** | **string**
**openAI** | [**Auth0OpenAIUserMetadata**](Auth0OpenAIUserMetadata)

## Example

```typescript
import { PreupdatedExternalProvider APIKey } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: PreupdatedExternalProvider APIKey = {
    "schema": null,
    "user": null,
    "openAI": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PreupdatedExternalProvider APIKey
console.log(exampleParsed)
```


