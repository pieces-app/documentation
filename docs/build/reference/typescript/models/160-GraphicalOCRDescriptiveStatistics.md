
# GraphicalOCRDescriptiveStatistics

Model for monitoring and evaluating the OCR feature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**asset** | **string** |  | [default to undefined]
**user** | **string** |  | [default to undefined]
**model** | **string** |  | [default to undefined]
**created** | **string** |  | [default to undefined]
**os** | **string** |  | [default to undefined]
**confidence** | [**GraphicalOCRDescriptiveStatisticsConfidence**](GraphicalOCRDescriptiveStatisticsConfidence) |  | [default to undefined]
**duration** | **string** |  | [default to undefined]

## Example

```typescript
import { GraphicalOCRDescriptiveStatistics } from '';

// TODO: Update the object below with actual values
const example: GraphicalOCRDescriptiveStatistics = {
    "schema": null, // 
    "asset": null, // 
    "user": null, // 
    "model": null, // 
    "created": null, // 
    "os": null, // 
    "confidence": null, // 
    "duration": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GraphicalOCRDescriptiveStatistics;
console.log(exampleParsed);
```




