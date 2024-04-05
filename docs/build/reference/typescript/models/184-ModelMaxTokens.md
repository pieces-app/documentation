
# ModelMaxTokens

This will describe the MaxTokens for an MLModel  total is required.  iff there is a differentiator with inputs/outputs, then we can also provide those as well.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**total** | **number** |  | [default to undefined]
**input** | **number** |  | [optional] [default to undefined]
**output** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { ModelMaxTokens } from '';

// TODO: Update the object below with actual values
const example: ModelMaxTokens = {
    "schema": null, // 
    "total": null, // 
    "input": null, // 
    "output": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelMaxTokens;
console.log(exampleParsed);
```




