
# TLPCodeFragmentSuggestedSave

Model for monitoring and evaluating the suggested save feature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**asset** | **string** |  | [default to undefined]
**user** | **string** |  | [default to undefined]
**model** | **string** |  | [default to undefined]
**created** | **string** |  | [default to undefined]
**os** | **string** |  | [default to undefined]
**context** | **string** | context from where suggestion came from | [optional] [default to undefined]
**score** | **number** | maximum similarity score | [optional] [default to undefined]
**candidates** | **number** | number of candidates | [optional] [default to undefined]

## Example

```typescript
import { TLPCodeFragmentSuggestedSave } from '';

// TODO: Update the object below with actual values
const example: TLPCodeFragmentSuggestedSave = {
    "schema": null, // 
    "asset": null, // 
    "user": null, // 
    "model": null, // 
    "created": null, // 
    "os": null, // 
    "context": null, // context from where suggestion came from
    "score": null, // maximum similarity score
    "candidates": null, // number of candidates
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TLPCodeFragmentSuggestedSave;
console.log(exampleParsed);
```




