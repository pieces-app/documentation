
# TrackedAssetsEventIdentifierDescriptionPairs

These are all of the available event types that are permitted in an object pair notation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**assetsSearched** | **string** | A If the assets were searched | [optional] [default to undefined]

## Example

```typescript
import { TrackedAssetsEventIdentifierDescriptionPairs } from '';

// TODO: Update the object below with actual values
const example: TrackedAssetsEventIdentifierDescriptionPairs = {
    "schema": null, // 
    "assetsSearched": null, // A If the assets were searched
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedAssetsEventIdentifierDescriptionPairs;
console.log(exampleParsed);
```




