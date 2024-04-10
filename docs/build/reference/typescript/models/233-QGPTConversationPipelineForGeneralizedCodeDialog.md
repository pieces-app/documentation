
# QGPTConversationPipelineForGeneralizedCodeDialog Model

This is for the users that wants to have generalized code conversations without any context.  This is a class so that we can add optional properties in the future.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)

## Example Model

```typescript
import { QGPTConversationPipelineForGeneralizedCodeDialog } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: QGPTConversationPipelineForGeneralizedCodeDialog = {
    "schema": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTConversationPipelineForGeneralizedCodeDialog
console.log(exampleParsed)
```


