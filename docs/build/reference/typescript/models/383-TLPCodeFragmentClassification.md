
# TLPCodeFragmentClassification

Model for ML big query classification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**asset** | **string** |  | [default to undefined]
**model** | **string** |  | [default to undefined]
**created** | **string** |  | [default to undefined]
**classification** | **string** |  | [default to undefined]
**probability** | **number** |  | [default to undefined]
**context** | **string** |  | [default to undefined]
**distribution** | **string** |  | [optional] [default to undefined]
**metadata** | [**TLPCodeFragmentClassificationMetadata**](TLPCodeFragmentClassificationMetadata) |  | [optional] [default to undefined]
**user** | **string** | identifier for the user | [default to undefined]
**latency** | **number** | this is the time it takes to run this model. | [optional] [default to undefined]
**system** | [**SystemExecutionInformation**](SystemExecutionInformation) |  | [optional] [default to undefined]

## Example

```typescript
import { TLPCodeFragmentClassification } from '';

// TODO: Update the object below with actual values
const example: TLPCodeFragmentClassification = {
    "schema": null, // 
    "asset": null, // 
    "model": null, // 
    "created": null, // 
    "classification": null, // 
    "probability": null, // 
    "context": null, // 
    "distribution": null, // 
    "metadata": null, // 
    "user": null, // identifier for the user
    "latency": null, // this is the time it takes to run this model.
    "system": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TLPCodeFragmentClassification;
console.log(exampleParsed);
```




