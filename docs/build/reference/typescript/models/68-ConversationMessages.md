
# ConversationMessages Model

This is a plural version of ConversationMessage.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;ConversationMessage&gt;**](ConversationMessage)
**indices** | **\{ [key: string]: number; \}**
**score** | [**Score**](Score)

## Example Model

```typescript
import { ConversationMessages } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ConversationMessages = {
    "schema": null,
    "iterable": null,
    "indices": null,
    "score": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConversationMessages
console.log(exampleParsed)
```


