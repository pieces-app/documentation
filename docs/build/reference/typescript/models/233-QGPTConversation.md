---
title: QGPTConversation | TypeScript SDK
---


# QGPTConversation


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;QGPTConversationMessage&gt;**](QGPTConversationMessage)

## Example

```typescript
import { QGPTConversation } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: QGPTConversation = {
    "schema": null,
    "iterable": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTConversation
console.log(exampleParsed)
```


