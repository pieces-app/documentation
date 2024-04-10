
# DeletedExternalProvider Model APIKey

This is the returnable for the \"\"/external_provider/api_key/delete\" endpoint

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**metadata** | [**Auth0UserMetadata**](Auth0UserMetadata)

## Example Model

```typescript
import { DeletedExternalProviderApiKey } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: DeletedExternalProviderApiKey = {
    "schema": null,
    "metadata": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeletedExternalProviderApiKey
console.log(exampleParsed)
```


