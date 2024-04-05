
# FragmentFormat

This will be either a TransferableString or TransferableBytes that represent your fragment. ONLY Pass one or the other DONT pass both or neither.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**string** | [**TransferableString**](TransferableString) |  | [optional] [default to undefined]
**bytes** | [**TransferableBytes**](TransferableBytes) |  | [optional] [default to undefined]
**metadata** | [**FragmentMetadata**](FragmentMetadata) |  | [optional] [default to undefined]

## Example

```typescript
import { FragmentFormat } from '';

// TODO: Update the object below with actual values
const example: FragmentFormat = {
    "schema": null, // 
    "string": null, // 
    "bytes": null, // 
    "metadata": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FragmentFormat;
console.log(exampleParsed);
```




