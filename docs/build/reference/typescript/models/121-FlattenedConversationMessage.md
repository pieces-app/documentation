---
title: FlattenedConversationMessage | TypeScript SDK
---


# FlattenedConversationMessage

This is a flattened DAG safe version of a ConversationMessage.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**model** | [**Model**](Model)
**fragment** | [**FragmentFormat**](FragmentFormat)
**conversation** | [**ReferencedConversation**](ReferencedConversation)
**sentiment** | [**ConversationMessageSentimentEnum**](ConversationMessageSentimentEnum)
**role** | [**QGPTConversationMessageRoleEnum**](QGPTConversationMessageRoleEnum)
**score** | [**Score**](Score)
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations)

## Example

```typescript
import { FlattenedConversationMessage } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FlattenedConversationMessage = {
    "schema": null,
    "id": null,
    "created": null,
    "updated": null,
    "deleted": null,
    "model": null,
    "fragment": null,
    "conversation": null,
    "sentiment": null,
    "role": null,
    "score": null,
    "annotations": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedConversationMessage
console.log(exampleParsed)
```


