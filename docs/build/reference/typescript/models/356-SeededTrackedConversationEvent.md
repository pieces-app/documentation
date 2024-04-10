
# SeededTrackedConversationEvent

This is a pre-created(seed) TrackedConversationEvent

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**identifierDescriptionPair** | [**TrackedConversationEventIdentifierDescriptionPairs**](TrackedConversationEventIdentifierDescriptionPairs)
**conversation** | [**ReferencedConversation**](ReferencedConversation)
**metadata** | [**TrackedConversationEventMetadata**](TrackedConversationEventMetadata)

## Example

```typescript
import { SeededTrackedConversationEvent } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededTrackedConversationEvent = {
    "schema": null,
    "identifierDescriptionPair": null,
    "conversation": null,
    "metadata": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededTrackedConversationEvent
console.log(exampleParsed)
```


