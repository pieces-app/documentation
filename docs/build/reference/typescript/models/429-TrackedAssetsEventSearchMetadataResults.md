
# TrackedAssetsEventSearchMetadataResults

Numbers related to search results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fuzzy** | **number** | Total number of fuzzy results | [optional] [default to undefined]
**exact** | **number** | Total number of exact results | [optional] [default to undefined]
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] [default to undefined]
**space** | [**Space**](Space) |  | [optional] [default to undefined]

## Example

```typescript
import { TrackedAssetsEventSearchMetadataResults } from '';

// TODO: Update the object below with actual values
const example: TrackedAssetsEventSearchMetadataResults = {
    "fuzzy": null, // Total number of fuzzy results
    "exact": null, // Total number of exact results
    "assets": null, // 
    "space": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedAssetsEventSearchMetadataResults;
console.log(exampleParsed);
```




