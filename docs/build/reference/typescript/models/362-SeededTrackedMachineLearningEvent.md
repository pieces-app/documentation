
# SeededTrackedMachineLearningEvent


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**tlp** | [**TLPMachineLearningProcessingEvent**](TLPMachineLearningProcessingEvent)
**graphical** | [**GraphicalMachineLearningProcessingEvent**](GraphicalMachineLearningProcessingEvent)

## Example

```typescript
import { SeededTrackedMachineLearningEvent } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: SeededTrackedMachineLearningEvent = {
    "schema": null,
    "tlp": null,
    "graphical": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededTrackedMachineLearningEvent;
console.log(exampleParsed);
```


