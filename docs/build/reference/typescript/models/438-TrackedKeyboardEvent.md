
# TrackedKeyboardEvent

This is a model that will hold relavent information in relation to a keyboard(including shortcuts) analytics event (usage).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**description** | **string** | this is a description of the event, optional. | [default to undefined]
**shortcut** | **Array&lt;number&gt;** | this is an array of of ascii values that represent numerics on your keyboard. | [default to undefined]

## Example

```typescript
import { TrackedKeyboardEvent } from '';

// TODO: Update the object below with actual values
const example: TrackedKeyboardEvent = {
    "schema": null, // 
    "description": null, // this is a description of the event, optional.
    "shortcut": null, // this is an array of of ascii values that represent numerics on your keyboard.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedKeyboardEvent;
console.log(exampleParsed);
```




