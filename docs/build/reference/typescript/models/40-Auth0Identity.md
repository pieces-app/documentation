---
title: Auth0Identity | TypeScript SDK
---


# Auth0Identity

Contains info retrieved from the identity provider with which the user originally authenticates. Users may also link their profile to multiple identity providers; those identities will then also appear in this array. The contents of an individual identity provider object varies by provider, but it will typically include the following. Link: [https://auth0.com/docs/rules/user-object-in-rules]  Currently left out: - profile_data: (Object) User information associated with the connection. When profiles are linked, it is populated with the associated user info for secondary accounts.

## Properties

Name | Type
------------ | -------------
**connection** | **string**
**isSocial** | **boolean**
**provider** | **string**
**userId** | **string**
**accessToken** | **string**
**expiresIn** | **number**

## Example

```typescript
import { Auth0Identity } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Auth0Identity = {
    "connection": null,
    "isSocial": null,
    "provider": null,
    "userId": null,
    "accessToken": null,
    "expiresIn": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Auth0Identity
console.log(exampleParsed)
```


