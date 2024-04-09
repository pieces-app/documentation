
# SeededConversationMessage

This is a seeded version of a ConversationMessage.  conversation is optional, this is because it can be used within the SeededConversation, however if this is passed into the /messages/create w/o a conversation uuid then we will throw an error.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**model** | [**Model**](Model)
**fragment** | [**FragmentFormat**](FragmentFormat)
**conversation** | [**ReferencedConversation**](ReferencedConversation)
**sentiment** | [**ConversationMessageSentimentEnum**](ConversationMessageSentimentEnum)
**role** | [**QGPTConversationMessageRoleEnum**](QGPTConversationMessageRoleEnum)

## Example

```typescript
import { SeededConversationMessage } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: SeededConversationMessage = {
    "schema": null,
    "created": null,
    "model": null,
    "fragment": null,
    "conversation": null,
    "sentiment": null,
    "role": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededConversationMessage;
console.log(exampleParsed);
```


