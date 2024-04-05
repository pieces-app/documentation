
# InteractedAsset

A model that represents an asset that has been interacted with. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | **string** | A uuid model. 36 Characters (4 Dashes, 32 Numbers/Letters)  | [optional] [default to undefined]
**interactions** | [**InteractedAssetInteractions**](InteractedAssetInteractions) |  | [optional] [default to undefined]

## Example

```typescript
import { InteractedAsset } from '';

// TODO: Update the object below with actual values
const example: InteractedAsset = {
    "asset": 6a2f41a3-c54c-fce8-32d2-0324e1c32e22, // A uuid model. 36 Characters (4 Dashes, 32 Numbers/Letters) 
    "interactions": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InteractedAsset;
console.log(exampleParsed);
```




