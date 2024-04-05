
# OCRAnalysis

This is the data collected during the ocr analysis of an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**raw** | [**Format**](Format) |  | [default to undefined]
**hocr** | [**Format**](Format) |  | [default to undefined]
**image** | **string** | this is a reference the the imageAnalysis. | [default to undefined]
**model** | [**Model**](Model) |  | [default to undefined]

## Example

```typescript
import { OCRAnalysis } from '';

// TODO: Update the object below with actual values
const example: OCRAnalysis = {
    "schema": null, // 
    "id": null, // 
    "raw": null, // 
    "hocr": null, // 
    "image": null, // this is a reference the the imageAnalysis.
    "model": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OCRAnalysis;
console.log(exampleParsed);
```




