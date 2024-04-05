
# GraphicalImageDescriptiveStatistics

Model for collecting descriptive statistics of images uploaded to Pieces

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**width** | **string** |  | [default to undefined]
**height** | **string** |  | [default to undefined]
**channels** | **string** |  | [default to undefined]
**asset** | **string** |  | [default to undefined]
**user** | **string** |  | [optional] [default to undefined]
**created** | **string** |  | [default to undefined]
**os** | **string** |  | [default to undefined]

## Example

```typescript
import { GraphicalImageDescriptiveStatistics } from '';

// TODO: Update the object below with actual values
const example: GraphicalImageDescriptiveStatistics = {
    "schema": null, // 
    "width": null, // 
    "height": null, // 
    "channels": null, // 
    "asset": null, // 
    "user": null, // 
    "created": null, // 
    "os": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GraphicalImageDescriptiveStatistics;
console.log(exampleParsed);
```




