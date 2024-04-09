
# TrackedAssetsEventIdentifierDescriptionPairs

These are all of the available event types that are permitted in an object pair notation.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**assetsSearched** | **string**

## Example

```typescript
import { TrackedAssetsEventIdentifierDescriptionPairs } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: TrackedAssetsEventIdentifierDescriptionPairs = {
    "schema": null,
    "assetsSearched": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedAssetsEventIdentifierDescriptionPairs;
console.log(exampleParsed);
```


