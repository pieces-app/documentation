
# DiscoveredAsset Model



## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**file** | [**SeededFile**](SeededFile)
**fragment** | [**SeededFragment**](SeededFragment)
**directory** | **string**
**metadata** | [**SeededAssetMetadata**](SeededAssetMetadata)
**filters** | [**TLPDirectedDiscoveryFilters**](TLPDirectedDiscoveryFilters)

## Example Model

```typescript
import { DiscoveredAsset } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: DiscoveredAsset = {
    "schema": null,
    "file": null,
    "fragment": null,
    "directory": null,
    "metadata": null,
    "filters": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiscoveredAsset
console.log(exampleParsed)
```


