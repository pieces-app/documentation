
# QGPTConversationPipelineForContextualizedCodeWorkstreamDialog

This is for the users that wants to have contextualized code conversations around their workstream materials, meaning conversations around code with Context provided, as well as workstream information ie information gathered from the WPE.  This is a class so that we can add optional properties in the future.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)

## Example

```typescript
import { QGPTConversationPipelineForContextualizedCodeWorkstreamDialog } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: QGPTConversationPipelineForContextualizedCodeWorkstreamDialog = {
    "schema": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTConversationPipelineForContextualizedCodeWorkstreamDialog
console.log(exampleParsed)
```


