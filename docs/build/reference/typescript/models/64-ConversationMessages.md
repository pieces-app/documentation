
# ConversationMessages

This is a plural version of ConversationMessage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**iterable** | [**Array&lt;ConversationMessage&gt;**](ConversationMessage) |  | [default to undefined]
**indices** | **\{ [key: string]: number; \}** | This is a Map&lt;String, int&gt; where the the key is an ConversationMessage id. | [optional] [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]

## Example

```typescript
import { ConversationMessages } from '';

// TODO: Update the object below with actual values
const example: ConversationMessages = {
    "schema": null, // 
    "iterable": null, // 
    "indices": null, // This is a Map&lt;String, int&gt; where the the key is an ConversationMessage id.
    "score": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConversationMessages;
console.log(exampleParsed);
```




