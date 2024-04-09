
# DiscoveredAssets

This is a plural Model that is used within the bulk upload flow in both cases of a file(&& needing snippitization) as well as if the fragments are passed in and they only need to be clustered.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**application** | **string**
**iterable** | [**Array&lt;DiscoveredAsset&gt;**](DiscoveredAsset)

## Example

```typescript
import { DiscoveredAssets } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: DiscoveredAssets = {
    "schema": null,
    "application": null,
    "iterable": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiscoveredAssets;
console.log(exampleParsed);
```


