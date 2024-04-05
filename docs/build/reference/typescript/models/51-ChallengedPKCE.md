
# ChallengedPKCE

A model that Generates A PKCE Challenge Object with the needed requirements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**state** | **string** | An opaque value the clients adds to the initial request that Auth0 includes when redirecting the back to the client. This value must be used by the client to prevent CSRF attacks. | [default to undefined]
**nonce** | **string** | A local key that is held as the comparator to state, thus they should be the same. | [default to undefined]
**challenge** | **string** | Generated challenge from the code_verifier. | [default to undefined]
**method** | **string** | Method used to generate the challenge. The PKCE spec defines two methods, S256 and plain, however, Auth0 supports only S256 since the latter is discouraged. | [default to undefined]
**verifier** | **string** | Cryptographically random key that was used to generate the code_challenge passed to /authorize. | [default to undefined]

## Example

```typescript
import { ChallengedPKCE } from '';

// TODO: Update the object below with actual values
const example: ChallengedPKCE = {
    "schema": null, // 
    "state": null, // An opaque value the clients adds to the initial request that Auth0 includes when redirecting the back to the client. This value must be used by the client to prevent CSRF attacks.
    "nonce": null, // A local key that is held as the comparator to state, thus they should be the same.
    "challenge": null, // Generated challenge from the code_verifier.
    "method": null, // Method used to generate the challenge. The PKCE spec defines two methods, S256 and plain, however, Auth0 supports only S256 since the latter is discouraged.
    "verifier": null, // Cryptographically random key that was used to generate the code_challenge passed to /authorize.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChallengedPKCE;
console.log(exampleParsed);
```




