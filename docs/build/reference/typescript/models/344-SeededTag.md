
# SeededTag

This is the minimum information needed when creating a Tag.  Default we will attach manual to a tag unless otherwise specified for mechanism.  you can optionally add an asset, format, or person uuid to attach this tag directly to it  TODO consider updating these asset,format to referenced Models

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**text** | **string** | This is the description of the tag. | [default to undefined]
**asset** | **string** | this is a uuid that references an asset. | [optional] [default to undefined]
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] [default to undefined]
**category** | [**TagCategoryEnum**](TagCategoryEnum) |  | [optional] [default to undefined]
**person** | **string** | uuid of the person, you want to add this tag too | [optional] [default to undefined]

## Example

```typescript
import { SeededTag } from '';

// TODO: Update the object below with actual values
const example: SeededTag = {
    "schema": null, // 
    "text": null, // This is the description of the tag.
    "asset": null, // this is a uuid that references an asset.
    "mechanism": null, // 
    "category": null, // 
    "person": null, // uuid of the person, you want to add this tag too
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededTag;
console.log(exampleParsed);
```




