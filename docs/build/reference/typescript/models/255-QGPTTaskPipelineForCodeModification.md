
# QGPTTaskPipelineForCodeModification

This task is for modifying a bit of code, IE modify this code to do xyz.  This is a class so that we can add optional properties in the future.  Note: the snippet && language that needs to be modified should be within the QGPTQuestionInput.relevant

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**instruction** | **string**

## Example

```typescript
import { QGPTTaskPipelineForCodeModification } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: QGPTTaskPipelineForCodeModification = {
    "schema": null,
    "instruction": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTTaskPipelineForCodeModification;
console.log(exampleParsed);
```


