
# FileMetadata

This is a model for metadata of a file!

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**name** | **string** | This is the name of your file. | [optional] [default to undefined]
**ext** | [**ClassificationSpecificEnum**](ClassificationSpecificEnum) |  | [optional] [default to undefined]
**size** | **number** | This is the size(in bytes) | [optional] [default to undefined]

## Example

```typescript
import { FileMetadata } from '';

// TODO: Update the object below with actual values
const example: FileMetadata = {
    "schema": null, // 
    "name": null, // This is the name of your file.
    "ext": null, // 
    "size": null, // This is the size(in bytes)
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FileMetadata;
console.log(exampleParsed);
```




