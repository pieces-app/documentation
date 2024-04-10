
# ReferencedConversationMessage Model

This is a DAG-Safe Minimal version of a ConversationMessage.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**reference** | [**FlattenedConversationMessage**](FlattenedConversationMessage)

## Example Model

```typescript
import { ReferencedConversationMessage } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ReferencedConversationMessage = {
    "schema": null,
    "id": null,
    "reference": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedConversationMessage
console.log(exampleParsed)
```


