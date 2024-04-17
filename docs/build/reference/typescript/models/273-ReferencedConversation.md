---
title: ReferencedConversation | TypeScript SDK
---


# ReferencedConversation

This is a DAG-Safe Minimal version of a Conversation.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**reference** | [**FlattenedConversation**](FlattenedConversation)

## Example

```typescript
import { ReferencedConversation } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ReferencedConversation = {
    "schema": null,
    "id": null,
    "reference": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedConversation
console.log(exampleParsed)
```


