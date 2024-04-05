
# TLPCodeSnippetSuggestedInteractions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**save** | [**TLPCodeFragmentSuggestedSave**](TLPCodeFragmentSuggestedSave) |  | [optional] [default to undefined]
**reuse** | [**TLPCodeFragmentSuggestedReuse**](TLPCodeFragmentSuggestedReuse) |  | [optional] [default to undefined]

## Example

```typescript
import { TLPCodeSnippetSuggestedInteractions } from '';

// TODO: Update the object below with actual values
const example: TLPCodeSnippetSuggestedInteractions = {
    "schema": null, // 
    "save": null, // 
    "reuse": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TLPCodeSnippetSuggestedInteractions;
console.log(exampleParsed);
```




