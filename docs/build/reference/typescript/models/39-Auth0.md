
# Auth0 Model

An object representing all of the properties that are available within a Auth0 PKCE Flow

## Properties Model

Name | Type
------------ | -------------
**identity** | [**Auth0Identity**](Auth0Identity)
**user** | [**Auth0User**](Auth0User)
**metadata** | [**Auth0UserMetadata**](Auth0UserMetadata)
**domain** | **string**
**client** | **string**
**audience** | **string**
**redirects** | [**Auth0Redirects**](Auth0Redirects)
**oAuth** | [**OAuthGroup**](OAuthGroup)
**namespace** | **string**

## Example Model

```typescript
import { Auth0 } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Auth0 = {
    "identity": null,
    "user": null,
    "metadata": null,
    "domain": null,
    "client": null,
    "audience": null,
    "redirects": null,
    "oAuth": null,
    "namespace": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Auth0
console.log(exampleParsed)
```


