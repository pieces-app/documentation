
# OpenAIModelsListOutput

This is the output model for the /open_ai/models/list endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**models** | [**SeededModels**](SeededModels) |  | [default to undefined]

## Example

```typescript
import { OpenAIModelsListOutput } from '';

// TODO: Update the object below with actual values
const example: OpenAIModelsListOutput = {
    "schema": null, // 
    "models": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OpenAIModelsListOutput;
console.log(exampleParsed);
```




