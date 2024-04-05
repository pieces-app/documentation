
# TLPCodeFragmentDescriptiveStatistics

Model for ML big query Data collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**user** | **string** |  | [default to undefined]
**os** | **string** |  | [default to undefined]
**language** | **string** |  | [default to undefined]
**length** | **number** |  | [default to undefined]
**ast** | **string** |  | [default to undefined]
**timestamp** | **string** |  | [default to undefined]
**asset** | **string** |  | [default to undefined]
**context** | **string** | this is the application in which this was created from. | [default to undefined]
**snippet** | **string** | this is the value of the snippet | [default to undefined]

## Example

```typescript
import { TLPCodeFragmentDescriptiveStatistics } from '';

// TODO: Update the object below with actual values
const example: TLPCodeFragmentDescriptiveStatistics = {
    "schema": null, // 
    "user": null, // 
    "os": null, // 
    "language": null, // 
    "length": null, // 
    "ast": null, // 
    "timestamp": null, // 
    "asset": null, // 
    "context": null, // this is the application in which this was created from.
    "snippet": null, // this is the value of the snippet
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TLPCodeFragmentDescriptiveStatistics;
console.log(exampleParsed);
```




