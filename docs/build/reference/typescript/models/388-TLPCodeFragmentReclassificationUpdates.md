
# TLPCodeFragmentReclassificationUpdates


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**previous** | [**Classification**](Classification) |  | [default to undefined]
**current** | [**Classification**](Classification) |  | [default to undefined]

## Example

```typescript
import { TLPCodeFragmentReclassificationUpdates } from '';

// TODO: Update the object below with actual values
const example: TLPCodeFragmentReclassificationUpdates = {
    "schema": null, // 
    "previous": null, // 
    "current": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TLPCodeFragmentReclassificationUpdates;
console.log(exampleParsed);
```




