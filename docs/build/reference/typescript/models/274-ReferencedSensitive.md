
# ReferencedSensitive

A reference to a sensitive which at minimum must have the Sensitive id. But in the case of a hydrated client API it may have a populated reference of type Sensitive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**reference** | [**FlattenedSensitive**](FlattenedSensitive) |  | [optional] [default to undefined]

## Example

```typescript
import { ReferencedSensitive } from '';

// TODO: Update the object below with actual values
const example: ReferencedSensitive = {
    "schema": null, // 
    "id": null, // 
    "reference": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedSensitive;
console.log(exampleParsed);
```




