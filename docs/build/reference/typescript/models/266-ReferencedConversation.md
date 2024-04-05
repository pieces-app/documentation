
# ReferencedConversation

This is a DAG-Safe Minimal version of a Conversation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**reference** | [**FlattenedConversation**](FlattenedConversation) |  | [optional] [default to undefined]

## Example

```typescript
import { ReferencedConversation } from '';

// TODO: Update the object below with actual values
const example: ReferencedConversation = {
    "schema": null, // 
    "id": null, // 
    "reference": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedConversation;
console.log(exampleParsed);
```




