
# QGPTTaskPipeline

This model is specifically for QGPT Task pipelines, the model is used to group one off tasks for instance fix/explaining/commenting that dont necessarily require a conversation form factor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**codeExplanation** | [**QGPTTaskPipelineForCodeExplanation**](QGPTTaskPipelineForCodeExplanation) |  | [optional] [default to undefined]
**codeCommentation** | [**QGPTTaskPipelineForCodeCommentation**](QGPTTaskPipelineForCodeCommentation) |  | [optional] [default to undefined]
**codeFix** | [**QGPTTaskPipelineForCodeFix**](QGPTTaskPipelineForCodeFix) |  | [optional] [default to undefined]
**codeModification** | [**QGPTTaskPipelineForCodeModification**](QGPTTaskPipelineForCodeModification) |  | [optional] [default to undefined]
**codeCompletion** | [**QGPTTaskPipelineForCodeCompletion**](QGPTTaskPipelineForCodeCompletion) |  | [optional] [default to undefined]

## Example

```typescript
import { QGPTTaskPipeline } from '';

// TODO: Update the object below with actual values
const example: QGPTTaskPipeline = {
    "schema": null, // 
    "codeExplanation": null, // 
    "codeCommentation": null, // 
    "codeFix": null, // 
    "codeModification": null, // 
    "codeCompletion": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTTaskPipeline;
console.log(exampleParsed);
```




