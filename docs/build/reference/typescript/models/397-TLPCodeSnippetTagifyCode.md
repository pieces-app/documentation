
# TLPCodeSnippetTagifyCode



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**distribution** | **string** | stringified array of numbers | [default to undefined]
**inferredDistribution** | **string** | stringified array of numbers | [default to undefined]
**tags** | **string** | stringified array of strings | [default to undefined]
**inferredTags** | **string** | stringified array of strings | [default to undefined]
**model** | **string** | this is the model version  | [default to undefined]
**labelVersion** | **string** | This is the version of the file that we are using that contains all the possible tags | [default to undefined]
**threshold** | **number** | this is the minimum score from the model that a tag needs to have to be included in the tags array. | [default to undefined]
**inferredThreshold** | **number** | this is the minimum score from the postprocessing that a tag needs to have to be included in the inferred_tags array. | [default to undefined]
**context** | **string** | this is the origin in which this asset was created, application(string representation) | [default to undefined]
**asset** | **string** | This is the asset id. | [default to undefined]

## Example

```typescript
import { TLPCodeSnippetTagifyCode } from '';

// TODO: Update the object below with actual values
const example: TLPCodeSnippetTagifyCode = {
    "schema": null, // 
    "distribution": null, // stringified array of numbers
    "inferredDistribution": null, // stringified array of numbers
    "tags": null, // stringified array of strings
    "inferredTags": null, // stringified array of strings
    "model": null, // this is the model version 
    "labelVersion": null, // This is the version of the file that we are using that contains all the possible tags
    "threshold": null, // this is the minimum score from the model that a tag needs to have to be included in the tags array.
    "inferredThreshold": null, // this is the minimum score from the postprocessing that a tag needs to have to be included in the inferred_tags array.
    "context": null, // this is the origin in which this asset was created, application(string representation)
    "asset": null, // This is the asset id.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TLPCodeSnippetTagifyCode;
console.log(exampleParsed);
```




