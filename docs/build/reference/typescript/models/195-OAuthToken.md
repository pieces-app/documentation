
# OAuthToken

A model representing a returnable response for a OAuthGroup Token

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**accessToken** | **string** | The Access Token | [default to undefined]
**tokenType** | **string** |  | [default to undefined]
**expiresIn** | **number** |  | [default to undefined]
**scope** | **string** |  | [default to undefined]
**refreshToken** | **string** |  | [optional] [default to undefined]
**idToken** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { OAuthToken } from '';

// TODO: Update the object below with actual values
const example: OAuthToken = {
    "schema": null, // 
    "accessToken": null, // The Access Token
    "tokenType": null, // 
    "expiresIn": 86400, // 
    "scope": null, // 
    "refreshToken": null, // 
    "idToken": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OAuthToken;
console.log(exampleParsed);
```




