
# FlattenedShares

This is just an iterable of our individual share models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**iterable** | [**Array&lt;FlattenedShare&gt;**](FlattenedShare) |  | [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]

## Example

```typescript
import { FlattenedShares } from '';

// TODO: Update the object below with actual values
const example: FlattenedShares = {
    "schema": null, // 
    "iterable": null, // 
    "score": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedShares;
console.log(exampleParsed);
```




