
# SeededConversationMessage

This is a seeded version of a ConversationMessage.  conversation is optional, this is because it can be used within the SeededConversation, however if this is passed into the /messages/create w/o a conversation uuid then we will throw an error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**model** | [**Model**](Model) |  | [optional] [default to undefined]
**fragment** | [**FragmentFormat**](FragmentFormat) |  | [default to undefined]
**conversation** | [**ReferencedConversation**](ReferencedConversation) |  | [optional] [default to undefined]
**sentiment** | [**ConversationMessageSentimentEnum**](ConversationMessageSentimentEnum) |  | [optional] [default to undefined]
**role** | [**QGPTConversationMessageRoleEnum**](QGPTConversationMessageRoleEnum) |  | [default to undefined]

## Example

```typescript
import { SeededConversationMessage } from '';

// TODO: Update the object below with actual values
const example: SeededConversationMessage = {
    "schema": null, // 
    "created": null, // 
    "model": null, // 
    "fragment": null, // 
    "conversation": null, // 
    "sentiment": null, // 
    "role": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededConversationMessage;
console.log(exampleParsed);
```




