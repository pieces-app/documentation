
# OAuthAccount

A Model to support account creation to Auth0\'s Database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **string** | The client_id of your client. | [default to undefined]
**email** | **string** | The user\&#39;s email address. | [default to undefined]
**connection** | **string** | The name of the database configured to your client. | [default to undefined]
**username** | **string** | The user\&#39;s username. Only valid if the connection requires a username. | [default to undefined]
**givenName** | **string** | The user\&#39;s given name(s). | [default to undefined]
**familyName** | **string** | The user\&#39;s family name(s). | [default to undefined]
**name** | **string** | The user\&#39;s full name. | [default to undefined]
**picture** | **string** | A URI pointing to the user\&#39;s picture. | [default to undefined]
**nickname** | **string** | The user\&#39;s nickname. | [default to undefined]

## Example

```typescript
import { OAuthAccount } from '';

// TODO: Update the object below with actual values
const example: OAuthAccount = {
    "clientId": null, // The client_id of your client.
    "email": null, // The user\&#39;s email address.
    "connection": null, // The name of the database configured to your client.
    "username": null, // The user\&#39;s username. Only valid if the connection requires a username.
    "givenName": null, // The user\&#39;s given name(s).
    "familyName": null, // The user\&#39;s family name(s).
    "name": null, // The user\&#39;s full name.
    "picture": null, // A URI pointing to the user\&#39;s picture.
    "nickname": null, // The user\&#39;s nickname.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OAuthAccount;
console.log(exampleParsed);
```




