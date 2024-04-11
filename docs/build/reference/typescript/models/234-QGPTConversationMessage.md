
# QGPTConversationMessage Model

This will take a single message, and a role.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**text** | **string**
**role** | [**QGPTConversationMessageRoleEnum**](QGPTConversationMessageRoleEnum)
**timestamp** | [**GroupedTimestamp**](GroupedTimestamp)

## Example Model

```typescript
import { QGPTConversationMessage } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: QGPTConversationMessage = {
    "schema": null,
    "text": null,
    "role": null,
    "timestamp": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTConversationMessage
console.log(exampleParsed)
```


