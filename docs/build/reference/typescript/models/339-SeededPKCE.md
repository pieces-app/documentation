
# SeededPKCE

A model that initialized a PKCE Authentication Flow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**responseType** | **string** | Indicates to Auth0 which OAuth 2.0 Flow you want to perform. Use code for Authorization Code Grant (PKCE) Flow. | [default to undefined]
**state** | **string** | An opaque value the clients adds to the initial request that Auth0 includes when redirecting the back to the client. This value must be used by the client to prevent CSRF attacks. | [default to undefined]
**nonce** | **string** | A local key that is held as the comparator to state, thus they should be the same. | [default to undefined]
**redirectUri** | **string** | http://localhost:8080/authentication/response | [optional] [default to undefined]
**codeChallenge** | **string** | Generated challenge from the code_verifier. | [default to undefined]
**codeChallengeMethod** | **string** | Method used to generate the challenge. The PKCE spec defines two methods, S256 and plain, however, Auth0 supports only S256 since the latter is discouraged. | [default to undefined]
**domain** | **string** | https://auth.pieces.services/authorize | [optional] [default to undefined]
**audience** | **string** | The unique identifier of the target API you want to access. i.e. https://pieces.us.auth0.com/api/v2/ | [optional] [default to undefined]
**screenHint** | **string** | Provides a hint to Auth0 as to what flow should be displayed. The default behavior is to show a login page but you can override this by passing \&#39;signup\&#39; to show the signup page instead. | [optional] [default to undefined]
**prompt** | **string** |  To initiate a silent authentication request, use prompt&#x3D;none (see Remarks for more info). | [optional] [default to undefined]
**organization** | **string** |  | [optional] [default to undefined]
**invitation** | **string** |  | [optional] [default to undefined]
**scope** | **Array&lt;string&gt;** | The scopes which you want to request authorization for. These must be separated by a space. You can request any of the standard OpenID Connect (OIDC) scopes about users, such as profile and email, custom claims that must conform to a namespaced format, or any scopes supported by the target API (for example, read:contacts). Include offline_access to get a Refresh Token. | [default to undefined]
**clientId** | **string** | Your application\&#39;s Client ID. | [default to undefined]
**aDDITIONALPARAMETERS** | [**SeededPKCEADDITIONALPARAMETERS**](SeededPKCEADDITIONALPARAMETERS) |  | [optional] [default to undefined]
**responseMode** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SeededPKCE } from '';

// TODO: Update the object below with actual values
const example: SeededPKCE = {
    "schema": null, // 
    "responseType": code, // Indicates to Auth0 which OAuth 2.0 Flow you want to perform. Use code for Authorization Code Grant (PKCE) Flow.
    "state": null, // An opaque value the clients adds to the initial request that Auth0 includes when redirecting the back to the client. This value must be used by the client to prevent CSRF attacks.
    "nonce": null, // A local key that is held as the comparator to state, thus they should be the same.
    "redirectUri": null, // http://localhost:8080/authentication/response
    "codeChallenge": null, // Generated challenge from the code_verifier.
    "codeChallengeMethod": null, // Method used to generate the challenge. The PKCE spec defines two methods, S256 and plain, however, Auth0 supports only S256 since the latter is discouraged.
    "domain": null, // https://auth.pieces.services/authorize
    "audience": null, // The unique identifier of the target API you want to access. i.e. https://pieces.us.auth0.com/api/v2/
    "screenHint": null, // Provides a hint to Auth0 as to what flow should be displayed. The default behavior is to show a login page but you can override this by passing \&#39;signup\&#39; to show the signup page instead.
    "prompt": null, //  To initiate a silent authentication request, use prompt&#x3D;none (see Remarks for more info).
    "organization": null, // 
    "invitation": null, // 
    "scope": null, // The scopes which you want to request authorization for. These must be separated by a space. You can request any of the standard OpenID Connect (OIDC) scopes about users, such as profile and email, custom claims that must conform to a namespaced format, or any scopes supported by the target API (for example, read:contacts). Include offline_access to get a Refresh Token.
    "clientId": 9sW4Pa1LEjX67l6VO14u0207NLYeXnu1, // Your application\&#39;s Client ID.
    "aDDITIONALPARAMETERS": null, // 
    "responseMode": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededPKCE;
console.log(exampleParsed);
```




