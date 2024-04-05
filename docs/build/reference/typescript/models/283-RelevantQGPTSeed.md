
# RelevantQGPTSeed

This is a generic model used, to wrap a seed, as well as give an identifier used to further identifiy this snippet.  Seed is optional here because you may just want to provide the id, and not the original seed.  id is also optional here as you may provide an id or not here.(however with specific endpoint this ID is a guarentee.)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**seed** | [**Seed**](Seed) |  | [optional] [default to undefined]
**path** | **string** | This is an optional file path | [optional] [default to undefined]
**asset** | [**ReferencedAsset**](ReferencedAsset) |  | [optional] [default to undefined]

## Example

```typescript
import { RelevantQGPTSeed } from '';

// TODO: Update the object below with actual values
const example: RelevantQGPTSeed = {
    "schema": null, // 
    "id": null, // 
    "seed": null, // 
    "path": null, // This is an optional file path
    "asset": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RelevantQGPTSeed;
console.log(exampleParsed);
```




