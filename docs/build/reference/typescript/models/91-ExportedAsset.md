
# ExportedAsset

This is a model for a minimum exported version of an asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | this is the title of the asset  | [default to undefined]
**description** | **string** | this is the description of the asset | [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**raw** | [**FileFormat**](FileFormat) |  | [default to undefined]

## Example

```typescript
import { ExportedAsset } from '';

// TODO: Update the object below with actual values
const example: ExportedAsset = {
    "name": null, // this is the title of the asset 
    "description": null, // this is the description of the asset
    "created": null, // 
    "raw": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExportedAsset;
console.log(exampleParsed);
```




