
# QGPTStreamInput

This is the input for the /qgpt/stream endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**relevance** | [**QGPTRelevanceInput**](QGPTRelevanceInput) |  | [optional] [default to undefined]
**question** | [**QGPTQuestionInput**](QGPTQuestionInput) |  | [optional] [default to undefined]
**request** | **string** | This is an optional Id you can use to identify the result from your request. | [optional] [default to undefined]
**conversation** | **string** | This is the ID of a predefined persisted conversation, if this is not present we will create a new conversation for the input/output.(in the case of a question) | [optional] [default to undefined]
**stop** | **boolean** |  | [optional] [default to undefined]
**agent** | **boolean** | This will let us know if we want to run the agent routing as well, this is default to true. However if set to false you will save on processing and you will recieve null for the agentRoutes class on the QGPTStreamOutput. | [optional] [default to undefined]

## Example

```typescript
import { QGPTStreamInput } from '';

// TODO: Update the object below with actual values
const example: QGPTStreamInput = {
    "relevance": null, // 
    "question": null, // 
    "request": null, // This is an optional Id you can use to identify the result from your request.
    "conversation": null, // This is the ID of a predefined persisted conversation, if this is not present we will create a new conversation for the input/output.(in the case of a question)
    "stop": null, // 
    "agent": null, // This will let us know if we want to run the agent routing as well, this is default to true. However if set to false you will save on processing and you will recieve null for the agentRoutes class on the QGPTStreamOutput.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTStreamInput;
console.log(exampleParsed);
```




