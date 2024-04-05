
# PKCE

An object representing all of the properties involved in a PKCE Authentication Flow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**result** | [**ResultedPKCE**](ResultedPKCE) |  | [optional] [default to undefined]
**challenge** | [**ChallengedPKCE**](ChallengedPKCE) |  | [optional] [default to undefined]
**revocation** | [**RevokedPKCE**](RevokedPKCE) |  | [optional] [default to undefined]
**seed** | [**SeededPKCE**](SeededPKCE) |  | [optional] [default to undefined]
**token** | [**TokenizedPKCE**](TokenizedPKCE) |  | [optional] [default to undefined]
**auth0** | [**Auth0**](Auth0) |  | [optional] [default to undefined]

## Example

```typescript
import { PKCE } from '';

// TODO: Update the object below with actual values
const example: PKCE = {
    "schema": null, // 
    "result": null, // 
    "challenge": null, // 
    "revocation": null, // 
    "seed": null, // 
    "token": null, // 
    "auth0": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PKCE;
console.log(exampleParsed);
```




