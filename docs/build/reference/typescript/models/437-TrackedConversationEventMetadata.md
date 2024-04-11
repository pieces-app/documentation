
# TrackedConversationEventMetadata Model

This is the metadata for the the ConversationEvent

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**rename** | [**TrackedConversationEventRenameMetadata**](TrackedConversationEventRenameMetadata)

## Example Model

```typescript
import { TrackedConversationEventMetadata } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TrackedConversationEventMetadata = {
    "schema": null,
    "rename": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedConversationEventMetadata
console.log(exampleParsed)
```


