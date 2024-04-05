
# TLPCodeProcessing


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**fragment** | [**TLPCodeSnippetAnalytics**](TLPCodeSnippetAnalytics) |  | [optional] [default to undefined]
**file** | [**TLPCodeFileAnalytics**](TLPCodeFileAnalytics) |  | [optional] [default to undefined]
**directory** | [**TLPCodeDirectoryAnalytics**](TLPCodeDirectoryAnalytics) |  | [optional] [default to undefined]
**repository** | [**TLPCodeRepositoryAnalytics**](TLPCodeRepositoryAnalytics) |  | [optional] [default to undefined]

## Example

```typescript
import { TLPCodeProcessing } from '';

// TODO: Update the object below with actual values
const example: TLPCodeProcessing = {
    "schema": null, // 
    "fragment": null, // 
    "file": null, // 
    "directory": null, // 
    "repository": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TLPCodeProcessing;
console.log(exampleParsed);
```




