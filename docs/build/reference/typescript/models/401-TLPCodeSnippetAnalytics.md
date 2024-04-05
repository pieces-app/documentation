
# TLPCodeSnippetAnalytics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**statistics** | [**TLPCodeFragmentStatistics**](TLPCodeFragmentStatistics) |  | [optional] [default to undefined]
**classification** | [**TLPCodeFragmentClassification**](TLPCodeFragmentClassification) |  | [optional] [default to undefined]
**reclassification** | [**TLPCodeFragmentReclassification**](TLPCodeFragmentReclassification) |  | [optional] [default to undefined]
**suggested** | [**TLPCodeSnippetSuggestedInteractions**](TLPCodeSnippetSuggestedInteractions) |  | [optional] [default to undefined]
**tagify** | [**TLPCodeFragmentTagify**](TLPCodeFragmentTagify) |  | [optional] [default to undefined]
**description** | [**TLPCodeFragmentDescription**](TLPCodeFragmentDescription) |  | [optional] [default to undefined]

## Example

```typescript
import { TLPCodeSnippetAnalytics } from '';

// TODO: Update the object below with actual values
const example: TLPCodeSnippetAnalytics = {
    "schema": null, // 
    "statistics": null, // 
    "classification": null, // 
    "reclassification": null, // 
    "suggested": null, // 
    "tagify": null, // 
    "description": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TLPCodeSnippetAnalytics;
console.log(exampleParsed);
```




