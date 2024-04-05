
# ReferencedFormat

A reference to a format which at minimum must have the format\'s id. But in the case of a hydrated client API it may have a populated reference of type Format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** | The id of the Format | [default to undefined]
**reference** | [**FlattenedFormat**](FlattenedFormat) |  | [optional] [default to undefined]

## Example

```typescript
import { ReferencedFormat } from '';

// TODO: Update the object below with actual values
const example: ReferencedFormat = {
    "schema": null, // 
    "id": 102ff265-fdfb-4142-8d94-4932d400199c, // The id of the Format
    "reference": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedFormat;
console.log(exampleParsed);
```




