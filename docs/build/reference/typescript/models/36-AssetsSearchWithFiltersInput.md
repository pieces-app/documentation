
# AssetsSearchWithFiltersInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**query** | **string** |  | [optional] [default to undefined]
**space** | [**AssetSearchSpace**](AssetSearchSpace) |  | [optional] [default to undefined]
**filters** | [**AssetFilters**](AssetFilters) |  | [optional] [default to undefined]
**casing** | **boolean** | This is an optional bool that will let us know, if we want to ignore case or not.(default is to allow casing)ie casing:true. | [optional] [default to undefined]

## Example

```typescript
import { AssetsSearchWithFiltersInput } from '';

// TODO: Update the object below with actual values
const example: AssetsSearchWithFiltersInput = {
    "schema": null, // 
    "query": null, // 
    "space": null, // 
    "filters": null, // 
    "casing": null, // This is an optional bool that will let us know, if we want to ignore case or not.(default is to allow casing)ie casing:true.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetsSearchWithFiltersInput;
console.log(exampleParsed);
```




