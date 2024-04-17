---
title: TrackedConversationEventRenameMetadata | TypeScript SDK
---


# TrackedConversationEventRenameMetadata

This will give specific metadata need to determine what the rename was to/from.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**previous** | **string**
**current** | **string**

## Example

```typescript
import { TrackedConversationEventRenameMetadata } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TrackedConversationEventRenameMetadata = {
    "schema": null,
    "previous": null,
    "current": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedConversationEventRenameMetadata
console.log(exampleParsed)
```


