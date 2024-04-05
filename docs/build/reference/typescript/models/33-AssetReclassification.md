
# AssetReclassification

This is a model that will represent the miminum properties required to update the classification of this asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**ext** | [**ClassificationSpecificEnum**](ClassificationSpecificEnum) |  | [default to undefined]
**asset** | [**Asset**](Asset) |  | [default to undefined]

## Example

```typescript
import { AssetReclassification } from '';

// TODO: Update the object below with actual values
const example: AssetReclassification = {
    "schema": null, // 
    "ext": null, // 
    "asset": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetReclassification;
console.log(exampleParsed);
```




