
# ConversationGrounding

This is the context used for grounding the ml models with reguard to a conversation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages) |  | [optional] [default to undefined]
**temporal** | [**TemporalRangeGrounding**](TemporalRangeGrounding) |  | [optional] [default to undefined]

## Example

```typescript
import { ConversationGrounding } from '';

// TODO: Update the object below with actual values
const example: ConversationGrounding = {
    "schema": null, // 
    "messages": null, // 
    "temporal": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConversationGrounding;
console.log(exampleParsed);
```




