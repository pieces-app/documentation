
# Auth0User



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  User\&#39;s full name. | [optional] [default to undefined]
**picture** | **string** | mapped from picture.URL pointing to the user\&#39;s profile picture.  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**createdAt** | **Date** |  | [optional] [default to undefined]
**emailVerified** | **boolean** | Indicates whether the user has verified their email address. Mapped from email_verified -&gt; emailVerified. | [optional] [default to undefined]
**familyName** | **string** | User\&#39;s family name. | [optional] [default to undefined]
**givenName** | **string** | User\&#39;s given name.  | [optional] [default to undefined]
**identities** | [**Array&lt;Auth0Identity&gt;**](Auth0Identity) | Contains info retrieved from the identity provider with which the user originally authenticates. | [optional] [default to undefined]
**nickname** | **string** | User\&#39;s nickname.  | [optional] [default to undefined]
**updatedAt** | **Date** |  | [optional] [default to undefined]
**username** | **string** |  (unique) User\&#39;s username.   | [optional] [default to undefined]
**userMetadata** | [**Auth0UserMetadata**](Auth0UserMetadata) |  | [optional] [default to undefined]
**locale** | **string** |  | [optional] [default to undefined]
**userId** | **string** |  | [optional] [default to undefined]
**lastIp** | **string** |  | [optional] [default to undefined]
**lastLogin** | **Date** |  | [optional] [default to undefined]
**loginsCount** | **number** |  | [optional] [default to undefined]
**blockedFor** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**guardianAuthenticators** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { Auth0User } from '';

// TODO: Update the object below with actual values
const example: Auth0User = {
    "name": Tsavo Knott, //  User\&#39;s full name.
    "picture": https://picsum.photos/200, // mapped from picture.URL pointing to the user\&#39;s profile picture. 
    "email": user@pieces.app, // 
    "createdAt": null, // 
    "emailVerified": null, // Indicates whether the user has verified their email address. Mapped from email_verified -&gt; emailVerified.
    "familyName": null, // User\&#39;s family name.
    "givenName": null, // User\&#39;s given name. 
    "identities": null, // Contains info retrieved from the identity provider with which the user originally authenticates.
    "nickname": null, // User\&#39;s nickname. 
    "updatedAt": null, // 
    "username": null, //  (unique) User\&#39;s username.  
    "userMetadata": null, // 
    "locale": null, // 
    "userId": null, // 
    "lastIp": null, // 
    "lastLogin": null, // 
    "loginsCount": null, // 
    "blockedFor": null, // 
    "guardianAuthenticators": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Auth0User;
console.log(exampleParsed);
```




