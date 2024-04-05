
# QGPTConversationPipelineForContextualizedCodeGeneration

This type of conversation is reccomended to be provided when a user want generate code w/ context provided.  This is a class so that we can add optional properties in the future.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]

## Example

```typescript
import { QGPTConversationPipelineForContextualizedCodeGeneration } from '';

// TODO: Update the object below with actual values
const example: QGPTConversationPipelineForContextualizedCodeGeneration = {
    "schema": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTConversationPipelineForContextualizedCodeGeneration;
console.log(exampleParsed);
```




