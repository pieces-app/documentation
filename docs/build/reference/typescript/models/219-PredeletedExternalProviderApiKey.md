
# PredeletedExternalProvider APIKey

This is a predeleted version relating to the /external_provider/api_key/delete endpoint.  This will ensure we remove this specific provider.(anything that is set to true we will reset to null within the database.)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**user** | **string** |  | [default to undefined]
**openAI** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { PredeletedExternalProviderApiKey } from '';

// TODO: Update the object below with actual values
const example: PredeletedExternalProviderApiKey = {
    "schema": null, // 
    "user": null, // 
    "openAI": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PredeletedExternalProviderApiKey;
console.log(exampleParsed);
```




