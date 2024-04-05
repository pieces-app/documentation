
# FlattenedImageAnalysis


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**ocr** | [**FlattenedOCRAnalysis**](FlattenedOCRAnalysis) |  | [optional] [default to undefined]
**analysis** | **string** | this is a reference to our (parent)analysis | [default to undefined]

## Example

```typescript
import { FlattenedImageAnalysis } from '';

// TODO: Update the object below with actual values
const example: FlattenedImageAnalysis = {
    "schema": null, // 
    "id": null, // 
    "ocr": null, // 
    "analysis": null, // this is a reference to our (parent)analysis
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedImageAnalysis;
console.log(exampleParsed);
```




