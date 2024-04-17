
# SeededDiscoverableAssets

Assumption: filters imposed in this model can be overwritten by passing them in SeededDiscoverableAsset

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**application** | **string**
**iterable** | [**Array&lt;SeededDiscoverableAsset&gt;**](SeededDiscoverableAsset)
**filters** | [**TLPDirectedDiscoveryFilters**](TLPDirectedDiscoveryFilters)

## Example

```typescript
import { SeededDiscoverableAssets } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededDiscoverableAssets = {
    "schema": null,
    "application": null,
    "iterable": null,
    "filters": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededDiscoverableAssets
console.log(exampleParsed)
```


