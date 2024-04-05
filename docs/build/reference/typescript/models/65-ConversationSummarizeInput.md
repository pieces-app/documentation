
# ConversationSummarizeInput

Optionally you may pass in a list of conversation message that you would like to use for the summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages) |  | [optional] [default to undefined]

## Example

```typescript
import { ConversationSummarizeInput } from '';

// TODO: Update the object below with actual values
const example: ConversationSummarizeInput = {
    "schema": null, // 
    "messages": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConversationSummarizeInput;
console.log(exampleParsed);
```




