
# SeededTrackedSessionEvent

A simple model to capture a Tracked Session to be send to the Connection API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**identifierDescriptionPair** | [**TrackedSessionEventIdentifierDescriptionPairs**](TrackedSessionEventIdentifierDescriptionPairs) |  | [default to undefined]

## Example

```typescript
import { SeededTrackedSessionEvent } from '';

// TODO: Update the object below with actual values
const example: SeededTrackedSessionEvent = {
    "schema": null, // 
    "identifierDescriptionPair": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededTrackedSessionEvent;
console.log(exampleParsed);
```




