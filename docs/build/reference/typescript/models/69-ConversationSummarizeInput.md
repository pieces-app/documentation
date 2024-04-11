
# ConversationSummarizeInput

Optionally you may pass in a list of conversation message that you would like to use for the summary.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages)

## Example

```typescript
import { ConversationSummarizeInput } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ConversationSummarizeInput = {
    "schema": null,
    "messages": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConversationSummarizeInput
console.log(exampleParsed)
```


