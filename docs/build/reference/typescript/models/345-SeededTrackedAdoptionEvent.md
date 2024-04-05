
# SeededTrackedAdoptionEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**identifierDescriptionPair** | [**AnalyticsTrackedAdoptionEventIdentifierDescriptionPairs**](AnalyticsTrackedAdoptionEventIdentifierDescriptionPairs) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededTrackedAdoptionEvent } from '';

// TODO: Update the object below with actual values
const example: SeededTrackedAdoptionEvent = {
    "schema": null, // 
    "identifierDescriptionPair": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededTrackedAdoptionEvent;
console.log(exampleParsed);
```




