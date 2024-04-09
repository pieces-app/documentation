
# QGPTTaskPipelineForCodeFix

This task is for fixing a bit of code.  This is a class so that we can add optional properties in the future.  Note: the snippet && language that needs to be fixed should be within the QGPTQuestionInput.relevant.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**error** | **string**

## Example

```typescript
import { QGPTTaskPipelineForCodeFix } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: QGPTTaskPipelineForCodeFix = {
    "schema": null,
    "error": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTTaskPipelineForCodeFix;
console.log(exampleParsed);
```


