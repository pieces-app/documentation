
# Seed

A seed Model used to wrap a format or asset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**asset** | [**SeededAsset**](SeededAsset) |  | [optional] [default to undefined]
**type** | **string** |  | [default to undefined]

## Example

```typescript
import { Seed } from '';

// TODO: Update the object below with actual values
const example: Seed = {
    "schema": null, // 
    "asset": null, // 
    "type": SEEDED_ASSET, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Seed;
console.log(exampleParsed);
```




