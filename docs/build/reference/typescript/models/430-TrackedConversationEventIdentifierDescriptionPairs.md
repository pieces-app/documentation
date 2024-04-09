
# TrackedConversationEventIdentifierDescriptionPairs

These are all of the available event types that are permitted in an object pair notation.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**conversationCreated** | **string**
**conversationReferenced** | **string**
**conversationDeleted** | **string**
**conversationSummaryAnnotationGeneratedByTheUser** | **string**
**conversationNameUpdatedByTheSystem** | **string**
**conversationNameUpdatedByTheUser** | **string**
**conversationSummaryAnnotationGeneratedByTheSystem** | **string**

## Example

```typescript
import { TrackedConversationEventIdentifierDescriptionPairs } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: TrackedConversationEventIdentifierDescriptionPairs = {
    "schema": null,
    "conversationCreated": null,
    "conversationReferenced": null,
    "conversationDeleted": null,
    "conversationSummaryAnnotationGeneratedByTheUser": null,
    "conversationNameUpdatedByTheSystem": null,
    "conversationNameUpdatedByTheUser": null,
    "conversationSummaryAnnotationGeneratedByTheSystem": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedConversationEventIdentifierDescriptionPairs;
console.log(exampleParsed);
```


