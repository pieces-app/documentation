
# FlattenedPreview

These are the references of the formats **Only UUIDS**

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**base** | **string** | this is a reference(uuid) to the base format | [default to undefined]
**overlay** | **string** | this is a reference(uuid) to the overlay format | [optional] [default to undefined]

## Example

```typescript
import { FlattenedPreview } from '';

// TODO: Update the object below with actual values
const example: FlattenedPreview = {
    "schema": null, // 
    "base": null, // this is a reference(uuid) to the base format
    "overlay": null, // this is a reference(uuid) to the overlay format
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedPreview;
console.log(exampleParsed);
```




