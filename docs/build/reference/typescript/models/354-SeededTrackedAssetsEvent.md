
# SeededTrackedAssetsEvent

An seeded event model that can occur at the assets level i.e. search 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**identifierDescriptionPair** | [**TrackedAssetsEventIdentifierDescriptionPairs**](TrackedAssetsEventIdentifierDescriptionPairs) |  | [optional] [default to undefined]
**metadata** | [**SeededTrackedAssetsEventMetadata**](SeededTrackedAssetsEventMetadata) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededTrackedAssetsEvent } from '';

// TODO: Update the object below with actual values
const example: SeededTrackedAssetsEvent = {
    "schema": null, // 
    "identifierDescriptionPair": null, // 
    "metadata": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededTrackedAssetsEvent;
console.log(exampleParsed);
```




