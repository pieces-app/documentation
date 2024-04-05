
# QGPTRepromptInput

Query is your followup question.  Conversation is a list of the back and fourth with the qgpt bot. where the first entry in the array was the last message sent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**query** | **string** |  | [default to undefined]
**conversation** | [**QGPTConversation**](QGPTConversation) |  | [default to undefined]
**application** | **string** | optional application id | [optional] [default to undefined]
**model** | **string** | optional model id | [optional] [default to undefined]
**pipeline** | [**QGPTPromptPipeline**](QGPTPromptPipeline) |  | [optional] [default to undefined]

## Example

```typescript
import { QGPTRepromptInput } from '';

// TODO: Update the object below with actual values
const example: QGPTRepromptInput = {
    "schema": null, // 
    "query": null, // 
    "conversation": null, // 
    "application": null, // optional application id
    "model": null, // optional model id
    "pipeline": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTRepromptInput;
console.log(exampleParsed);
```




