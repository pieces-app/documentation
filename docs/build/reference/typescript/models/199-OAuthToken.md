
# OAuthToken Model

A model representing a returnable response for a OAuthGroup Token

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**accessToken** | **string**
**tokenType** | **string**
**expiresIn** | **number**
**scope** | **string**
**refreshToken** | **string**
**idToken** | **string**

## Example Model

```typescript
import { OAuthToken } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: OAuthToken = {
    "schema": null,
    "accessToken": null,
    "tokenType": null,
    "expiresIn": 86400,
    "scope": null,
    "refreshToken": null,
    "idToken": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OAuthToken
console.log(exampleParsed)
```


