
# PreupdatedExternalProviderApiKey

This is the endput model for \"/external_provider/api_key/update\". everything but the uder will be optional, anything that is defined will get an update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**user** | **string** |  | [default to undefined]
**openAI** | [**Auth0OpenAIUserMetadata**](Auth0OpenAIUserMetadata) |  | [optional] [default to undefined]

## Example

```typescript
import { PreupdatedExternalProviderApiKey } from '';

// TODO: Update the object below with actual values
const example: PreupdatedExternalProviderApiKey = {
    "schema": null, // 
    "user": null, // 
    "openAI": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PreupdatedExternalProviderApiKey;
console.log(exampleParsed);
```




