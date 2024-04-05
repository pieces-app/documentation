
# ImageAnalysis

This is a model that represents all the information collected during the processing of an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** | this is a uuid that represents a imageAnalysis. | [default to undefined]
**analysis** | **string** | this is a reference to the analysis. | [default to undefined]
**ocr** | [**OCRAnalysis**](OCRAnalysis) |  | [optional] [default to undefined]

## Example

```typescript
import { ImageAnalysis } from '';

// TODO: Update the object below with actual values
const example: ImageAnalysis = {
    "schema": null, // 
    "id": null, // this is a uuid that represents a imageAnalysis.
    "analysis": null, // this is a reference to the analysis.
    "ocr": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ImageAnalysis;
console.log(exampleParsed);
```




