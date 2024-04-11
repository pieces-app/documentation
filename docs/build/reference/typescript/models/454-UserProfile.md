
# UserProfile

This is the model for a user logged into Pieces.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**picture** | **string**
**email** | **string**
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**username** | **string**
**id** | **string**
**name** | **string**
**aesthetics** | [**Aesthetics**](Aesthetics)
**vanityname** | **string**
**allocation** | [**AllocationCloud**](AllocationCloud)
**providers** | [**ExternalProviders**](ExternalProviders)
**auth0** | [**Auth0UserMetadata**](Auth0UserMetadata)

## Example

```typescript
import { UserProfile } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: UserProfile = {
    "schema": null,
    "picture": https://picsum.photos/200,
    "email": user@pieces.app,
    "created": null,
    "updated": null,
    "username": null,
    "id": null,
    "name": null,
    "aesthetics": null,
    "vanityname": null,
    "allocation": null,
    "providers": null,
    "auth0": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserProfile
console.log(exampleParsed)
```


