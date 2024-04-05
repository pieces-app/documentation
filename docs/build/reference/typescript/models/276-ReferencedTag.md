
# ReferencedTag

[DAG Safe] version of a Tag Model. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**reference** | [**FlattenedTag**](FlattenedTag) |  | [optional] [default to undefined]

## Example

```typescript
import { ReferencedTag } from '';

// TODO: Update the object below with actual values
const example: ReferencedTag = {
    "schema": null, // 
    "id": null, // 
    "reference": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedTag;
console.log(exampleParsed);
```




