
# RevokedPKCE

A model to support revoking a Token Generated Through PKCE  The behaviour of this endpoint depends on the state of the Refresh Token Revocation Deletes Grant toggle.  If this toggle is enabled, then each revocation request invalidates not only the specific token, but all other tokens based on the same authorization grant.  This means that all Refresh Tokens that have been issued for the same user, application, and audience will be revoked. If this toggle is disabled, then only the refresh token is revoked, while the grant is left intact

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**clientId** | **string** | Your application\&#39;s Client ID. The application should match the one the Refresh Token was issued for. | [default to undefined]
**token** | **string** | The Refresh Token you want to revoke. | [default to undefined]

## Example

```typescript
import { RevokedPKCE } from '';

// TODO: Update the object below with actual values
const example: RevokedPKCE = {
    "schema": null, // 
    "clientId": null, // Your application\&#39;s Client ID. The application should match the one the Refresh Token was issued for.
    "token": null, // The Refresh Token you want to revoke.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RevokedPKCE;
console.log(exampleParsed);
```




