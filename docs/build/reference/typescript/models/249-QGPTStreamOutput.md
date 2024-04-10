
# QGPTStreamOutput

This is the out for the /qgpt/stream endpoint.  200: success 401: invalid authentication/api key 429: Rate limit/Quota exceeded 500: server had an error 503: the engine is currently overloaded

## Properties

Name | Type
------------ | -------------
**request** | **string**
**relevance** | [**QGPTRelevanceOutput**](QGPTRelevanceOutput)
**question** | [**QGPTQuestionOutput**](QGPTQuestionOutput)
**status** | [**QGPTStreamEnum**](QGPTStreamEnum)
**conversation** | **string**
**statusCode** | **number**
**errorMessage** | **string**
**agentRoutes** | [**QGPTAgentRoutes**](QGPTAgentRoutes)

## Example

```typescript
import { QGPTStreamOutput } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: QGPTStreamOutput = {
    "request": null,
    "relevance": null,
    "question": null,
    "status": null,
    "conversation": null,
    "statusCode": null,
    "errorMessage": null,
    "agentRoutes": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTStreamOutput
console.log(exampleParsed)
```


