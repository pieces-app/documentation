
# QGPTStreamInput

This is the input for the /qgpt/stream endpoint.

## Properties

Name | Type
------------ | -------------
**relevance** | [**QGPTRelevanceInput**](QGPTRelevanceInput)
**question** | [**QGPTQuestionInput**](QGPTQuestionInput)
**request** | **string**
**conversation** | **string**
**stop** | **boolean**
**agent** | **boolean**

## Example

```typescript
import { QGPTStreamInput } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: QGPTStreamInput = {
    "relevance": null,
    "question": null,
    "request": null,
    "conversation": null,
    "stop": null,
    "agent": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTStreamInput;
console.log(exampleParsed);
```


