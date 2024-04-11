
# Auth0UserMetadata Model

User Metadata from Auth0

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**globalId** | **string**
**cloudKey** | **string**
**stripeCustomerId** | **string**
**vanityname** | **string**
**allocation** | [**Auth0UserAllocationMetadata**](Auth0UserAllocationMetadata)
**openAI** | [**Auth0OpenAIUserMetadata**](Auth0OpenAIUserMetadata)
**beta** | [**AnonymousTemporalRange**](AnonymousTemporalRange)

## Example Model

```typescript
import { Auth0UserMetadata } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Auth0UserMetadata = {
    "schema": null,
    "globalId": null,
    "cloudKey": null,
    "stripeCustomerId": null,
    "vanityname": null,
    "allocation": null,
    "openAI": null,
    "beta": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Auth0UserMetadata
console.log(exampleParsed)
```


