
# QGPTPromptPipeline

This is a model related to switching between different prompts based on if we are dealing with  various tasks or if we are attempting to converse with LLMs via conversation.  You will have 2 options-  1) task- This is specifically for 1 off task operations for instance explaning a bit of code 2) conversation- This is specifically for conversing with our LLMs, will provide better results && high fedility                responses for instance contextualize code conversations.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**task** | [**QGPTTaskPipeline**](QGPTTaskPipeline)
**conversation** | [**QGPTConversationPipeline**](QGPTConversationPipeline)

## Example

```typescript
import { QGPTPromptPipeline } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: QGPTPromptPipeline = {
    "schema": null,
    "task": null,
    "conversation": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTPromptPipeline;
console.log(exampleParsed);
```


