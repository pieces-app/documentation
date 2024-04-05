
# QGPTStreamOutput

This is the out for the /qgpt/stream endpoint.  200: success 401: invalid authentication/api key 429: Rate limit/Quota exceeded 500: server had an error 503: the engine is currently overloaded

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request** | **string** | This is the id used to represent the stream of response. this will always be present. We will use the value passed inby the client, or we will generate one. | [optional] [default to undefined]
**relevance** | [**QGPTRelevanceOutput**](QGPTRelevanceOutput) |  | [optional] [default to undefined]
**question** | [**QGPTQuestionOutput**](QGPTQuestionOutput) |  | [optional] [default to undefined]
**status** | [**QGPTStreamEnum**](QGPTStreamEnum) |  | [optional] [default to undefined]
**conversation** | **string** | This is the ID of a predefined persisted conversation, if this is not present we will create a new conversation for the input/output.(in the case of a question) | [default to undefined]
**statusCode** | **number** | This will be provided | [optional] [default to undefined]
**errorMessage** | **string** | optional error message is the status code is NOT 200 | [optional] [default to undefined]
**agentRoutes** | [**QGPTAgentRoutes**](QGPTAgentRoutes) |  | [optional] [default to undefined]

## Example

```typescript
import { QGPTStreamOutput } from '';

// TODO: Update the object below with actual values
const example: QGPTStreamOutput = {
    "request": null, // This is the id used to represent the stream of response. this will always be present. We will use the value passed inby the client, or we will generate one.
    "relevance": null, // 
    "question": null, // 
    "status": null, // 
    "conversation": null, // This is the ID of a predefined persisted conversation, if this is not present we will create a new conversation for the input/output.(in the case of a question)
    "statusCode": null, // This will be provided
    "errorMessage": null, // optional error message is the status code is NOT 200
    "agentRoutes": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTStreamOutput;
console.log(exampleParsed);
```




