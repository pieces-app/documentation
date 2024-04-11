
# FilePickerInput

This is the input model for the FilePicker

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**allowedExtensions** | **Array&lt;string&gt;**

## Example

```typescript
import { FilePickerInput } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FilePickerInput = {
    "schema": null,
    "allowedExtensions": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FilePickerInput
console.log(exampleParsed)
```


