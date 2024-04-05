
# Auth0

An object representing all of the properties that are available within a Auth0 PKCE Flow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**Auth0Identity**](Auth0Identity) |  | [optional] [default to undefined]
**user** | [**Auth0User**](Auth0User) |  | [optional] [default to undefined]
**metadata** | [**Auth0UserMetadata**](Auth0UserMetadata) |  | [optional] [default to undefined]
**domain** | **string** | The domain of your Auth 0 Service | [default to undefined]
**client** | **string** | The Client ID for your Auth0 Service | [default to undefined]
**audience** | **string** | The Server Audience of your Auth0 Service | [default to undefined]
**redirects** | [**Auth0Redirects**](Auth0Redirects) |  | [default to undefined]
**oAuth** | [**OAuthGroup**](OAuthGroup) |  | [default to undefined]
**namespace** | **string** | An optional namespace parameter to add an additional namespace | [optional] [default to undefined]

## Example

```typescript
import { Auth0 } from '';

// TODO: Update the object below with actual values
const example: Auth0 = {
    "identity": null, // 
    "user": null, // 
    "metadata": null, // 
    "domain": null, // The domain of your Auth 0 Service
    "client": null, // The Client ID for your Auth0 Service
    "audience": null, // The Server Audience of your Auth0 Service
    "redirects": null, // 
    "oAuth": null, // 
    "namespace": null, // An optional namespace parameter to add an additional namespace
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Auth0;
console.log(exampleParsed);
```




