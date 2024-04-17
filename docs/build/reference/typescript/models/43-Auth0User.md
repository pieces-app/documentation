---
title: Auth0User | TypeScript SDK
---


# Auth0User



## Properties

Name | Type
------------ | -------------
**name** | **string**
**picture** | **string**
**email** | **string**
**createdAt** | **Date**
**emailVerified** | **boolean**
**familyName** | **string**
**givenName** | **string**
**identities** | [**Array&lt;Auth0Identity&gt;**](Auth0Identity)
**nickname** | **string**
**updatedAt** | **Date**
**username** | **string**
**userMetadata** | [**Auth0UserMetadata**](Auth0UserMetadata)
**locale** | **string**
**userId** | **string**
**lastIp** | **string**
**lastLogin** | **Date**
**loginsCount** | **number**
**blockedFor** | **Array&lt;string&gt;**
**guardianAuthenticators** | **Array&lt;string&gt;**

## Example

```typescript
import { Auth0User } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Auth0User = {
    "name": Tsavo Knott,
    "picture": https://picsum.photos/200,
    "email": user@pieces.app,
    "createdAt": null,
    "emailVerified": null,
    "familyName": null,
    "givenName": null,
    "identities": null,
    "nickname": null,
    "updatedAt": null,
    "username": null,
    "userMetadata": null,
    "locale": null,
    "userId": null,
    "lastIp": null,
    "lastLogin": null,
    "loginsCount": null,
    "blockedFor": null,
    "guardianAuthenticators": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Auth0User
console.log(exampleParsed)
```


