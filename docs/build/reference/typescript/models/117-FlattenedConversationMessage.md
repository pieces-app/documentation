
# FlattenedConversationMessage

This is a flattened DAG safe version of a ConversationMessage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**model** | [**Model**](Model) |  | [optional] [default to undefined]
**fragment** | [**FragmentFormat**](FragmentFormat) |  | [optional] [default to undefined]
**conversation** | [**ReferencedConversation**](ReferencedConversation) |  | [default to undefined]
**sentiment** | [**ConversationMessageSentimentEnum**](ConversationMessageSentimentEnum) |  | [optional] [default to undefined]
**role** | [**QGPTConversationMessageRoleEnum**](QGPTConversationMessageRoleEnum) |  | [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations) |  | [optional] [default to undefined]

## Example

```typescript
import { FlattenedConversationMessage } from '';

// TODO: Update the object below with actual values
const example: FlattenedConversationMessage = {
    "schema": null, // 
    "id": null, // 
    "created": null, // 
    "updated": null, // 
    "deleted": null, // 
    "model": null, // 
    "fragment": null, // 
    "conversation": null, // 
    "sentiment": null, // 
    "role": null, // 
    "score": null, // 
    "annotations": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedConversationMessage;
console.log(exampleParsed);
```




