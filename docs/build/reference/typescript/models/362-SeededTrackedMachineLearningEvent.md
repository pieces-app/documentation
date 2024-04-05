
# SeededTrackedMachineLearningEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**tlp** | [**TLPMachineLearningProcessingEvent**](TLPMachineLearningProcessingEvent) |  | [optional] [default to undefined]
**graphical** | [**GraphicalMachineLearningProcessingEvent**](GraphicalMachineLearningProcessingEvent) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededTrackedMachineLearningEvent } from '';

// TODO: Update the object below with actual values
const example: SeededTrackedMachineLearningEvent = {
    "schema": null, // 
    "tlp": null, // 
    "graphical": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededTrackedMachineLearningEvent;
console.log(exampleParsed);
```




