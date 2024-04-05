
# SeededUltraSuiteAsset

A SeededUEAsset is the minimum data sent from UE required to create an asset within Pieces.  Fragment & file are both optional properties however we will throw an internal error if both fragment and file are passed through or if both are undefined.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**name** | **string** | (optional) name is the name of the file | [optional] [default to undefined]
**ext** | [**ClassificationSpecificEnum**](ClassificationSpecificEnum) |  | [optional] [default to undefined]
**format** | [**SeededFormat**](SeededFormat) |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SeededUltraSuiteAsset } from '';

// TODO: Update the object below with actual values
const example: SeededUltraSuiteAsset = {
    "schema": null, // 
    "name": null, // (optional) name is the name of the file
    "ext": null, // 
    "format": null, // 
    "description": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededUltraSuiteAsset;
console.log(exampleParsed);
```




