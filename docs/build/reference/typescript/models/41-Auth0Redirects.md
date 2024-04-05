
# Auth0Redirects

The redirect URI for you Auth 0 Service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authenticated** | **string** | Where the Auth0 redirects after the user is authorized | [optional] [default to undefined]
**unauthenticated** | **string** | The redirect where a user returns once unauthenticated | [optional] [default to undefined]

## Example

```typescript
import { Auth0Redirects } from '';

// TODO: Update the object below with actual values
const example: Auth0Redirects = {
    "authenticated": null, // Where the Auth0 redirects after the user is authorized
    "unauthenticated": null, // The redirect where a user returns once unauthenticated
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Auth0Redirects;
console.log(exampleParsed);
```




