
# TokenizedPKCE

This is the flow that mobile apps use to access an API. Use this endpoint to exchange an Authorization Code for a Token.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**grantType** | **string**
**clientId** | **string**
**code** | **string**
**redirectUri** | **string**
**codeVerifier** | **string**
**audience** | **string**

## Example

```typescript
import { TokenizedPKCE } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TokenizedPKCE = {
    "schema": null,
    "grantType": null,
    "clientId": null,
    "code": null,
    "redirectUri": null,
    "codeVerifier": null,
    "audience": https://pieces.us.auth0.com,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TokenizedPKCE
console.log(exampleParsed)
```


