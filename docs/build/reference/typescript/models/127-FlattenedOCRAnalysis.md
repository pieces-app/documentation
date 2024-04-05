
# FlattenedOCRAnalysis

[DAG Safe] Ocr Analysis that will reference FlattenedFormats.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**raw** | [**ReferencedFormat**](ReferencedFormat) |  | [default to undefined]
**hocr** | [**ReferencedFormat**](ReferencedFormat) |  | [default to undefined]
**model** | [**Model**](Model) |  | [default to undefined]
**image** | **string** | this is a refernece to the image analysis. | [default to undefined]

## Example

```typescript
import { FlattenedOCRAnalysis } from '';

// TODO: Update the object below with actual values
const example: FlattenedOCRAnalysis = {
    "schema": null, // 
    "id": null, // 
    "raw": null, // 
    "hocr": null, // 
    "model": null, // 
    "image": null, // this is a refernece to the image analysis.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedOCRAnalysis;
console.log(exampleParsed);
```




