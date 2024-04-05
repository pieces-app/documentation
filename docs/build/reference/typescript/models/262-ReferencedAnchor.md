
# ReferencedAnchor

This is the referenced version of a Anchor, main used for the uuid.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**reference** | [**FlattenedAnchor**](FlattenedAnchor) |  | [optional] [default to undefined]

## Example

```typescript
import { ReferencedAnchor } from '';

// TODO: Update the object below with actual values
const example: ReferencedAnchor = {
    "schema": null, // 
    "id": null, // 
    "reference": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedAnchor;
console.log(exampleParsed);
```




