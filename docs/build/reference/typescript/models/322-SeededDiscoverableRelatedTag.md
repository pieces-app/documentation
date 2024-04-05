
# SeededDiscoverableRelatedTag



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**text** | **string** | This is the description of the tag. | [default to undefined]
**asset** | **string** | this is a uuid that references an asset. | [default to undefined]
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] [default to undefined]
**format** | **string** | (optionally) you can attach a tag to a format. so when you delete a format this tag will get removed from the asset as well. | [optional] [default to undefined]
**category** | [**TagCategoryEnum**](TagCategoryEnum) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededDiscoverableRelatedTag } from '';

// TODO: Update the object below with actual values
const example: SeededDiscoverableRelatedTag = {
    "schema": null, // 
    "text": null, // This is the description of the tag.
    "asset": null, // this is a uuid that references an asset.
    "mechanism": null, // 
    "format": null, // (optionally) you can attach a tag to a format. so when you delete a format this tag will get removed from the asset as well.
    "category": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededDiscoverableRelatedTag;
console.log(exampleParsed);
```




