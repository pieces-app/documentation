
# PseudoAssets

This is a model of all optional properties, that will get returned from /assets/pseudo.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**identifiers** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] [default to undefined]

## Example

```typescript
import { PseudoAssets } from '';

// TODO: Update the object below with actual values
const example: PseudoAssets = {
    "schema": null, // 
    "identifiers": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PseudoAssets;
console.log(exampleParsed);
```




