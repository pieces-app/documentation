
# SeededAssetTag

This is similar to an SeededTag, where this is the minimum information of a tag, but this can get added to a seededAsset,  where you may not yet have an asset id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**text** | **string** | this is the text that represents the tag. | [default to undefined]
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] [default to undefined]
**category** | [**TagCategoryEnum**](TagCategoryEnum) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededAssetTag } from '';

// TODO: Update the object below with actual values
const example: SeededAssetTag = {
    "schema": null, // 
    "text": null, // this is the text that represents the tag.
    "mechanism": null, // 
    "category": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededAssetTag;
console.log(exampleParsed);
```




