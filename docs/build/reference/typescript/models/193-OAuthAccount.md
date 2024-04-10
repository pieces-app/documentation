
# OAuthAccount Model

A Model to support account creation to Auth0\'s Database.

## Properties Model

Name | Type
------------ | -------------
**clientId** | **string**
**email** | **string**
**connection** | **string**
**username** | **string**
**givenName** | **string**
**familyName** | **string**
**name** | **string**
**picture** | **string**
**nickname** | **string**

## Example Model

```typescript
import { OAuthAccount } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: OAuthAccount = {
    "clientId": null,
    "email": null,
    "connection": null,
    "username": null,
    "givenName": null,
    "familyName": null,
    "name": null,
    "picture": null,
    "nickname": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OAuthAccount
console.log(exampleParsed)
```


