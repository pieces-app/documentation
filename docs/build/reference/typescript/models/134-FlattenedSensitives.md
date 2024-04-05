
# FlattenedSensitives

This is a flattened representation of multiple sensitive pieces of data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**iterable** | [**Array&lt;ReferencedSensitive&gt;**](ReferencedSensitive) |  | [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]

## Example

```typescript
import { FlattenedSensitives } from '';

// TODO: Update the object below with actual values
const example: FlattenedSensitives = {
    "schema": null, // 
    "iterable": null, // 
    "score": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedSensitives;
console.log(exampleParsed);
```




