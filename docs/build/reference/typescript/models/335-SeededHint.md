
# SeededHint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] [default to undefined]
**asset** | **string** | This is an asset id that we are using to link this to an asset. | [optional] [default to undefined]
**type** | [**HintTypeEnum**](HintTypeEnum) |  | [default to undefined]
**text** | **string** | This is the text of the hint. | [default to undefined]
**model** | **string** | this is a model id. that we are using to link this to a model. | [optional] [default to undefined]

## Example

```typescript
import { SeededHint } from '';

// TODO: Update the object below with actual values
const example: SeededHint = {
    "schema": null, // 
    "mechanism": null, // 
    "asset": null, // This is an asset id that we are using to link this to an asset.
    "type": null, // 
    "text": null, // This is the text of the hint.
    "model": null, // this is a model id. that we are using to link this to a model.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededHint;
console.log(exampleParsed);
```




