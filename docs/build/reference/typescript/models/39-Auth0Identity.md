
# Auth0Identity

Contains info retrieved from the identity provider with which the user originally authenticates. Users may also link their profile to multiple identity providers; those identities will then also appear in this array. The contents of an individual identity provider object varies by provider, but it will typically include the following. Link: [https://auth0.com/docs/rules/user-object-in-rules]  Currently left out: - profile_data: (Object) User information associated with the connection. When profiles are linked, it is populated with the associated user info for secondary accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection** | **string** | Name of the Auth0 connection used to authenticate the user.  | [optional] [default to undefined]
**isSocial** | **boolean** | Indicates whether the connection is a social one.  | [optional] [default to undefined]
**provider** | **string** | mapped from user_id  -&gt; id | [optional] [default to undefined]
**userId** | **string** | User\&#39;s unique identifier for this connection/provider. | [optional] [default to undefined]
**accessToken** | **string** |  | [optional] [default to undefined]
**expiresIn** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { Auth0Identity } from '';

// TODO: Update the object below with actual values
const example: Auth0Identity = {
    "connection": null, // Name of the Auth0 connection used to authenticate the user. 
    "isSocial": null, // Indicates whether the connection is a social one. 
    "provider": null, // mapped from user_id  -&gt; id
    "userId": null, // User\&#39;s unique identifier for this connection/provider.
    "accessToken": null, // 
    "expiresIn": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Auth0Identity;
console.log(exampleParsed);
```




