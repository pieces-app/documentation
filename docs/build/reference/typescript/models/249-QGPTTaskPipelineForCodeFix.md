
# QGPTTaskPipelineForCodeFix

This task is for fixing a bit of code.  This is a class so that we can add optional properties in the future.  Note: the snippet && language that needs to be fixed should be within the QGPTQuestionInput.relevant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**error** | **string** | This is the error message provided from the IDE, that we can use to provide the solution. | [optional] [default to undefined]

## Example

```typescript
import { QGPTTaskPipelineForCodeFix } from '';

// TODO: Update the object below with actual values
const example: QGPTTaskPipelineForCodeFix = {
    "schema": null, // 
    "error": null, // This is the error message provided from the IDE, that we can use to provide the solution.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTTaskPipelineForCodeFix;
console.log(exampleParsed);
```




