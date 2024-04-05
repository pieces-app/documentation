
# SeededTrackedKeyboardEvent

This is a model that will hold relavent information in relation to a keyboard(including shortcuts) analytics event (usage).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**description** | **string** | This also needs structure such as key vals or enums | [default to undefined]
**shortcut** | **Array&lt;number&gt;** |  | [default to undefined]
**identifierDescriptionPair** | [**SeededTrackedKeyboardEventIdentifierDescriptionPairs**](SeededTrackedKeyboardEventIdentifierDescriptionPairs) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededTrackedKeyboardEvent } from '';

// TODO: Update the object below with actual values
const example: SeededTrackedKeyboardEvent = {
    "schema": null, // 
    "description": null, // This also needs structure such as key vals or enums
    "shortcut": null, // 
    "identifierDescriptionPair": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededTrackedKeyboardEvent;
console.log(exampleParsed);
```




