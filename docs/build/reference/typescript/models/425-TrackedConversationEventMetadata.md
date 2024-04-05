
# TrackedConversationEventMetadata

This is the metadata for the the ConversationEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**rename** | [**TrackedConversationEventRenameMetadata**](TrackedConversationEventRenameMetadata) |  | [optional] [default to undefined]

## Example

```typescript
import { TrackedConversationEventMetadata } from '';

// TODO: Update the object below with actual values
const example: TrackedConversationEventMetadata = {
    "schema": null, // 
    "rename": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedConversationEventMetadata;
console.log(exampleParsed);
```




