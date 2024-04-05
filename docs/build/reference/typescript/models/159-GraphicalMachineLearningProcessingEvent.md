
# GraphicalMachineLearningProcessingEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**ocr** | [**GraphicalOCRProcessing**](GraphicalOCRProcessing) |  | [optional] [default to undefined]
**image** | [**GraphicalImageProcessing**](GraphicalImageProcessing) |  | [optional] [default to undefined]
**svg** | [**GraphicalSVGStatistics**](GraphicalSVGStatistics) |  | [optional] [default to undefined]

## Example

```typescript
import { GraphicalMachineLearningProcessingEvent } from '';

// TODO: Update the object below with actual values
const example: GraphicalMachineLearningProcessingEvent = {
    "schema": null, // 
    "ocr": null, // 
    "image": null, // 
    "svg": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GraphicalMachineLearningProcessingEvent;
console.log(exampleParsed);
```




