
# ReuseReaction

if reuse was used in the reaction then we can provide the uuid of the asset that was reused.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**asset** | **string** |  | [default to undefined]

## Example

```typescript
import { ReuseReaction } from '';

// TODO: Update the object below with actual values
const example: ReuseReaction = {
    "schema": null, // 
    "asset": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReuseReaction;
console.log(exampleParsed);
```




