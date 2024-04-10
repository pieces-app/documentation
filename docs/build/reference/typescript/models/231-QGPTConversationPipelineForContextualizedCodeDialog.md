
# QGPTConversationPipelineForContextualizedCodeDialog

This is for the users that wants to have contextualized code conversations, meaning conversations around code with Context provided.  This is a class so that we can add optional properties in the future.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)

## Example

```typescript
import { QGPTConversationPipelineForContextualizedCodeDialog } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: QGPTConversationPipelineForContextualizedCodeDialog = {
    "schema": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTConversationPipelineForContextualizedCodeDialog
console.log(exampleParsed)
```


