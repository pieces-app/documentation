
# Auth0OpenAIUserMetadata

Only supporting a single api key per user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**apiKey** | **string** |  | [optional] [default to undefined]
**apiKeyName** | **string** |  | [optional] [default to undefined]
**organizationKey** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Auth0OpenAIUserMetadata } from '';

// TODO: Update the object below with actual values
const example: Auth0OpenAIUserMetadata = {
    "schema": null, // 
    "apiKey": null, // 
    "apiKeyName": null, // 
    "organizationKey": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Auth0OpenAIUserMetadata;
console.log(exampleParsed);
```




