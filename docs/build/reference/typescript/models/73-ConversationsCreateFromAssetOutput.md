
# ConversationsCreateFromAssetOutput Model

This is the model for the output for the \"/conversations/create/from_asset/\{asset\}\" endpoints.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**conversation** | [**ReferencedConversation**](ReferencedConversation)

## Example Model

```typescript
import { ConversationsCreateFromAssetOutput } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ConversationsCreateFromAssetOutput = {
    "schema": null,
    "conversation": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConversationsCreateFromAssetOutput
console.log(exampleParsed)
```


