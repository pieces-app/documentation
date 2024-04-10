
# QGPTRepromptInput Model

Query is your followup question.  Conversation is a list of the back and fourth with the qgpt bot. where the first entry in the array was the last message sent.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**query** | **string**
**conversation** | [**QGPTConversation**](QGPTConversation)
**application** | **string**
**model** | **string**
**pipeline** | [**QGPTPromptPipeline**](QGPTPromptPipeline)

## Example Model

```typescript
import { QGPTRepromptInput } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: QGPTRepromptInput = {
    "schema": null,
    "query": null,
    "conversation": null,
    "application": null,
    "model": null,
    "pipeline": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTRepromptInput
console.log(exampleParsed)
```


