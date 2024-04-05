
# TLPMachineLearningProcessingEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**code** | [**TLPCodeProcessing**](TLPCodeProcessing) |  | [optional] [default to undefined]

## Example

```typescript
import { TLPMachineLearningProcessingEvent } from '';

// TODO: Update the object below with actual values
const example: TLPMachineLearningProcessingEvent = {
    "schema": null, // 
    "code": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TLPMachineLearningProcessingEvent;
console.log(exampleParsed);
```




