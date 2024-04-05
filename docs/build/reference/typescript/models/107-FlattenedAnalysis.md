
# FlattenedAnalysis


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**code** | [**CodeAnalysis**](CodeAnalysis) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**format** | **string** | this is a reference to the format that it belongs too. | [default to undefined]
**image** | [**FlattenedImageAnalysis**](FlattenedImageAnalysis) |  | [optional] [default to undefined]

## Example

```typescript
import { FlattenedAnalysis } from '';

// TODO: Update the object below with actual values
const example: FlattenedAnalysis = {
    "schema": null, // 
    "code": null, // 
    "id": null, // 
    "format": null, // this is a reference to the format that it belongs too.
    "image": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedAnalysis;
console.log(exampleParsed);
```




