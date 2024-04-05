
# TLPCodeFragmentReclassification

Model for ML big query Reclassification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**asset** | **string** |  | [default to undefined]
**model** | **string** |  | [default to undefined]
**created** | **string** |  | [default to undefined]
**updates** | [**TLPCodeFragmentReclassificationUpdates**](TLPCodeFragmentReclassificationUpdates) |  | [default to undefined]
**user** | **string** | this is the user that is reclassifying | [default to undefined]
**context** | **string** | this is the application is which this is from. | [default to undefined]

## Example

```typescript
import { TLPCodeFragmentReclassification } from '';

// TODO: Update the object below with actual values
const example: TLPCodeFragmentReclassification = {
    "schema": null, // 
    "asset": null, // 
    "model": null, // 
    "created": null, // 
    "updates": null, // 
    "user": null, // this is the user that is reclassifying
    "context": null, // this is the application is which this is from.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TLPCodeFragmentReclassification;
console.log(exampleParsed);
```




