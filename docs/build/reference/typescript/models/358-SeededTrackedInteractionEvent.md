
# SeededTrackedInteractionEvent

This is a model that will hold relavent information in relation to an interaction(ONLY CLICK/TAP) analytics event(usage). If you want to register an event that relates to an interaction with the key then register a Keyboard Event. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**description** | **string** | These need structure | [default to undefined]
**element** | **string** |  | [optional] [default to undefined]
**identifierDescriptionPair** | [**SeededTrackedInteractionEventIdentifierDescriptionPairs**](SeededTrackedInteractionEventIdentifierDescriptionPairs) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededTrackedInteractionEvent } from '';

// TODO: Update the object below with actual values
const example: SeededTrackedInteractionEvent = {
    "schema": null, // 
    "description": null, // These need structure
    "element": null, // 
    "identifierDescriptionPair": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededTrackedInteractionEvent;
console.log(exampleParsed);
```




