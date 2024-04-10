
# Auth0OpenAIUserMetadata Model

Only supporting a single api key per user.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**apiKey** | **string**
**apiKeyName** | **string**
**organizationKey** | **string**

## Example Model

```typescript
import { Auth0OpenAIUserMetadata } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Auth0OpenAIUserMetadata = {
    "schema": null,
    "apiKey": null,
    "apiKeyName": null,
    "organizationKey": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Auth0OpenAIUserMetadata
console.log(exampleParsed)
```


