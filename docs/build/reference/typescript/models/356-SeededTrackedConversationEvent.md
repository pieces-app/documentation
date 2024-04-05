
# SeededTrackedConversationEvent

This is a pre-created(seed) TrackedConversationEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**identifierDescriptionPair** | [**TrackedConversationEventIdentifierDescriptionPairs**](TrackedConversationEventIdentifierDescriptionPairs) |  | [default to undefined]
**conversation** | [**ReferencedConversation**](ReferencedConversation) |  | [default to undefined]
**metadata** | [**TrackedConversationEventMetadata**](TrackedConversationEventMetadata) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededTrackedConversationEvent } from '';

// TODO: Update the object below with actual values
const example: SeededTrackedConversationEvent = {
    "schema": null, // 
    "identifierDescriptionPair": null, // 
    "conversation": null, // 
    "metadata": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededTrackedConversationEvent;
console.log(exampleParsed);
```




