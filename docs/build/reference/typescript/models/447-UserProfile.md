
# UserProfile

This is the model for a user logged into Pieces.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**picture** | **string** | mapped from picture.URL pointing to the user\&#39;s profile picture.  | [optional] [default to 'https://picsum.photos/200']
**email** | **string** |  | [optional] [default to 'user@pieces.app']
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**username** | **string** |  (unique) User\&#39;s username.   | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**name** | **string** | This is the name of the User. | [optional] [default to undefined]
**aesthetics** | [**Aesthetics**](Aesthetics) |  | [default to undefined]
**vanityname** | **string** |  | [optional] [default to undefined]
**allocation** | [**AllocationCloud**](AllocationCloud) |  | [optional] [default to undefined]
**providers** | [**ExternalProviders**](ExternalProviders) |  | [optional] [default to undefined]
**auth0** | [**Auth0UserMetadata**](Auth0UserMetadata) |  | [optional] [default to undefined]

## Example

```typescript
import { UserProfile } from '';

// TODO: Update the object below with actual values
const example: UserProfile = {
    "schema": null, // 
    "picture": https://picsum.photos/200, // mapped from picture.URL pointing to the user\&#39;s profile picture. 
    "email": user@pieces.app, // 
    "created": null, // 
    "updated": null, // 
    "username": null, //  (unique) User\&#39;s username.  
    "id": null, // 
    "name": null, // This is the name of the User.
    "aesthetics": null, // 
    "vanityname": null, // 
    "allocation": null, // 
    "providers": null, // 
    "auth0": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserProfile;
console.log(exampleParsed);
```




