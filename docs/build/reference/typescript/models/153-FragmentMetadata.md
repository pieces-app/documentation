
# FragmentMetadata

This is a model for metadata of a file!

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**ext** | [**ClassificationSpecificEnum**](ClassificationSpecificEnum) |  | [optional] [default to undefined]

## Example

```typescript
import { FragmentMetadata } from '';

// TODO: Update the object below with actual values
const example: FragmentMetadata = {
    "schema": null, // 
    "ext": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FragmentMetadata;
console.log(exampleParsed);
```




