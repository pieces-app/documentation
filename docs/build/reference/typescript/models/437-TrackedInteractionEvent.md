
# TrackedInteractionEvent

This is a model that will hold relavent information in relation to an interaction(ONLY CLICK/TAP) analytics event(usage). If you want to register an event that relates to an interaction with the key then register a Keyboard Event. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**description** | **string** | (optional) a description of this button that was clicked. or maybe what it did. | [default to undefined]
**element** | **string** | This is an identifer that will allow the developer to know what unique button/field was interacted with. | [optional] [default to undefined]

## Example

```typescript
import { TrackedInteractionEvent } from '';

// TODO: Update the object below with actual values
const example: TrackedInteractionEvent = {
    "schema": null, // 
    "description": null, // (optional) a description of this button that was clicked. or maybe what it did.
    "element": null, // This is an identifer that will allow the developer to know what unique button/field was interacted with.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedInteractionEvent;
console.log(exampleParsed);
```




