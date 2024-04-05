
# FilePickerInput

This is the input model for the FilePicker

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**allowedExtensions** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { FilePickerInput } from '';

// TODO: Update the object below with actual values
const example: FilePickerInput = {
    "schema": null, // 
    "allowedExtensions": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FilePickerInput;
console.log(exampleParsed);
```




