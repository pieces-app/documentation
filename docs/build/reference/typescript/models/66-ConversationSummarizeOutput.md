
# ConversationSummarizeOutput

This is the output model for \"/conversation/\{conversation\}/summarize

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**conversation** | [**ReferencedConversation**](ReferencedConversation)
**annotation** | [**ReferencedAnnotation**](ReferencedAnnotation)

## Example

```typescript
import { ConversationSummarizeOutput } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: ConversationSummarizeOutput = {
    "schema": null,
    "conversation": null,
    "annotation": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConversationSummarizeOutput;
console.log(exampleParsed);
```


