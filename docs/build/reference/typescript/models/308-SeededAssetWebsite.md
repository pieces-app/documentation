
# SeededAssetWebsite

This is similar to an SeededWebsite, where this is the minimum information of a website, but this can get added to a seededAsset,  where you may not yet have an asset id.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**url** | **string**
**name** | **string**
**mechanism** | [**MechanismEnum**](MechanismEnum)

## Example

```typescript
import { SeededAssetWebsite } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: SeededAssetWebsite = {
    "schema": null,
    "url": null,
    "name": null,
    "mechanism": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededAssetWebsite;
console.log(exampleParsed);
```


