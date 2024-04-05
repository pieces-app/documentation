
# SearchedAsset

This is a modle that will represent a searched asset!

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**asset** | [**Asset**](Asset) |  | [optional] [default to undefined]
**exact** | **boolean** |  | [default to undefined]
**score** | **number** |  | [default to undefined]
**match** | [**SearchedMatchEnum**](SearchedMatchEnum) |  | [default to undefined]
**identifier** | **string** | This is the uuid of the asset. | [default to undefined]
**pseudo** | **boolean** | If this is a pseudo asset that was also returned. | [optional] [default to undefined]

## Example

```typescript
import { SearchedAsset } from '';

// TODO: Update the object below with actual values
const example: SearchedAsset = {
    "schema": null, // 
    "asset": null, // 
    "exact": null, // 
    "score": null, // 
    "match": null, // 
    "identifier": null, // This is the uuid of the asset.
    "pseudo": null, // If this is a pseudo asset that was also returned.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchedAsset;
console.log(exampleParsed);
```




