
# SeededTrackedAssetEvent

This seeded tracked asset event will be recieved by a context on the OS Server side, which will then be able to look up the asset id and structure the asset for shipment to Segment aka a fully built TrackedAssetEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**asset** | [**ReferencedAsset**](ReferencedAsset) |  | [default to undefined]
**identifierDescriptionPair** | [**TrackedAssetEventIdentifierDescriptionPairs**](TrackedAssetEventIdentifierDescriptionPairs) |  | [default to undefined]
**metadata** | [**TrackedAssetEventMetadata**](TrackedAssetEventMetadata) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededTrackedAssetEvent } from '';

// TODO: Update the object below with actual values
const example: SeededTrackedAssetEvent = {
    "schema": null, // 
    "asset": null, // 
    "identifierDescriptionPair": null, // 
    "metadata": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededTrackedAssetEvent;
console.log(exampleParsed);
```




