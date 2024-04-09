
# SeededTrackedSessionEvent

A simple model to capture a Tracked Session to be send to the Connection API

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**identifierDescriptionPair** | [**TrackedSessionEventIdentifierDescriptionPairs**](TrackedSessionEventIdentifierDescriptionPairs)

## Example

```typescript
import { SeededTrackedSessionEvent } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: SeededTrackedSessionEvent = {
    "schema": null,
    "identifierDescriptionPair": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededTrackedSessionEvent;
console.log(exampleParsed);
```


