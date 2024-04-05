
# QGPTConversationMessage

This will take a single message, and a role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**text** | **string** |  | [default to undefined]
**role** | [**QGPTConversationMessageRoleEnum**](QGPTConversationMessageRoleEnum) |  | [default to undefined]
**timestamp** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]

## Example

```typescript
import { QGPTConversationMessage } from '';

// TODO: Update the object below with actual values
const example: QGPTConversationMessage = {
    "schema": null, // 
    "text": null, // 
    "role": null, // 
    "timestamp": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTConversationMessage;
console.log(exampleParsed);
```




