
# Shares

this is just an iterable of our individual share models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**iterable** | [**Array&lt;Share&gt;**](Share) | this is just an iterable of our individual share models. | [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]

## Example

```typescript
import { Shares } from '';

// TODO: Update the object below with actual values
const example: Shares = {
    "schema": null, // 
    "iterable": null, // this is just an iterable of our individual share models.
    "score": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Shares;
console.log(exampleParsed);
```




