
# CodeAnalysis

This is the ML Analysis object Specific to code.  prediction and similarity are custom types. ** please dont not modify **

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**tokenized** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**language** | **string** |  | [optional] [default to undefined]
**type** | [**ClassificationGenericEnum**](ClassificationGenericEnum) |  | [default to undefined]
**prediction** | **\{ [key: string]: number; \}** |  | [optional] [default to undefined]
**similarity** | **\{ [key: string]: number; \}** |  | [optional] [default to undefined]
**top5Colors** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**top5Sorted** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**analysis** | **string** | this is just a reference to the analysis parent object. | [default to undefined]
**model** | [**Model**](Model) |  | [default to undefined]

## Example

```typescript
import { CodeAnalysis } from '';

// TODO: Update the object below with actual values
const example: CodeAnalysis = {
    "schema": null, // 
    "tokenized": null, // 
    "language": null, // 
    "type": null, // 
    "prediction": null, // 
    "similarity": null, // 
    "top5Colors": null, // 
    "top5Sorted": null, // 
    "id": null, // 
    "analysis": null, // this is just a reference to the analysis parent object.
    "model": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CodeAnalysis;
console.log(exampleParsed);
```




