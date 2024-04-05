
# TokenizedPKCE

This is the flow that mobile apps use to access an API. Use this endpoint to exchange an Authorization Code for a Token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**grantType** | **string** | Denotes the flow you are using. For Authorization Code, use authorization_code or refresh_token. | [default to undefined]
**clientId** | **string** | Your application\&#39;s Client ID. | [default to undefined]
**code** | **string** | The Authorization Code received from the initial /authorize call. | [default to undefined]
**redirectUri** | **string** | This is required only if it was set at the GET /authorize endpoint. The values must match. | [default to undefined]
**codeVerifier** | **string** | Cryptographically random key that was used to generate the code_challenge passed to /authorize. | [default to undefined]
**audience** | **string** | The audience domain: i.e. https://pieces.us.auth0.com | [optional] [default to undefined]

## Example

```typescript
import { TokenizedPKCE } from '';

// TODO: Update the object below with actual values
const example: TokenizedPKCE = {
    "schema": null, // 
    "grantType": null, // Denotes the flow you are using. For Authorization Code, use authorization_code or refresh_token.
    "clientId": null, // Your application\&#39;s Client ID.
    "code": null, // The Authorization Code received from the initial /authorize call.
    "redirectUri": null, // This is required only if it was set at the GET /authorize endpoint. The values must match.
    "codeVerifier": null, // Cryptographically random key that was used to generate the code_challenge passed to /authorize.
    "audience": https://pieces.us.auth0.com, // The audience domain: i.e. https://pieces.us.auth0.com
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TokenizedPKCE;
console.log(exampleParsed);
```




