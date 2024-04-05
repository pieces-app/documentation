
# DiscoveredAsset



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**file** | [**SeededFile**](SeededFile) |  | [optional] [default to undefined]
**fragment** | [**SeededFragment**](SeededFragment) |  | [optional] [default to undefined]
**directory** | **string** |  | [optional] [default to undefined]
**metadata** | [**SeededAssetMetadata**](SeededAssetMetadata) |  | [optional] [default to undefined]
**filters** | [**TLPDirectedDiscoveryFilters**](TLPDirectedDiscoveryFilters) |  | [optional] [default to undefined]

## Example

```typescript
import { DiscoveredAsset } from '';

// TODO: Update the object below with actual values
const example: DiscoveredAsset = {
    "schema": null, // 
    "file": null, // 
    "fragment": null, // 
    "directory": null, // 
    "metadata": null, // 
    "filters": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiscoveredAsset;
console.log(exampleParsed);
```




