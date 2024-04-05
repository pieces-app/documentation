
# SearchedAssets

This is a modle that will return fro mthe search endpoint that will just contain an array of assets!

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**iterable** | [**Array&lt;SearchedAsset&gt;**](SearchedAsset) |  | [default to undefined]
**suggested** | **number** | the number of fuzzy/suggested search results. | [default to undefined]
**exact** | **number** | the number of exact results | [default to undefined]

## Example

```typescript
import { SearchedAssets } from '';

// TODO: Update the object below with actual values
const example: SearchedAssets = {
    "schema": null, // 
    "iterable": null, // 
    "suggested": null, // the number of fuzzy/suggested search results.
    "exact": null, // the number of exact results
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchedAssets;
console.log(exampleParsed);
```




