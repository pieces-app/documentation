
# CreatedExternalProvider Model APIKey

This is the outputmodel for /external_provider/api_key/create

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**metadata** | [**Auth0UserMetadata**](Auth0UserMetadata)

## Example Model

```typescript
import { CreatedExternalProviderApiKey } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: CreatedExternalProviderApiKey = {
    "schema": null,
    "metadata": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatedExternalProviderApiKey
console.log(exampleParsed)
```


