
# FlattenedConversations Model

Flattened version of conversations.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;ReferencedConversation&gt;**](ReferencedConversation)
**indices** | **\{ [key: string]: number; \}**
**score** | [**Score**](Score)

## Example Model

```typescript
import { FlattenedConversations } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FlattenedConversations = {
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
const exampleParsed = JSON.parse(exampleJSON) as FlattenedConversations
console.log(exampleParsed)
```


