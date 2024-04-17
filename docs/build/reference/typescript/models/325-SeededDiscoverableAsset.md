
# SeededDiscoverableAsset

Assumption: filters applied in this model will overwrite filters passed in SeededDiscoverableAssets

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**file** | [**SeededFile**](SeededFile)
**fragment** | [**SeededFragment**](SeededFragment)
**directory** | **string**
**filters** | [**TLPDirectedDiscoveryFilters**](TLPDirectedDiscoveryFilters)

## Example

```typescript
import { SeededDiscoverableAsset } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededDiscoverableAsset = {
    "schema": null,
    "file": null,
    "fragment": null,
    "directory": null,
    "filters": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededDiscoverableAsset
console.log(exampleParsed)
```


