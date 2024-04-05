
# PrecreatedExternalProviderApiKey

This is the input model for /external_provider/api_key/create

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**user** | **string** | This is the ID of the User. | [default to undefined]
**openAI** | [**Auth0OpenAIUserMetadata**](Auth0OpenAIUserMetadata) |  | [optional] [default to undefined]

## Example

```typescript
import { PrecreatedExternalProviderApiKey } from '';

// TODO: Update the object below with actual values
const example: PrecreatedExternalProviderApiKey = {
    "schema": null, // 
    "user": null, // This is the ID of the User.
    "openAI": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PrecreatedExternalProviderApiKey;
console.log(exampleParsed);
```




