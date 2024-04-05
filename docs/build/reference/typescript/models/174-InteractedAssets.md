
# InteractedAssets

A model which contains a list of InteractedAssets with potentially additional properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**iterable** | [**Array&lt;InteractedAsset&gt;**](InteractedAsset) |  | [default to undefined]

## Example

```typescript
import { InteractedAssets } from '';

// TODO: Update the object below with actual values
const example: InteractedAssets = {
    "schema": null, // 
    "iterable": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InteractedAssets;
console.log(exampleParsed);
```




