
# ExternalProvider

I know that profileData and user_id have differeing casing but they are done because they map to Auth0\'s projeecties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**type** | [**ExternalProviderTypeEnum**](ExternalProviderTypeEnum) |  | [default to undefined]
**userId** | **string** | This is the user_id within the provider. | [default to undefined]
**accessToken** | **string** | This is optional here, but will be present for BB, Github, and google. | [optional] [default to undefined]
**expiresIn** | **number** | Some providers have an expiration on their access token. IE BB, Google, NOT Github. | [optional] [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**profileData** | [**ExternalProviderProfileData**](ExternalProviderProfileData) |  | [optional] [default to undefined]
**connection** | **string** | This is an optional field that will be provided onentreprise connections. ie is type &#x3D;&#x3D; waad then connection might be PiecesApp. However is other cases,you my find your provider and connection is the exact same string. To decifer between the two, you can use the isSocial bool. | [optional] [default to undefined]
**isSocial** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { ExternalProvider } from '';

// TODO: Update the object below with actual values
const example: ExternalProvider = {
    "schema": null, // 
    "type": null, // 
    "userId": null, // This is the user_id within the provider.
    "accessToken": null, // This is optional here, but will be present for BB, Github, and google.
    "expiresIn": null, // Some providers have an expiration on their access token. IE BB, Google, NOT Github.
    "created": null, // 
    "updated": null, // 
    "profileData": null, // 
    "connection": null, // This is an optional field that will be provided onentreprise connections. ie is type &#x3D;&#x3D; waad then connection might be PiecesApp. However is other cases,you my find your provider and connection is the exact same string. To decifer between the two, you can use the isSocial bool.
    "isSocial": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExternalProvider;
console.log(exampleParsed);
```




